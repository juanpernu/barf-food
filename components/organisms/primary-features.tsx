import Image from "next/image";
import Link from "next/link";
import { Dog, PawPrint, Rocket } from "lucide-react";
import { Container } from "@/components/atoms/container";

const features = [
  {
    name: "¿Cómo nació la dieta B.A.R.F.?",
    description:
      "Fue desarrollada por el veterinario australiano Ian Billinghurst en la década de 1990, con el propósito de que sus animales tengan una alimentación mas cercana a sus ancestros, es decir a su estado natural.",
    icon: Dog,
    source: "https://drianbillinghurst.com/",
  },
  {
    name: "Diferencias entre alimentación cruda y balanceados",
    description:
      "Los alimentos naturales y crudos, no pasan por ningún tipo de proceso que los altere. Los procesados han sido sometidos a algún tipo de procesamiento y pueden contener conservantes, colorantes, y sabores artificiales.",
    icon: PawPrint,
    source: "https://drianbillinghurst.com/",
  },
  {
    name: "Sistema inmunológico fuerte",
    description:
      "La dieta B.A.R.F fortalece el sistema inmunológico y mejor la digestión mediante la incorporación de nutrientes esenciales y enzimas vivas. Así se reducen infecciones e inflamaciones",
    icon: Rocket,
    source: "https://drianbillinghurst.com/",
  },
];

export function PrimaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="bg-violet-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-slate-800">
            ¿Qué es la dieta B.A.R.F?
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Pocket was built for investors like you who play by their own rules
            and aren’t going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Pocket has
            it.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="flex flex-col justify-between rounded-2xl transition-all text-violet-600 hover:text-white ease-in shadow-sm border border-violet-400 bg-violet-300 hover:bg-violet-500 p-8"
            >
              <div>
                <feature.icon className="h-10 w-10" />
                <h3 className="mt-6 font-semibold text-2xl">{feature.name}</h3>
                <p className="mt-2 font-light text-lg">{feature.description}</p>
              </div>
              <Link
                href={feature.source}
                className="mt-2 font-light text-sm hover:underline"
              >
                Ver fuente
              </Link>
            </li>
          ))}
        </ul>
      </Container>
      <div className="absolute z-[-10] translate-x-[-40%] translate-y-[-80%] w-full h-[1000px]">
        <Image
          src="/features-bg.svg"
          alt="Pets"
          className="w-full h-full"
          layout="fill"
          priority
        />
      </div>
    </section>
  );
}
