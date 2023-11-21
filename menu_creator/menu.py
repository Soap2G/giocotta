import random
from random import randint
from fpdf import FPDF

class PDF(FPDF):
    y_start = 10

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
                line_widths.append((current_line, current_width))
                current_line = word + ' '
                current_width = word_width
            else:
                current_line += word + ' '
                current_width += word_width

        # Add the last line if there is any
        if current_line:
            line_widths.append((current_line, current_width))

        # Render the lines
        for line, line_width in line_widths:
            if align == 'C':
                start_x = x + (w - line_width) / 2
            else:
                start_x = x
            self.set_x(start_x)

            for char in line:
                char_width = self.get_string_width(char) + spacing
                self.cell(char_width, h, char, 0, 0)
            self.ln(h)


    def add_page_content(self, c_number, curiosity, f_number, fact):
        # Add a new page
        self.add_page()

        # Set the font for the text
        self.set_font('Bellefair', '', 12)  # Use the font name you defined earlier

        # Define text and its position
        x_position = 10  # X position of the first column
        y_position = self.y_start  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 12  # Height of each line
       
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

        # text = "Quei piccoli piatti colorati per il pane sono un pensiero (non solo pensato, ma anche fabbricato da noi) per voi. \nSperiamo che possano trovare posto nelle vostre case. \nPrendete quello che vi piace di più!"
        y_position = 187  # Y position of the start of the text
        column_width = 70  # Width of each column
        line_height = 12  # Height of each line
        x_position = 15  # X position of the first column

        text = "Quei piccoli piatti colorati per il pane sono un pensiero (non solo pensato, ma anche fabbricato da noi) per voi. \nSperiamo che possano trovare posto nelle vostre case. \nPrendete quello che vi piace di più!"
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
        image_y_position = 230  # Adjust the 60 to fit your image size

        # Add the image to span across both columns
        self.image('images/flowers-menu-med.png', x=0, y=image_y_position, w=self.w)  # 20 is for left and right margin

############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################

        # Second column
        x_right = 10 + 90 + 10
        self.set_xy(x_right, self.y_start)

        text = "menù".upper()
        y_position = 40  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 36  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C')









############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
        






    def add_page_content2(self):
        # Add a new page
        self.add_page()
        y_center = 100

        # Set the font for the text
        self.set_font('Bellefair', '', 12)  # Use the font name you defined earlier

############################################################################################################################
############################################################################################################################

        text = "To see the world,\nthings dangerous to come to,\nto see behind walls,\ndraw closer, to find each other,\nand to feel.\nThat is the purpose of life."
        y_position = y_center+12  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 14  # Height of each line
        x_position = 10  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)


############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################

        # Second column
        x_right = 10 + 90 + 10
        self.set_xy(x_right, self.y_start)

        text = "Elisa e Giovanni"
        y_position = y_center  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 32  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C')

############################################################################################################################
############################################################################################################################

        # Calculate the Y position for the image (at the bottom)
        image_y_position = y_center+8  # Adjust the 60 to fit your image size
        image_width = 50
        image_x_position = self.w*0.75
        image_x_position = x_right + (90 - image_width) / 2

        # Add the image to span across both columns
        self.image('images/couple-poppies.png', x=image_x_position, y=image_y_position, w=image_width)  # 20 is for left and right margin

############################################################################################################################
############################################################################################################################

        text = "15 giugno 2024"
        y_position = y_center+50  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 18  # Height of each line
        x_position = x_right  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C')


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
    random.seed(c_number)
    f_number = randint(1, 100)
    # Add the front page content
    pdf.add_page_content(c_number, text, f_number, fact[i])
    pdf.add_page_content2()

    # Save the PDF
    menu_name = "Menu_" + str(i) + ".pdf"
    pdf.output(menu_name)
    print("HELPER: \t" + menu_name + " done!")

print("DONE!")
