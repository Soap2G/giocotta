from random import choice
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
            # print(current_line)
            # print(current_width)

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
        column_width = 85  # Width of each column
        line_height = 10  # Height of each line
       
        text = "Curiosità n. " + str(c_number)
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'L', 0.1, font='Alegreya')
        text = curiosity
        self.add_column_text(text, x_position, self.get_y(), column_width, line_height, 'L', 0.1)
        text = "\n\nFatto n. " + str(f_number)
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
        self.image('images/flowers-menu-long-spoiler-supercolored-update.png', x=3, y=image_y_position, w=self.w*2/3-3)  # 20 is for left and right margin

############################################################################################################################
############################################################################################################################
############################################################################################################################
############################################################################################################################
        offset = 1
        # Second column
        x_right = self.w*1/3-0.5+offset
        self.set_xy(x_right, self.y_start)

        text = "menù".upper()
        y_position = self.y_start  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 36  # Height of each line
        x_position = x_right+0.2-offset  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.5)

############################################################################################################################
############################################################################################################################

        text = "Primo"
        y_position = self.get_y()+15  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 14  # Height of each line
        x_position = x_right-offset-0.4 #+ (self.w*1/3 - column_width)/2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3, font='Alegreya')

############################################################################################################################
############################################################################################################################


        text = "Passatelli asciutti con crema di carciofi \ne guanciale croccante"
        y_position = self.get_y()  # Y position of the start of the text
        column_width = 68  # Width of each column
        line_height = 10  # Height of each line
        x_position = x_right-1.3-offset  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)

############################################################################################################################
############################################################################################################################

        text = "Secondo"
        y_position = self.get_y()+15  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 14  # Height of each line
        x_position = x_right-offset-0.7  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3, font='Alegreya')

############################################################################################################################
############################################################################################################################


        text = "Filetto di manzo su riduzione al sangiovese"
        y_position = self.get_y()  # Y position of the start of the text
        column_width = 68  # Width of each column
        line_height = 10  # Height of each line
        x_position = x_right-1.8-offset #+ (self.w*1/3 - column_width)/2  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3)

############################################################################################################################
############################################################################################################################


        text = "Dessert"
        y_position = self.get_y()+15  # Y position of the start of the text
        column_width = 80  # Width of each column
        line_height = 14  # Height of each line
        x_position = x_right-1.4-offset  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.3, font='Alegreya')

############################################################################################################################
############################################################################################################################


        text = "Galleria di dolci monoporzione \nLa torta"
        y_position = self.get_y()  # Y position of the start of the text
        column_width = 68  # Width of each column
        line_height = 10  # Height of each line
        x_position = x_right-2-offset  # X position of the first column
     
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
        self.image('images/couple-poppies-supercolored.png', x=image_x_position, y=image_y_position, w=image_width)  # 20 is for left and right margin

############################################################################################################################
############################################################################################################################

        text = "15 giugno 2024"
        y_position = y_center+50  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 18  # Height of each line
        x_position = x_right-0.5
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.1)



        text = "To see the world,\nthings dangerous to come to,\nto see behind walls,\ndraw closer, to find each other,\nand to feel.\nThat is the purpose of life."
        y_position = 130  # Y position of the start of the text
        column_width = 90  # Width of each column
        line_height = 12  # Height of each line
        x_position = x_right-3  # X position of the first column
     
        self.add_column_text(text, x_position, y_position, column_width, line_height, 'C', 0.4)

        # #Checks for symmetry
        # self.line(self.w*1/3, 0, self.w*1/3, 210)
        # self.line(self.w*2/3, 0, self.w*2/3, 210)
        # self.line(self.w*0.5, 10, self.w*0.5, 210)
        # self.line(self.w*1/6, 10, self.w*1/6, 210)
        # self.line(self.w*5/6, 10, self.w*5/6, 210)
        # self.line(self.w*5/6-20, 20, self.w*5/6-20, 210)
        # self.line(self.w*5/6+20, 20, self.w*5/6+20, 210)
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
    "Più del 50% dell'acqua che beviamo ha la stessa età del sole.",
    "Se i GPS non includessero la relatività generale nei calcoli, la stima della posizione sarebbe sbagliata di una cinquantina di metri.",
    "Il rivelatore ATLAS al CERN pesa circa 60 milioni di banane.",
    "Le leggi della fisica non sono le stesse se invertiamo la destra con la sinistra.",
    "Un fotone creato nel nucleo del sole, impiega 100 000 anni ad arrivare alla sua superficie, ma solo 8 minuti a raggiungere la terra.",
    "Nessuno saprà mai se quello che io intendo come rosso corrisponde a quello che tu intendi come rosso. Pensaci.",
    "Siamo attraversati da decine di miliardi di neutrini ogni secondo.",
    "Al CERN, su duecento miliardi di protoni che vengono sparati gli uni contro gli altri, meno di 100 si scontrano per davvero.",
    "Se mai incontrerete qualcuno fatto di antimateria, NON stringetevi la mano.",
    "C'è la (molto molto molto) remota possibilità che lanciando una palla contro un muro, questa lo attraversi.",
    "Il nome dei famosi diagrammi di Feynman \"pinguino\" si deve ad una scommessa persa da John Ellis al bar, il quale fu costretto ad inserire la parola \"pinguino\" in una sua presentazione.",
    "In qualunque momento, il gamma ray burst proveniente da una supernova può raggiungere la terra e cancellare istantaneamente ogni forma di vita :)",
    "Se si mette insieme tutta la musica mai prodotta (fino ad oggi), si ottengono circa 230 anni.",
    "Una manciata di materia presa da una stella di neutroni pesa come il monte Everest.",
    "Il 28 Giugno 2009, Stephen Hawking ha organizzato una festa a Cambridge per tutti i viaggiatori del tempo. Dopo la fine della festa, che ha passato in solitudine, ha spedito gli inviti.",
    "Se il sole fosse un buco nero, sarebbe una sfera di 3 km di raggio. Il suo raggio attuale è di circa 700 000 km.",
    "Al contrario di come molti credono, il significato dell'acronimo ATLAS (il rivelatore di particelle al CERN) non è \"ATomic LASagna\", bensì \"A Toroidal LHC ApparatuS\".",
    "Nel Modello Standard della fisica delle particelle, con 19 parametri (o 26, a seconda della religione), è possibile spiegare la maggior parte della fisica osservabile.",
    "Più andiamo veloci, più siamo pesanti. Se viaggiassimo al 99% della velocità della luce, la nostra massa sarebbe 10 volte maggiore. Al 99.99% della velocità della luce, la massa aumenta di 100 volte.",
    "La densità di massa media dell'universo è di circa 6 protoni al metro cubo. Nel corpo umano ci sono circa 20 000 000 000 000 000 000 000 000 000 protoni.",
    ]
fact = [
    "Giacomo Leopardi andava matto per i dolci. Si dice che il proprietario di una pasticceria di Napoli abbia comprato un titolo nobiliare con il denaro guadagnato dal poeta",
    "Napoleone non era affatto un nanerottolo, anzi, misurava ben 3cm in più dell'Elisa Cottafava.",
    "Secondo alcune leggende, Boccaccio sarebbe stato un ladro di manoscritti, sottratti all'abbazia di Montecassino.",
    "Durante il suo esilio londinese, Foscolo era seduto a leggere un libro nel suo studio, quando irruppe un suo rivale in amore e prese a sculacciarlo con un frustino.",
    "In vacanza a Capri Moravia andava in giro con un gufo su una spalla, mentre la Morante con un siamese al guinzaglio.",
    "Manzoni soffriva di agorafobia, era terrorizzato all'idea di camminare in strada da solo ed era ossessionato dal cinguettio degli uccelli.",
    "Avallava è la più lunga parola palindroma in italiano.",
    "Ci sono 4 milioni di persone in brasile che parlano correntemente dialetto veneto.",
    "I comuni con il nome più corto in Italia sono Lu (AL), Ne (GE), Mù (BS).",
    "Tasso era ossessionato dalla privacy, tanto che in un'occasione aggredì un servitore sospettato di averlo spiato.",
    "Quando a Vittorio Alfieri non aveva voglia di scrivere, si faceva legare alla sedia da un servitore con la minaccia di non essere liberato fino ad opera ultimata.",
    "Virginia Woolf preferiva scrivere utilizzando l'inchiostro viola. Si dice che questo colore la rilassasse e stimolasse la sua creatività.",
    "Uno dei gatti di Ernest Hemingway aveva sei dita alle zampe.",
    "Mark Twain è nato il giorno in cui è caduta una cometa e ha predetto che sarebbe morto alla sua prossima apparizione. E fu così.",
    "\"Frankenstein\" nacque per caso durante una vacanza tra amici scrittori che si sfidarono a comporre storie dell'orrore; a scriverlo fu la giovanissima Mary Shelley di appena 18 anni.",
    "",
    "",
    "",
    "",
    "",
    ]

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.set_left_margin(0)
pdf.set_right_margin(0)


excluded_number = []
for i,text in enumerate(curiosity):
    # Create PDF object

    # Load custom font
    font_name = 'Bellefair' 
    font_path = 'fonts/Bellefair-Regular.ttf'  
    pdf.add_custom_font(font_name, font_path)
    font_name = 'Alegreya'
    font_path = 'fonts/Alegreya-Bold.ttf'  
    pdf.add_custom_font(font_name, font_path, font_style='B' )
    
    c_number = choice([i for i in range(1,100) if i not in excluded_number])
    excluded_number.append(c_number)

    f_number = choice([i for i in range(1,100) if i not in excluded_number])
    excluded_number.append(f_number)

    # Add the front page content
    pdf.add_page_content(c_number, text, f_number, fact[i])
    # pdf.add_page_content2()
    print("HELPER: \t" + str(i) + " done!")


    # Save the PDF
menu_name = "Menu.pdf"
pdf.output(menu_name)
print("HELPER: \t" + menu_name + " done!")

print("DONE!")
