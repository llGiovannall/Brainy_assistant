"use client";

import React, { useState } from "react";
import FullWidthGrid from "@/components/grids";
import DifferentLength from "@/components/ui/linearChart";
import { ProgressBar, Label } from '@heroui/react';
import MultiSeriesRadar from "@/components/ui/radarChart";

export default function RedacaoPage() {
  const [redacao, setRedacao] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  

  const corrigir = async () => {
    const response = await fetch("https://brainy-assistant.onrender.com/corrigir", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texto: redacao
      }),
    });

    const dados = await response.json();
    console.log(dados);
    setResultado(dados);
  };

  return (

   <div className="mt-10 min-h-screen bg-black-opacity-50 flex flex-col items-center py-10">
  <form className="flex flex-col gap-4 w-[700px]" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="contents">
            <div className="flex flex-col">
                <label htmlFor="input" className="font-sans text-lg">
					Digite sua redação
				</label>
               <textarea 
  name="input" 
  id="input" 
  rows={5} 
  maxLength={3000} 
  required
  value={redacao}
  onChange={(e) => setRedacao(e.target.value)}
     className="w-full h-[450px] rounded-lg border border-gray-500 p-4 resize-none text-lg bg-white text-black"
/>
            </div>
            <button type="button" onClick = {corrigir }
				className="rounded-lg p-3 bg-blue-500/20 border-2 border-solid border-blue-500/20 transition-colors hover:bg-blue-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
					<path fillRule="evenodd"
						d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
						
clipRule="evenodd"/>
				</svg>
				<span className="font-bold">Corrigir</span>
			</button>
   </fieldset>
    </form>
          {resultado && (
  <div    className="w-full h-[1200px] rounded-lg border border-gray-500 p-4 resize-none text-lg bg-black/50 text-white">
<ProgressBar aria-label="nota_competencia" 
   className="w-full flex flex-col gap-1"
  value={resultado.competencia_1}
     minValue={0}
  maxValue={200}>
          <Label>Competência 1</Label>
         <ProgressBar.Output />
           <ProgressBar.Track className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
         <ProgressBar.Fill className="h-full bg-indigo-500 transition-all" />
       </ProgressBar.Track>
           </ProgressBar>
<ProgressBar aria-label="nota_competencia" 
   className="w-full flex flex-col gap-1"
  value={resultado.competencia_2}
     minValue={0}
  maxValue={200}>
          <Label>Competência 2</Label>
         <ProgressBar.Output />
           <ProgressBar.Track className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
         <ProgressBar.Fill className="h-full bg-indigo-500 transition-all" />
       </ProgressBar.Track>
           </ProgressBar>
  <ProgressBar aria-label="nota_competencia" 
   className="w-full flex flex-col gap-1"
  value={resultado.competencia_3}
     minValue={0}
  maxValue={200}>
          <Label>Competência 3</Label>
         <ProgressBar.Output />
           <ProgressBar.Track className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
         <ProgressBar.Fill className="h-full bg-indigo-500 transition-all" />
       </ProgressBar.Track>
           </ProgressBar>
           <ProgressBar aria-label="nota_competencia" 
   className="w-full flex flex-col gap-1"
  value={resultado.competencia_4}
     minValue={0}
  maxValue={200}>
          <Label>Competência 4</Label>
         <ProgressBar.Output />
           <ProgressBar.Track className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
         <ProgressBar.Fill className="h-full bg-indigo-500 transition-all" />
       </ProgressBar.Track>
           </ProgressBar>
           <ProgressBar aria-label="nota_competencia" 
   className="w-full flex flex-col gap-1"
  value={resultado.competencia_5}
     minValue={0}
  maxValue={200}>
          <Label>Competência 5</Label>
         <ProgressBar.Output />
           <ProgressBar.Track className="h-2 w-full bg-gray-600 rounded-full overflow-hidden">
         <ProgressBar.Fill className="h-full bg-indigo-500 transition-all" />
       </ProgressBar.Track>
           </ProgressBar>
   
    <FullWidthGrid> Nota Total: {resultado.nota_total}</FullWidthGrid>
    <DifferentLength secoes= {resultado} />
  <MultiSeriesRadar competencias={resultado} />
  </div>
)}
     
    </div>

    
      
  );
}