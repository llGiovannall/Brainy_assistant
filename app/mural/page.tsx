"use client";



import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomeCard(){
     const router = useRouter();
     return (
    <section className="relative overflow-hidden rounded-3xl bg-sidebar-gradient p-6 text-white">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left Side (Text) */}
        <div className="max-w-xl md:w-3/5">
          <h1 className="text-balance text-3xl font-semibold">Welcome back, Jennifer</h1>
          <p className="mt-2 text-sm leading-6 text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.
          </p>
          <div onClick={()=> router.push("/banco_de_questoes")}className="mt-2 flex w-64 h-32 items-center gap-4 rounded-2xl bg-white/10 px-3 py-5 text-2x1"  >
            <div>
              <div className="font-large" >Banco de questões</div>
             
            </div>
          </div>
        </div>

        {/* Right Side (Image fills 50%) */}
        <div className="relative lg:w-2/5">
          <div className="relative w-full h-64 md:h-full min-h-[250px]">
            <Image
              src="/claudinho.jpeg"
              alt="claudinho"
              className="rounded-2xl object-cover opacity-90"
              fill
              sizes="50vw"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
    </section>
  )
}


