import { Modak } from "next/font/google";
import Image from "next/image";
import {
  Dog,
  PawPrint,
  Rocket,
  ShieldPlus,
  Shell,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/atoms/container";

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"],
});

const features = [
  {
    name: "Dientes saludables y mejor aliento",
    description:
      "Tu mascota va a mejorar su aliento, manteniendo su dentadura limpia reduciendo las enfermedades periodontales, frecuentes en animales con dietas basadas en alimentos balanceados.",
    icon: Dog,
  },
  {
    name: "Piel y pelaje saludable",
    description:
      "Al darle a tu mascota una alimentación B.A.R.F vas a notar mejoras y cambios en su piel y pelaje gracias a los nutrientes naturales de la dieta.",
    icon: PawPrint,
  },
  {
    name: "Sistema inmunológico fuerte",
    description:
      "Al contar con enzimas vivas y nutrientes esenciales, la dieta B.A.R.F fortalece el sistema inmunológico y mejor la digestión reduciendo inflamaciones e infecciones.",
    icon: Rocket,
  },
  {
    name: "Prevenir enfermedades",
    description:
      "Hay demostraciones que al comenzar con una dieta B.A.R.F se han reducido problemas de salud degenerativos en animales adultos. No es milagroso, pero si puede darle a tu animal una nueva calidad de vida.",
    icon: ShieldPlus,
  },
  {
    name: "Menor volumen y olor de las heces",
    description:
      "La dieta B.A.R.F mejora la digestión ya que se absorben con más facilidad los nutrientes. Esto reduce el volumen y el olor de las heces. Las heces malolientes pueden indicar una digestión deficiente de los nutrientes.",
    icon: Shell,
  },
  {
    name: "Incremento de la energía y vitalidad",
    description:
      "Gracias a los nutrientes de los alimentos crudos, hará que refuerce sus articulaciones reduciendo la posibilidad de desarrollar artritis o problemas de hueso por perdida mineral.",
    icon: Sparkles,
  },
];

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-800">
            Conocé los beneficios de los productos{" "}
            <span
              className={clsx(
                modak.className,
                "tracking-tight text-4xl text-violet-500"
              )}
            >
              Hōfu
            </span>
            <span className="text-xl ml-1 text-slate-800">®</span>
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Promueven la presencia de enzimas vivas que conllevan a una
            alimentación orgánica, lo que contribuye a mejorar la calidad de
            vida de tus mascotas.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl transition-all ease-in shadow-sm border hover:border-amber-400 hover:bg-amber-300 p-8"
            >
              <div className="bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full">
                <feature.icon className="h-6 w-6 text-violet-500" />
              </div>
              <h3 className="mt-6 font-semibold text-lg text-slate-800">
                {feature.name}
              </h3>
              <p className="mt-2 text-slate-600">{feature.description}</p>
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
