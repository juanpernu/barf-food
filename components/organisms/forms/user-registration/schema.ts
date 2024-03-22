import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({
      required_error: "Por favor, escribe un nombre válido.",
    })
    .min(2, {
      message: "El nombre debe contener al menos 2 caracteres.",
    })
    .max(50),
  address: z
    .string({
      required_error: "Por favor, escribe una dirección válida.",
    })
    .min(2, {
      message: "La dirección debe contener al menos 2 caracteres.",
    })
    .max(50),
  email: z
    .string({
      required_error: "Por favor, escribe un e-mail válido.",
    })
    .min(2, {
      message: "El e-mail debe contener al menos 2 caracteres.",
    })
    .max(50),
  country: z
    .string({
      required_error: "Por favor, selecciona un país.",
    })
    .min(2, {
      message: "Por favor, selecciona un país.",
    }),
  reference: z.string({
    required_error: "Por favor, elije una referencia válida.",
  }),
  pets_count: z.string({
    required_error: "Por favor, elije una cantidad válida.",
  }),
  pets_types: z.array(z.string()),
});
