"use server";

type Dictionaries = {
  [key: string]: () => Promise<Record<string, any>>;
};

const dictionaries: Dictionaries = {
  pl: () => import("./dictionaries/pl.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

type Section = string;

export async function getDictionary(lang: string, section?: Section) {
  if (!dictionaries[lang]) {
    throw new Error(`Nieobsługiwany język: ${lang}`);
  }

  try {
    const dict = await dictionaries[lang]();

    if (!section) {
      return dict;
    }

    if (!dict[section]) {
      throw new Error(`Sekcja '${section}' nie znaleziona w ${lang}.json`);
    }

    return dict[section];
  } catch (error) {
    console.error(`Błąd podczas ładowania słownika dla języka ${lang}:`, error);
    throw error;
  }
}
