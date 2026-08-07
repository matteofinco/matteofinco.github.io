Esegui un refactoring visivo e strutturale del componente `Archivia.tsx` per passare da un layout editoriale con sovrapposizioni a un layout minimalista product-first (stile Apple) con un'hero pulita e focalizzata sul prodotto.

Ecco la checklist precisa delle modifiche da apportare:

1. REDESIGN COMPLETO DELL'HERO SECTION:
   - Rimuovi l'immagine di sfondo con overlay scuro (`.project-hero::before`), il gradiente e il testo centrato/sovrapposto all'immagine.
   - Posiziona il testo IN ALTO prima dell'immagine, allineato a sinistra o con layout minimal pulito:
     * Titolo: ARCHIVIA (H1)
     * Subtitle / Tagline: Flash drive shaped pen holder
     * Badge/Info contestuale: Plastic European Innovation Award | 2025
   - Rimuovi completamente i nomi del team/crediti dall'Hero.
   - Sotto il testo, inserisci l'immagine principale usando un tag `<img>` nativo inserito in un contenitore dedicato `.project-hero-image`:
     * Il contenitore deve avere `max-width: 1400px`, `height: 65vh` (o circa `55vh`-`65vh`) e `margin: 0 auto`.
     * L'immagine deve usare `width: 100%`, `height: 100%` e supportare `object-fit: contain` (o parametrizzato tramite `style={{ objectFit: heroFit || 'contain' }}`) in modo da non tagliare mai i render di prodotto.
   - Rimuovi filtri di oscuramento o sfondi scuri pesanti dall'hero.

2. RISTRUTTURAZIONE SEZIONE OVERVIEW E METADATI:
   - All'inizio della sezione Overview, aggiungi una griglia di metadati compatta per contestualizzare il progetto:
     * Role: Product Designer
     * Team: Matteo Finco, Giulia Pettenò, Nadia Zanella
     * Year: 2025
     * Context: PLEIADES (Plastic European Innovation Award)
   - Subito dopo i metadati, mantieni i testi descrittivi di Overview e Challenge.

3. STANDARDIZZAZIONE DELLA STRUTTURA DELLA PAGINA:
   Riorganizza il componente mantenendo questo ordine sequenziale e pulito:
   1. Hero (Testo minimal in alto -> Grande render standalone in basso senza testo sopra)
   2. Overview & Metadata (Griglia Role/Team/Year + Challenge)
   3. Process & Solution (Righe alternate immagine + testo per Solution e Research)
   4. Outcome / Design (Griglia immagini a 3 colonne)
   5. Key Insights (I 3 box/card riassuntivi già presenti)
   6. CTA (Bottone "BACK TO PORTFOLIO")

4. CSS E STILI:
   - Aggiorna i selettori CSS interni per eliminare le regole legate al vecchio overlay (`.project-hero::before`, `background-size: cover`, ecc.).
   - Assicurati che il layout sia completamente responsive, riducendo l'altezza dell'hero su mobile e mantenendo i metadati chiari e leggibili.

Aggiorna il file `Archivia.tsx` applicando queste modifiche e riordinando il codice JSX.