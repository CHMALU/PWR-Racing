// Ustaw wartości do wyszukiwania i zamiany
const searchWord = "cfd";
const replacementWord = searchWord.toUpperCase();

// Iteruj po dokumentach zawierających roles.role z poszukiwanym słowem
db.TeamMember.find({
  "roles.role": { $regex: searchWord, $options: "i" },
}).forEach((doc) => {
  // Aktualizuj pole roles w każdym dokumencie
  const updatedRoles = doc.roles.map((role) => {
    if (role.role.toLowerCase().includes(searchWord)) {
      role.role = role.role.replace(
        new RegExp(searchWord, "gi"),
        replacementWord
      );
    }
    return role;
  });

  // Zapisz zmiany w bazie
  db.TeamMember.updateOne({ _id: doc._id }, { $set: { roles: updatedRoles } });

  print(`Updated document with _id: ${doc._id}`);
});

print("Update complete!");
