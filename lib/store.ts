"use client";

import { atom, createStore } from "jotai";

export const store = createStore();

type UserObject = {
  name: string;
  email: string;
  address: string;
  pets_types: string;
  reference: string;
  pets_count: number;
};

export const userAtom = atom({
  name: "",
  email: "",
  address: "",
  country: "",
  reference: "",
  pets_count: 1,
  pets_types: "",
});

const unsub = store.sub(userAtom, () => {
  console.log("userAtom value is changed to", store.get(userAtom));
});
