"use server";

import { readFile } from "fs/promises";
import path from "path";

export async function getDictionary2(lang: string, section: string) {
  // Konstrukcja dynamicznej ścieżki na podstawie języka
  const filePath = path.join(
    process.cwd(),
    "app/[lang]/dictionaries",
    `${lang}.json`
  );

  let dict;

  try {
    // Sprawdzamy i odczytujemy plik dla wybranego języka
    const fileContents = await readFile(filePath, "utf8");
    dict = JSON.parse(fileContents);
  } catch (err) {
    console.error(
      `Nie znaleziono pliku dla języka: ${lang}. Próbuję użyć domyślnego.`
    );
    try {
      // Jeśli plik dla danego języka nie istnieje, użyj domyślnego (np. 'en.json')
      const defaultPath = path.join(
        process.cwd(),
        "app",
        "en",
        "dictionaries",
        "en.json"
      );
      const fileContents = await readFile(defaultPath, "utf8");
      dict = JSON.parse(fileContents);
    } catch (defaultErr) {
      console.error("Błąd: nie znaleziono również domyślnego pliku.");
      throw defaultErr;
    }
  }

  // Zwracamy konkretną sekcję ze słownika
  if (!dict || !dict[section]) {
    throw new Error(`Sekcja '${section}' nie została znaleziona w słowniku.`);
  }

  return dict[section];
}

// const test = await getDictionary2(currentLocale, "bolidSection");
// console.log("test", test);
