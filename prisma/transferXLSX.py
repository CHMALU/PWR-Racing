import pandas as pd
import json

def process_excel(file_path, output_path):
    # Wczytaj plik XLSX
    df = pd.read_excel(file_path)

    # Opcjonalnie: sprawdź, jakie są dostępne kolumny
    print("Kolumny w Excel:", df.columns.tolist())

    # Przyjmujemy, że kolumny mają nazwy: name, surname, department, role, bolidName.
    # Jeżeli nazwy są inne (np. z wielkiej litery lub w języku polskim), można je przemapować:
    mapping = {
        'Imię': 'name',
        'Nazwisko': 'surname',
        'Dział': 'department',
        'Rola': 'role',
        # Jeśli nazwa kolumny dla bolidName jest inna, dodaj odpowiednią mapping
    }

    # Jeśli mapping nie jest pusty, wykonujemy rename
    if any(col in df.columns for col in mapping.keys()):
        df = df.rename(columns=mapping)

    # Upewnij się, że usunięto ewentualne białe znaki z nazw kolumn
    df.columns = [col.strip() for col in df.columns]

    # Konwersja wybranych kolumn na małe litery
    for col in ['name', 'surname', 'department', 'role']:
        if col in df.columns:
            df[col] = df[col].astype(str).str.lower()

    # Konwersja DataFrame do listy słowników
    members = df.to_dict(orient='records')

    # Zapis do pliku JSON
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(members, f, ensure_ascii=False, indent=2)

    print(f"Plik {output_path} został utworzony.")

if __name__ == "__main__":
    excel_file = "Arkusz roli członków.xlsx"      # zmień na nazwę Twojego pliku XLSX
    output_json = "2members.json"
    process_excel(excel_file, output_json)
