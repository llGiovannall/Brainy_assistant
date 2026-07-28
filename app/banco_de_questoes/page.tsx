 "use client";
 
 
 import { useRouter } from "next/navigation";
 export default function bancoDeQuestoes(){
  const router = useRouter();
    return (
 
  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
         <div className="max-w-xl md:w-3/5">
           <div onClick={()=> router.push("banco_de_questoes/materias/ingles")}className="mt-2 flex w-64 h-32 items-center gap-4 rounded-2xl bg-white/10 px-3 py-5 text-2x1"  >
             <div>
               <div className="font-large" >Inglês</div>
 
             </div>
           </div>
         </div>
         </div>
         )
 }