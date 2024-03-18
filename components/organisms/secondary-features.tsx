import Image from "next/image";
import { Dog, PawPrint, Rocket, ShieldPlus, Shell, Salad } from "lucide-react";
import { Container } from "@/components/atoms/container";

const features = [
  {
    name: "Dientes saludables y mejor aliento",
    description:
      "Tu familiar animal va a mejorar su aliento, mantener su dentadura limpia, y va a reducir las enfermedades periodontales comúnes en animales con dietas basadas en granos.",
    icon: Dog,
  },
  {
    name: "Piel y pelaje saludable",
    description:
      "Al darle tu familiar animal una alimentación B.A.R.F vas a notar que contrae menos enfermedades, mejora su piel y pelaje, gracias los nutrientes naturales de la dieta",
    icon: PawPrint,
  },
  {
    name: "Sistema inmunológico fuerte",
    description:
      "La dieta B.A.R.F fortalece el sistema inmunológico y mejor la digestión mediante la incorporación de nutrientes esenciales y enzimas vivas. Así se reducen infecciones e inflamaciones",
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
      "La dieta B.A.R.F mejora la digestión, lo que reduce el volumen y el olor de las heces. Es mas fácilmente absorbida que la dieta a base granos. Las heces malolientes pueden indicar una digestión deficiente de los nutrientes",
    icon: Shell,
  },
  {
    name: "Masa corporal magra y saludable",
    description:
      "Watch your investments grow exponentially, leaving other investors in the dust.",
    icon: Salad,
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
            Conocé los beneficios de la dieta{" "}
            <span className="text-violet-500">
              Hōfu<span className="text-sm ml-1 text-slate-800">®</span>
            </span>
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            La dieta cruda promueve la presencia de enzimas vivas y una
            alimentación orgánica, lo que contribuye a mejorar la calidad de
            vida de los animales.
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
              <p className="mt-2 text-amber-900">{feature.description}</p>
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
