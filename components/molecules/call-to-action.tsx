import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/atoms/container";
import { buttonVariants } from "@/components/atoms/button";

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-amber-200 py-20 sm:py-28"
    >
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-800 sm:text-4xl">
            Es hora de hacer un cambio
          </h2>
          <p className="mt-4 text-lg text-amber-800">
            Nuestros productos son 100% natural, sin conservantes, sin aditivos
            y sin granos. Hacé tu pedido desde nuestra app y recibilo en el día.
          </p>
          <Link
            href="#hero"
            className={clsx(
              "mt-6 bg-violet-500 hover:bg-violet-800",
              buttonVariants({ variant: "default" })
            )}
          >
            Hacer mi pedido
            <ArrowRightCircle className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
