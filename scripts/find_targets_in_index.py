import json

with open("scripts/figures_index.json", "r", encoding="utf-8") as f:
    data = json.load(f)

search_figs = [
    "2.3",  # microsporangium
    "2.4",  # pollen
    "2.7",  # megasporangium (ovule)
    "2.8",  # embryo sac
    "2.13", # dicot embryo
    "2.14", # monocot embryo
    "3.8",  # spermatogenesis/oogenesis
    "3.9",  # menstrual cycle
    "3.11", # blastocyst
    "3.12", # fetus in uterus
    "5.3",  # monohybrid
    "5.8",  # sex determination
    "6.4",  # replication fork
    "6.8",  # replication fork
    "6.9",  # transcription unit
    "6.10", # transcription in eukaryotes
    "6.14", # lac operon
    "7.1",  # miller-urey
    "7.3",  # homologous organs
    "7.8",  # natural selection
    "8.4",  # antibody
    "8.6"   # hiv lifecycle
]

for sf in search_figs:
    matches = []
    for item in data:
        for fig in item["figures"]:
            if sf in fig:
                matches.append((item["pdf_page"], fig, item["snippets"]))
    if matches:
        for m in matches:
            print(f"Target {sf:<5} -> Page {m[0]}: {m[1]} | Snippet: {m[2][:1]}")
    else:
        print(f"Target {sf:<5} -> NOT FOUND directly")
