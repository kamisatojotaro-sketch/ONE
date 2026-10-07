import urllib.request
import urllib.parse
import json
import os

headers = {'User-Agent': 'OneStudyApp/1.0 (educational-ncert-diagrams)'}
os.makedirs("public/images/ncert", exist_ok=True)

targets = [
    {
        "id": "embryo-sac",
        "search": "Embryosac-en.svg",
        "alt_search": "angiosperm embryo sac 7 celled 8 nucleate"
    },
    {
        "id": "megasporangium",
        "search": "Ovule morphology anatropous.svg",
        "alt_search": "anatropous ovule diagram labeled"
    },
    {
        "id": "pollen-grain",
        "search": "Pollen grain structure",
        "alt_search": "microspore generative vegetative exine intine"
    },
    {
        "id": "monocot-embryo",
        "search": "monocot embryo maize",
        "alt_search": "scutellum coleoptile coleorhiza embryo"
    },
    {
        "id": "blastocyst",
        "search": "Diagram of Blastocyst stage.png",
        "alt_search": "human blastocyst inner cell mass trophoblast"
    },
    {
        "id": "placenta-fetus",
        "search": "Placenta - an organ which links the fetus to the mother.jpg",
        "alt_search": "fetus in uterus placenta umbilical cord"
    },
    {
        "id": "menstrual-cycle",
        "search": "Hormones estradiol, progesterone, LH and FSH during menstrual cycle.svg",
        "alt_search": "menstrual cycle hormones diagram"
    },
    {
        "id": "antibody-molecule",
        "search": "Antibody.svg",
        "alt_search": "antibody structure heavy light chain"
    },
    {
        "id": "lac-operon",
        "search": "Lac operon 2.png",
        "alt_search": "lac operon repressor operator"
    },
    {
        "id": "miller-urey",
        "search": "Miller-Urey experiment-en.svg",
        "alt_search": "miller urey experiment apparatus"
    },
    {
        "id": "hardy-weinberg-selection",
        "search": "Directional, Disruptive and Stabilizing Selections.svg",
        "alt_search": "stabilizing directional disruptive selection"
    },
    {
        "id": "hiv-lifecycle",
        "search": "HIV replication cycle",
        "alt_search": "retrovirus replication reverse transcriptase helper t cell"
    },
    {
        "id": "transcription-unit",
        "search": "Transcription unit",
        "alt_search": "promoter structural gene terminator transcription"
    },
    {
        "id": "replicating-fork",
        "search": "DNA replication split.svg",
        "alt_search": "replication fork leading lagging okazaki"
    },
    {
        "id": "homologous-analogous",
        "search": "Homology vertebrates-en.svg",
        "alt_search": "homologous organs forelimbs whale bat cheetah human"
    }
]

def get_wiki_image_url(filename):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles=File:{urllib.parse.quote(filename)}&prop=imageinfo&iiprop=url&format=json"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        for p in pages.values():
            imageinfo = p.get('imageinfo', [])
            if imageinfo:
                return imageinfo[0].get('url')
    return None

def search_wiki(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        results = data.get('query', {}).get('search', [])
        if results:
            title = results[0]['title']
            if title.startswith('File:'):
                title = title[5:]
            return get_wiki_image_url(title)
    return None

for t in targets:
    t_id = t["id"]
    out_file = f"public/images/ncert/{t_id}.png"
    if os.path.exists(out_file):
        print(f"Already exists: {t_id}")
        continue
    
    img_url = get_wiki_image_url(t["search"])
    if not img_url:
        img_url = search_wiki(t["search"])
    if not img_url:
        img_url = search_wiki(t["alt_search"])
        
    if img_url:
        print(f"Found URL for {t_id}: {img_url[:60]}...")
        try:
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req) as resp:
                content = resp.read()
                # Determine extension if svg
                ext = ".svg" if img_url.lower().endswith(".svg") else ".png"
                actual_out = f"public/images/ncert/{t_id}{ext}"
                with open(actual_out, "wb") as f:
                    f.write(content)
                print(f"  Successfully saved {actual_out} ({len(content)} bytes)")
        except Exception as e:
            print(f"  Download error for {t_id}:", e)
    else:
        print(f"Could not find URL for {t_id}")
