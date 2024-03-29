import { Modak } from "next/font/google";
import clsx from "clsx";
import { Container } from "@/components/atoms/container";

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
});

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <div className="ml-4">
                <h3
                  className={clsx(
                    modak.className,
                    "text-4xl tracking-tight text-violet-500"
                  )}
                >
                  Hōfu{" "}
                  <span className="text-sm font-thin text-slate-800">豊富</span>
                </h3>
                <p className="mt-1 text-sm">Alimento apropiado a su especie.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">{/* <NavLinks /> */}</nav>
          </div>
          {/* <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-violet-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Descargá la app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Escanea el codigo QR y descargá la app de los stores.
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
