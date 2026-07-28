from google import genai # type: ignore
from dotenv import load_dotenv
import json
import os
from pathlib import Path


env_path = Path(__file__).parent.parent.parent / ".env.local"

print("ENV PATH:", env_path)

load_dotenv(env_path)
print("API KEY =", os.getenv("GEMINI_API_KEY"))
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"))


print("cliente criado")


def corrigir_redacao(redacao: str) -> dict:
    prompt = f"""
Você é um corretor especializado na matriz oficial do ENEM.

Avalie a redação segundo as 5 competências.

Cada competência deve receber APENAS uma destas notas:

0
40
80
120
160
200

Descrição das competências:

Competência 1:
Domínio da norma padrão da língua portuguesa.

Competência 2:
Compreensão da proposta de redação e aplicação de conceitos de várias áreas do conhecimento.

Competência 3:
Seleção, organização e interpretação de argumentos.

Competência 4:
Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.

Competência 5:
Elaboração de proposta de intervenção para o problema abordado.

A nota total deve ser a soma das cinco competências.
Além das competências, avalie cada seção da redação.

Descrição das seções:
Introdução: É o primeiro parágrafo da redação, ele tem o dever de introduzir o tema da redação citando dois fatores como obstáculos 
para serem argumentados no desenvolvimento 1 e 2 e resolvidos na conclusão.
Desenvolvimento 1: É o segundo parágrafo da redação
Desenvolvimento 2: É o terceiro parágrafo da redação
Conclusão: É o último parágrafo da redação

Para cada uma delas atribua uma nota de 0 a 100 considerando:

- Clareza
- Organização
- Argumentação
- Coesão
- Adequação ao gênero

Se uma seção não existir, retorne nota 0.
Retorne APENAS um JSON válido.


Formato:

{{
    "competencia_1": 0,
    "competencia_2": 0,
    "competencia_3": 0,
    "competencia_4": 0,
    "competencia_5": 0,
    "nota_total": 0,
    "introducao": 0,
    "desenvolvimento_1": 0,
    "desenvolvimento_2": 0,
    "conclusao": 0,
}}

Redação:

{redacao}
"""

    response = client.models.generate_content(
         model="gemini-2.0-flash",
       contents=prompt
    )

    resultado = response.text
    resultado = resultado.replace("```json", "").replace("```", "").strip()

    try:
        dados = json.loads(resultado)
     
    except json.JSONDecodeError:
        print(resultado)
        raise

    return dados
                          




if __name__ == "__main__":
    redacao = input("Cole a redação aqui: ")
    dados = corrigir_redacao(redacao)
    print(f"Nota total: {dados.get('nota_total')}")

