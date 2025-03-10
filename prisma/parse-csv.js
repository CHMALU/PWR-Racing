const csv = require("csvtojson");
const fs = require("fs");

async function parseCsv() {
  const csvFilePath = "Arkusz roli członków - Arkusz1.csv"; // Ścieżka do pliku CSV

  try {
    // Wczytujemy plik CSV do tablicy obiektów
    const jsonArray = await csv().fromFile(csvFilePath);

    // Mapujemy dane do pożądanego formatu
    const members = jsonArray.map((row) => {
      return {
        // Wszędzie małe litery (toLowerCase()), poza bolidName
        name: row.name.toLowerCase(),
        surname: row.surname.toLowerCase(),
        department: row.department.toLowerCase(),
        role: row.role.toLowerCase(),
        bolidName: row.bolidName, // zachowujemy oryginalną wartość
      };
    });

    // Zapisujemy wynik do pliku .json
    fs.writeFileSync("members.json", JSON.stringify(members, null, 2), "utf8");
    console.log("Plik members.json został utworzony!");
  } catch (error) {
    console.error("Błąd podczas przetwarzania pliku CSV:", error);
  }
}

parseCsv();
