require("dotenv").config(); // Dla pewności, żeby wczytać zmienne z .env jeśli potrzebne
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const path = require("path");

// Wczytujemy plik 2members.json z tego samego folderu:
const filePath = path.join(__dirname, "members.json");
const rawData = fs.readFileSync(filePath, "utf8");
const members = JSON.parse(rawData);

async function main() {
  // Iterujemy po całej tablicy członków
  for (const memberData of members) {
    const { name, surname, department, role, bolidName } = memberData;

    // Sprawdzamy, czy ktoś o podanym imieniu i nazwisku już istnieje
    const existingMember = await prisma.teamMember.findFirst({
      where: {
        AND: [{ name: name.toLowerCase() }, { surname: surname.toLowerCase() }],
      },
    });

    if (existingMember) {
      // Jeśli istnieje, dokładamy nową rolę do tablicy `roles`
      await prisma.teamMember.update({
        where: { id: existingMember.id },
        data: {
          roles: {
            push: {
              department: department.toLowerCase(),
              role: role.toLowerCase(),
              bolidName,
            },
          },
        },
      });
      console.log(`Zaktualizowano role dla: ${name} ${surname}`);
    } else {
      // Jeśli nie istnieje, tworzymy nowego członka z odpowiednią rolą
      await prisma.teamMember.create({
        data: {
          name: name.toLowerCase(),
          surname: surname.toLowerCase(),
          roles: [
            {
              department: department.toLowerCase(),
              role: role.toLowerCase(),
              bolidName,
            },
          ],
        },
      });
      console.log(`Dodano nowego członka: ${name} ${surname}`);
    }
  }
}

main()
  .catch((error) => {
    console.error("Błąd w trakcie seeda:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
