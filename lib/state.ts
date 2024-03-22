"use client";

import { atom } from "jotai";

export const formAtom = atom({
  user: {
    name: "",
    email: "",
    address: "",
    country: "",
    reference: "",
    pets_count: "",
    pets_types: [] as string[],
  },
  steps: {
    current: 0,
    steps_arr: [
      { name: "Datos personales", status: "current" },
      { name: "Tus mascotas", status: "upcoming" },
      { name: "Completado", status: "upcoming" },
    ],
  },
});
