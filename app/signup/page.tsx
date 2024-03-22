import { Metadata } from "next";
import Link from "next/link";
import { Modak } from "next/font/google";
import clsx from "clsx";
import { FirstStepForm } from "@/components/organisms/forms/user-registration/first-step";
import { getCountries } from "@/actions/countries";
import RegistrationSteps from "@/components/organisms/forms/user-registration/stepper";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Hōfu - Registro",
};

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Signup() {
  const countries = await getCountries();

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
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <RegistrationSteps />
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Crear una cuenta
              </h1>
              <p className="text-sm text-neutral-500">
                Completa el formulario para registrarte en nuestra plataforma.
              </p>
            </div>
            <Suspense fallback={<div>Cargando...</div>}>
              <FirstStepForm countries={countries} />
            </Suspense>
            <p className="px-8 text-center text-sm text-neutral-500">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
