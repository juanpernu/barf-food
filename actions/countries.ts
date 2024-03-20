"use server";

export async function getCountries() {
  const res = await fetch(
    "https://restcountries.com/v3.1/subregion/South%20America"
  );

  if (!res.ok) {
    throw new Error("Tuvimos un problema al obtener los países");
  }

  return res.json();
}
