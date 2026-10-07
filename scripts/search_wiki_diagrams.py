import urllib.request
import json

queries = [
    ("embryo-sac", "embryo sac angiosperm"),
    ("megasporangium", "anatropous ovule"),
    ("blastocyst", "blastocyst structure human"),
    ("placenta-fetus", "human fetus placenta"),
    ("monocot-embryo", "monocot embryo maize l.s"),
    ("menstrual-cycle", "menstrual cycle hormones"),
    ("antibody-molecule", "antibody molecule structure H2L2"),
    ("lac-operon", "lac operon mechanism"),
    ("miller-urey", "miller urey experiment"),
    ("hardy-weinberg", "natural selection stabilizing directional disruptive"),
    ("hiv-lifecycle", "hiv replication cycle retrovirus"),
    ("transcription-unit", "transcription unit promoter terminator"),
    ("replicating-fork", "dna replication fork okazaki"),
    ("homologous-analogous", "homology divergent evolution forelimbs"),
    ("pollen-grain", "pollen grain microspore structure")
]

headers = {'User-Agent': 'OneStudyApp/1.0 (educational-use)'}

for key, q in queries:
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&srnamespace=6&format=json"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('query', {}).get('search', [])
            print(f"=== {key} ({q}) ===")
            for r in results[:3]:
                print(" ", r['title'])
    except Exception as e:
        print(f"Error {key}:", e)
