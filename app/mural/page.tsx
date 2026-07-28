"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WelcomeCard(){
     const router = useRouter();
     return (

    <section className="relative overflow-hidden rounded-3xl bg-sidebar-gradient p-6 text-white">

      <Tabs defaultValue="account" className="w-fit mb-6">
        <TabsList className="flex flex-col h-auto w-fit gap-1">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl md:w-3/5">
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