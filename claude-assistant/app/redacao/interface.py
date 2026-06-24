import streamlit as st
from aiprovider import corrigir_redacao

st.title("Corretor ENEM")

redacao = st.text_area(
    "Cole sua redação aqui",
    height=400
)


if st.button("Corrigir"):
 st.session_state.resultado = corrigir_redacao(redacao)
if "resultado" in st.session_state:
 r = st.session_state.resultado
 st.subheader("Resultado")
 st.write(f"Competência 1: {r['competencia_1']}")
 st.write( f"Competência 2: {r['competencia_2']}")
 st.write(f"Competência 3: {r['competencia_3']}")
 st.write( f"Competência 4: {r['competencia_4']}")
 st.write(f"Competência 5: {r['competencia_5']}")
 st.write( f"Nota Total: {r['nota_total']}")