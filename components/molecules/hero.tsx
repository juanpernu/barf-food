import { Modak } from "next/font/google";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { ClipboardPen } from "lucide-react";

import { buttonVariants } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Container } from "@/components/atoms/container";

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
});

export function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <span className="text-lg font-thin text-slate-800">豊富</span>
            <h1
              className={clsx(
                modak.className,
                "text-8xl tracking-tight text-violet-500"
              )}
            >
              Hōfu
            </h1>
            <h3 className="text-4xl font-medium tracking-tight text-slate-900">
              Alimento apropiado a su especie
            </h3>
            <p className="mt-2 text-lg text-slate-600">
              Mejora su vida y simplificá la tuya. Regalales calidad de vida a
              corto, mediano y largo plazo con nuestros productos naturales.
            </p>
            <div className="mt-8 flex gap-x-6 gap-y-4">
              <Input type="email" placeholder="Email" />
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className={clsx(
                  buttonVariants({ variant: "outline" }),
                  "border-amber-400 bg-amber-300 hover:bg-amber-400"
                )}
              >
                <ClipboardPen className="h-4 w-4 flex-none" />
                <span className="ml-2.5">Registrarme</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 aspect-[366/300]">
            {/* <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" /> */}
            <Image
              src="/pets-frame.svg"
              alt="Pets illustration"
              className="z-10 pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,white_60%,transparent)]"
              layout="fill"
              priority
            />
          </div>
        </div>
      </Container>
      <div className="absolute flex justify-end z-[-10] translate-y-[-70%] w-full">
        <Image
          src="/hero-bg.svg"
          alt="Pets"
          width={700}
          height={400}
          layout="contain"
          priority
        />
      </div>
    </section>
  );
}
