import { Metadata } from "next";
import Link from "next/link";
import { Modak } from "next/font/google";
import clsx from "clsx";
import RegistrationSteps from "@/components/organisms/forms/user-registration/stepper";
import { buttonVariants } from "@/components/atoms/button";

export const metadata: Metadata = {
  title: "Hōfu - Registro",
};

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Signup() {
  return (
    <section>
      <div className="container relative h-full md:h-[800px] flex-col items-center md:justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-violet-500" />
          <div className="relative z-20 flex-col items-center text-lg font-medium">
            <span className="text-base font-thin text-white">豊富</span>
            <h1
              className={clsx(
                modak.className,
                "text-4xl tracking-tight text-white"
              )}
            >
              Hōfu
            </h1>
          </div>
        </div>
        <div className="lg:p-8 py-10">
          <div className="mx-auto flex md:w-96 flex-col justify-center space-y-6 sm:w-[350px]">
            <RegistrationSteps />
            <div className="flex flex-col space-y-4 text-center">
              <h1 className="text-3xl font-semibold tracking-tight">
                🎉 Felicitaciones!
              </h1>
              <p className="text-base text-neutral-500">
                Estamos desembarcando en tu país. Te vamos a estar informando a
                tu casilla de mail cuando puedas adquirir nuestros productos en
                tu veterinaria de confianza.
              </p>
              <Link href="/" className={clsx(buttonVariants())}>
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
