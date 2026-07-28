
import psycopg2
import json 

def descobre_assunto(numero, idioma="Inglês"):
    if 1 <= numero <= 5:
        return idioma
    elif 6 <= numero <= 45:
        return "Linguagens"
    elif 46 <= numero <= 90:
        return "Humanas"
    return "Desconhecido"

with open("questoes.json", "r", encoding="utf-8") as f:
    dados = json.load(f)
    questoes = dados["questoes"]

    for q in questoes:
     q["assunto"] = descobre_assunto(q["numero"])

try:
    conn = psycopg2.connect(
        host="localhost",
        database="bancoquestoes",
        user="postgres",
        password="admin123"
    )
    cursor = conn.cursor()
    for q in questoes:
        cursor.execute(
            "INSERT INTO questoes (numero, enunciado, alternativa_a, alternativa_b, alternativa_c, alternativa_d, alternativa_e, resposta_correta, assunto) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)",
            (q["numero"], q["enunciado"], q["alternativas"]["A"], q["alternativas"]["B"], q["alternativas"]["C"], q["alternativas"]["D"], q["alternativas"]["E"], q["resposta_correta"], q["assunto"])
        )
    conn.commit()
    print(f"{len(questoes)} questões inseridas!")

except psycopg2.Error as e:
    print(f"ERRO: {e}")

finally:
    if 'conn' in locals():
        cursor.close()
        conn.close()

