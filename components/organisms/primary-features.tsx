import Image from "next/image";
import Link from "next/link";
import { Dog, PawPrint, Rocket, ChevronRight } from "lucide-react";
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
    name: "Alimentación cruda vs balanceados",
    description:
      "Los alimentos naturales y crudos, no pasan por ningún tipo de proceso que los altere. Los balanceados han sido sometidos a algún tipo de procesamiento y pueden contener conservantes, colorantes, y sabores artificiales.",
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
      id="primary-features"
      aria-label="Features for building a portfolio"
      className="bg-violet-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900">
            ¿Qué es la dieta B.A.R.F?
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Se basa en alimentar a tus mascotas con comida cruda siguiendo su
            nutrición original como animales carnívoros. Este modo de
            alimentación incluye carne cruda, vísceras, verduras, vitaminas y
            suplementos de minerales. Trata de imitar, en la medida de lo
            posible, las presas que cazarían en la naturaleza.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="flex flex-col justify-between rounded-2xl text-violet-600 shadow-sm border bg-white p-8"
            >
              <div>
                <h3 className="mt-6 font-semibold text-2xl">{feature.name}</h3>
                <p className="mt-2 font-light text-lg">{feature.description}</p>
              </div>
              <Link
                href={feature.source}
                className="mt-2 font-light text-sm hover:underline"
              >
                Ver fuente
                <ChevronRight className="inline-block w-4 h-4 ml-1" />
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
