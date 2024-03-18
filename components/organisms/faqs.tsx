import Link from "next/link";

import { Container } from "@/components/atoms/container";

const faqs = [
  [
    {
      question: "¿Qué significa las siglas B.A.R.F.?",
      answer:
        "Las siglas B.A.R.F corresponden a Biologically Appropriate Raw Food, es decir, Alimentación Cruda Biológicamente Apropiada.",
    },
  ],
  [
    {
      question: "¿En qué consiste la dieta B.A.R.F.?",
      answer:
        "Es una dieta compuesta principalmente por alimentos crudos, sin ningún proceso de alteración y sin químicos de conservación.",
    },
  ],
  [
    {
      question: "¿Qué variedad de alimentos crudos incluyen la dieta B.A.R.F.?",
      answer:
        "⁠Carne cruda (pollo, cerdo, vaca), ⁠vísceras (corazón, hígado), huesos crudos, pescado crudo, frutas y verduras crudas, huevos crudos, aceites saludables",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-slate-800"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Si tienes otras preguntas para hacernos,{" "}
            <Link
              href="mailto:info@example.com"
              className="text-violet-800 underline"
            >
              envíanos un email
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
