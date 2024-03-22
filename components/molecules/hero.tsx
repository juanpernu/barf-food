"use client";

import * as React from "react";
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
  const [email, setEmail] = React.useState("");
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
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Link
                href={`/signup?email=${email}`}
                className={clsx(
                  buttonVariants({ variant: "outline" }),
                  "!border-amber-400 !bg-amber-300 hover:!bg-amber-400",
                  {
                    "!bg-neutral-100 !border-neutral-200 !text-neutral-400 !pointer-events-none":
                      !email,
                  }
                )}
              >
                <ClipboardPen className="h-4 w-4 flex-none" />
                <span className="ml-2.5">Registrarme</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 aspect-[366/300]">
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
