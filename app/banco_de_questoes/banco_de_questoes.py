
import pdfplumber

with pdfplumber.open("app/banco_de_questoes/ENEM_2019_P1_CAD_01_DIA_1_AZUL.pdf") as pdf:
    for pagina in pdf.pages:
        texto = pagina.extract_text()
        print(texto)

  

