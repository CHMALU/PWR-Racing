const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Funkcja pomocnicza do aktualizacji ról
  async function updateRole(name, surname, roleData) {
    const member = await prisma.teamMember.findFirst({
      where: {
        AND: [{ name }, { surname }],
      },
    });

    if (member) {
      await prisma.teamMember.update({
        where: { id: member.id }, // Użycie unikalnego `id`
        data: {
          roles: {
            push: roleData, // Dodanie nowej roli do tablicy `roles`
          },
        },
      });
      console.log(`Zaktualizowano role dla: ${name} ${surname}`);
    } else {
      console.log(`Nie znaleziono członka: ${name} ${surname}`);
    }
  }

  // Dodanie ról dla członków
  await updateRole("paweł", "wójcik", {
    department: "management",
    role: "team leader",
    bolidName: "RT15e",
  });

  await updateRole("bartosz", "sobczak", {
    department: "management",
    role: "technical leader",
    bolidName: "RT15e",
  });

  await updateRole("zuzanna", "kochanowska", {
    department: "marketing",
    role: "marketing leader",
    bolidName: "RT15e",
  });

  await updateRole("joanna", "popielewska", {
    department: "business",
    role: "business leader",
    bolidName: "RT15e",
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
