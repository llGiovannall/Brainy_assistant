import json
import postgresql

with open("questoes.json", "r", encoding="utf-8") as f:
    questoes = json.load(f)

    conn = postgresql.connect("bancoquestoes")
cursor = conn.cursor()