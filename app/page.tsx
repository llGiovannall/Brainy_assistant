"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';


export default function Home() {
  const router = useRouter();
  return (
   <div className="flex flex-col w-full min-h-screen font-inter">
  <main className="grid grid-cols-1 md:grid-cols-2 w-full flex-1">

    <div className="w-full h-full flex items-center justify-center bg-[#0b0438] py-16 md:py-32 px-6 md:px-16">
      <Image
        src="/brain.png"
        alt="brain.png"
        width={800}
        height={400}
        className="w-40 h-40 md:w-[800px] md:h-[400px]"
        priority
      />
    </div>

    <div className="w-full h-full bg-[#4F4F4F] flex flex-col justify-center gap-6 py-16 md:py-32 px-6 md:px-16">
      <div>
        <h1 className="text-4xl font-sans text-white">
          Chegue no dia do vestibular preparado com o Brainy Assistant
        </h1>
        <p className="text-white dark:text-zinc-400 mt-4">
   Pratique redação, revise conteúdos com aulas e exercícios, e acompanhe seu progresso em um só lugar.
        </p>
      </div>

      <div className="flex flex-row gap-4">
        <Button variant="contained" size="medium" style={{ minWidth: 120, textTransform: "none" }} onClick={() => router.push("/redacao")}>
          Redação
        </Button>
        <Button variant="outlined" size="medium" style={{ minWidth: 120, textTransform: "none" }} onClick={() => router.push("/mural")}>
          Mural
        </Button>
      </div>
    </div>

  </main>
</div>
  );
}