from random import randint
from tkinter.ttk import Style
from fpdf import FPDF

class PDF(FPDF):
    y_start = 20

    def add_custom_font(self, font_name, font_path, font_style=''):
        # Add a TrueType or OpenType font
        self.add_font(font_name, font_style, font_path, uni=True)

    # def add_column_text(self, text, x, y, w, h, align):
    #     self.set_xy(x, y)
    #     self.set_font_size(h)
    #     self.multi_cell(w, h/2, text, 0, align)

    def add_column_text(self, text, x, y, w, h, align, spacing=None, font='Bellefair'):
        self.set_xy(x, y)
        self.set_font_size(h)
        if font == 'Alegreya':
            # print("setting font to alegreya")
            self.set_font('Alegreya', 'B', h)
        else:
            # print("setting font to bellefair")
            self.set_font('Bellefair', '', h)

        
        # Split the text into lines
        lines = text.split("\n")
        if spacing is not None:
            for line in lines:
                    self.add_line_with_spacing(line, x, w, h/2, align, spacing)
                    # self.ln(h/2)
        else:
            self.multi_cell(w, h/2, text, 0, align)

    def add_line_with_spacing(self, line, x, w, h, align, spacing):
        words = line.split(" ")
        current_line = ""
        line_widths = []

        # Calculate the width of each line and the breaking points
        current_width = 0
        for word in words:
            word_width = self.get_string_width(word + ' ') + spacing * (len(word) - 1)
            if current_width + word_width > w and current_line:
                # Record the line and its width
                line_widths.append((current_line, current_width, "true"))
                current_line = word + ' '
                current_width = word_width
            else:
                current_line += word + ' '
                current_width += word_width


        # Add the last line if there is any
        if current_line:
            line_widths.append((current_line, current_width, ""))

        # Render the lines
        for line, line_width, state in line_widths:
            if align == 'C':
                start_x = x + (self.w/3 - line_width) / 2
                # if state == "true":
                #     start_x *= 0.98
            else:
                start_x = x
            self.set_x(start_x)

            for char in line:
                char_width = self.get_string_width(char) + spacing
                self.cell(char_width, h, char, 0, 0)
            self.ln(h)


    def add_page_content(self, c_number, curiosity, f_number, fact):
        # Add a new page
        self.add_page(orientation = 'L')

        # Set the font for the text
        self.set_font('Bellefair', '', 12)  # Use the font name you defined earlier

        # Define text and its position
        x_position = 5  # X position of the first column
        y_position = self.y_start  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 10  # Height of each line
       
        text = "Curiosità n. " + str(c_number)
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'L', 0.1, font='Alegreya')
        text = curiosity
        self.add_column_text(text, x_position, self.get_y(), column_width, line_height, 'L', 0.1)
        text = "\n\nTratto n. " + str(f_number)
        self.add_column_text(text, x_position, self.get_y(), column_width, line_height, 'L', 0.1, font='Alegreya')
        text = fact
        self.add_column_text(text, x_position, self.get_y(), column_width, line_height, 'L', 0.1)

############################################################################################################################
############################################################################################################################
        image_width = 35
        text = "Hai delle foto da condividere?"
        y_position = self.get_y() + (140 - self.get_y() - image_width)/2 - 8  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 10  # Height of each line
        x_position = -2  # X position of the first column
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)

        # Calculate the Y position for the image (at the bottom)
        image_y_position = self.get_y() + 3  # Adjust the 60 to fit your image size
        image_x_position = (self.w*1/3 - image_width)/2

        # Add the image to span across both columns
        self.image('images/qrchimpX4096.png', x=image_x_position, y=image_y_position, w=image_width)  # 20 is for left and right margin


############################################################################################################################
############################################################################################################################

        # text = "Quei piccoli piatti colorati per il pane sono un pensiero (non solo pensato, ma anche fabbricato da noi) per voi. \nSperiamo che possano trovare posto nelle vostre case. \nPrendete quello che vi piace di più!"
        y_position = 140  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 10  # Height of each line
        x_position = -2  # X position of the first column

        text = "Quei piccoli piatti colorati per il pane sono un pensiero \nnon solo pensato, ma anche fabbricato da noi per voi. \nSperiamo che possano trovare posto nelle vostre case. \nPrendete quello che vi piace di più!"
        # text = "Quei piccoli piatti colorati per il pane sono un pensiero"
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.2)
        # text = "(non solo pensato, ma anche fabbricato da noi) per voi."
        # self.add_column_text(text, x_position, y_position+5, column_width, line_height, 'C', 0.2)
        # text = "Speriamo che possano trovare posto nelle vostre case."
        # self.add_column_text(text, x_position, y_position+10, column_width, line_height, 'C', 0.2)
        # text = "Prendete quello che vi piace di più!"
        # self.add_column_text(text, x_position, y_position+15, column_width, line_height, 'C', 0.2)

############################################################################################################################
############################################################################################################################

        # Calculate the Y position for the image (at the bottom)
        image_y_position = 163  # Adjust the 60 to fit your image size

        # Add the image to span across both columns
        self.image('images/flowers-menu-long-spoiler.png', x=0, y=image_y_position, w=self.w*2/3)  # 20 is for left and right margin

############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
        # Second column
        x_right = self.w*1/3
        self.set_xy(x_right, self.y_start)

        text = "menù".upper()
        y_position = self.y_start  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 36  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.5)

############################################################################################################################
############################################################################################################################

        text = "Primo"
        y_position = self.get_y()+15  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 14  # Height of each line
        x_position = x_right #+ (self.w*1/3 - column_width)/2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3, font='Alegreya')

############################################################################################################################
############################################################################################################################


        text = "Passatelli asciutti con crema di carciofi e guanciale croccante"
        y_position = self.get_y()  # Y position of the start of the text
        column_width = 60  # Width of each column
        line_height = 10  # Height of each line
        x_position = x_right-2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)

############################################################################################################################
############################################################################################################################

        text = "Secondo"
        y_position = self.get_y()+15  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 14  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3, font='Alegreya')

############################################################################################################################
############################################################################################################################


        text = "Filetto di manzo su riduzione al sangiovese"
        y_position = self.get_y()  # Y position of the start of the text
        column_width = 60  # Width of each column
        line_height = 10  # Height of each line
        x_position = x_right-2 #+ (self.w*1/3 - column_width)/2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)

############################################################################################################################
############################################################################################################################


        text = "Dessert"
        y_position = self.get_y()+15  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 14  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3, font='Alegreya')

############################################################################################################################
############################################################################################################################


        text = "Galleria di dolci monoporzione proprio come piace all'Elisa! \nAh, ovviamente c'è anche la torta"
        y_position = self.get_y()  # Y position of the start of the text
        column_width = 60  # Width of each column
        line_height = 10  # Height of each line
        x_position = x_right-2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)

############################################################################################################################
############################################################################################################################

############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################


        # Third column
        x_right = self.w*2/3
        self.set_xy(x_right, self.y_start)
        y_center = self.y_start

        text = "Elisa e Giovanni"
        y_position = y_center  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 32  # Height of each line
        x_position = x_right + (self.w*1/3 - column_width)/2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C')

############################################################################################################################
############################################################################################################################

        # Calculate the Y position for the image (at the bottom)
        image_y_position = y_center+8  # Adjust the 60 to fit your image size
        image_width = 50
        image_x_position = self.w*0.75
        image_x_position = x_right + (self.w*1/3 - image_width)/2

        # Add the image to span across both columns
        self.image('images/couple-poppies.png', x=image_x_position, y=image_y_position, w=image_width)  # 20 is for left and right margin

############################################################################################################################
############################################################################################################################

        text = "15 giugno 2024"
        y_position = y_center+50  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 18  # Height of each line
        x_position = x_right
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.1)



        text = "To see the world,\nthings dangerous to come to,\nto see behind walls,\ndraw closer, to find each other,\nand to feel.\nThat is the purpose of life."
        y_position = 130  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 12  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.4)


        # self.line(self.w*1/3, 0, self.w*1/3, 210)
        # self.line(self.w*2/3, 0, self.w*2/3, 210)
        # self.line(self.w*0.5, 10, self.w*0.5, 210)
        # self.line(self.w*1/6, 10, self.w*1/6, 210)
        # self.line(self.w*5/6, 10, self.w*5/6, 210)
        # self.line(116.53304166666663, 10, 116.53304166666663, 210)
        # self.line(116.53304166666663+63.934, 10, 116.53304166666663+63.934, 210)



############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
        
curiosity = [
    # "Più del 50% dell'acqua che beviamo ha la stessa età del sole.",
    "Se i GPS non includessero la relatività generale nei calcoli, la stima della posizione sarebbe sbagliata di una cinquantina di metri.",
    # "Il rivelatore ATLAS ad LHC pesa circa \n60 milioni di banane.",
    # "Le leggi della fisica non sono le stesse \nse invertiamo la destra con la sinistra.",
    # "Se la terra avesse le dimensioni di una \npalla da biliardo, sarebbe così liscia che il monte \neverest si vedrebbe a malapena al microscopio.",
    # "Nessuno saprà mai se quello che io intendo \ncome rosso corrisponde a quello che tu intendi \ncome rosso.",
    # "Siamo attraversati da decine di miliardi di \nneutrini ogni secondo.",
    # "Al CERN, su duecento miliardi di protoni che \nvengono sparati gli uni contro gli altri, \nmeno di 100 si scontrano per davvero.",
    # "Se mai incontrerete qualcuno fatto di antimateria, \nNON stringetevi la mano.",
    # "C'è la (molto molto molto) remota possibilità che \nlanciando una palla contro un muro, \nquesta lo attraversi.",
    ]
fact = [
    "Giacomo Leopardi soffriva di aerofagia.",
    # "Napoleone non era affatto un nanerottolo, anzi, misurava \nben 3cm in più di Elisa Cottafava.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    # "Giacomo Leopardi soffriva di aerofagia.",
    ]

for i,text in enumerate(curiosity):
    # Create PDF object
    pdf = PDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.set_left_margin(0)
    pdf.set_right_margin(0)

    # Load custom font
    font_name = 'Bellefair' 
    font_path = 'fonts/Bellefair-Regular.ttf'  
    pdf.add_custom_font(font_name, font_path)
    font_name = 'Alegreya'
    font_path = 'fonts/Alegreya-Bold.ttf'  
    pdf.add_custom_font(font_name, font_path, font_style='B' )


    c_number = randint(1, 100)
    f_number = randint(1, 100)
    # Add the front page content
    pdf.add_page_content(c_number, text, f_number, fact[i])
    # pdf.add_page_content2()

    # Save the PDF
    menu_name = "Menu_" + str(i) + ".pdf"
    pdf.output(menu_name)
    print("HELPER: \t" + menu_name + " done!")

print("DONE!")
