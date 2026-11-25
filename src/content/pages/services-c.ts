import type { PageDoc } from "../types";

const updated = "2026-11-25";

export const servicePagesC: PageDoc[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "import",
    kind: "service",
    price: "import",
    related: ["register", "shortterm", "costs"],
    updated,
    de: {
      slug: "importfahrzeug-zulassen-wiesbaden",
      nav: "Importfahrzeug zulassen",
      teaser: "Auto aus dem EU-Ausland oder einem Drittland auf deutsche Papiere bringen.",
      metaTitle: "Importfahrzeug in Wiesbaden zulassen: CoC, § 21-Gutachten, Unterlagen",
      metaDescription:
        "Auto aus dem Ausland in Wiesbaden zulassen: wann das CoC-Papier reicht, wann ein Gutachten nach § 21 StVZO nötig ist, welche Unterlagen die Behörde verlangt.",
      eyebrow: "Importfahrzeug",
      h1: "Importfahrzeug in Wiesbaden zulassen",
      lead: "Bei einem Auto aus dem Ausland entscheidet ein einziges Papier über den Aufwand: Hat es eine EG-Typgenehmigung, genügt das CoC. Fehlt sie, braucht es ein Vollgutachten.",
      whatsapp: "Hallo, ich möchte ein Auto aus dem Ausland zulassen. Herkunftsland: ... Hier sind Fotos der Papiere:",
      blocks: [
        {
          type: "table",
          h2: "Zwei Wege, je nach Fahrzeug",
          head: ["Fahrzeug", "Technischer Nachweis", "Aufwand"],
          rows: [
            ["Mit EG-Typgenehmigung (die meisten EU-Fahrzeuge)", "CoC-Papier im Original. Fehlt es beim Gebrauchtwagen, eine Datenbestätigung von TÜV oder Sachverständigem", "Gering"],
            ["Ohne EG-Typgenehmigung (z. B. US-, Japan- oder Dubai-Import)", "Gutachten nach § 21 StVZO, die sogenannte Vollabnahme", "Hoch, vorher zum TÜV"],
          ],
        },
        {
          type: "checklist",
          h2: "Unterlagen laut Zulassungsbehörde Wiesbaden",
          groups: [
            {
              items: [
                "**CoC** oder Datenbestätigung, beziehungsweise das **§ 21-Gutachten**",
                "**Eigentumsnachweis**: Kaufvertrag oder Rechnung",
                "Die **ausländischen Zulassungspapiere** im Original, oder beim Neuwagen eine Erklärung des Verkäufers, dass noch keine Zulassungsbescheinigung ausgestellt wurde",
                "Nachweis einer gültigen **Hauptuntersuchung**. Bei Gebrauchten aus dem Ausland wird in der Regel eine deutsche HU verlangt",
                "**eVB-Nummer**, Ausweis, IBAN für die Kfz-Steuer und Vollmacht",
              ],
            },
          ],
          note: "Die amtliche Gebühr liegt laut Stadt Wiesbaden bei 26,30 bis 60 Euro. Die ausländischen Papiere behält die Behörde ein und meldet die Zulassung an das Herkunftsland.",
        },
        {
          type: "prose",
          h2: "Zoll und Steuer klären, bevor Sie zur Zulassung gehen",
          paras: [
            "Bei einem Fahrzeug aus einem **Nicht-EU-Land** verlangt die Zulassungsbehörde den Nachweis, dass es verzollt ist. Das ist die Zollunbedenklichkeitsbescheinigung. Ohne sie wird nicht zugelassen.",
            "Bei einem **Neufahrzeug aus der EU** wird die deutsche Umsatzsteuer fällig. Als neu gilt ein Auto steuerlich, wenn es höchstens sechs Monate alt ist oder nicht mehr als 6.000 Kilometer gelaufen ist. Die Zulassungsbehörde meldet solche Zulassungen dem Finanzamt.",
            "Für die Fahrt vom Händler nach Hause brauchen Sie ein Ausfuhrkennzeichen des Herkunftslandes oder ein deutsches [Kurzzeitkennzeichen](page:shortterm).",
          ],
        },
        { type: "price", h2: "Unser Festpreis", keys: ["import"], note: "Gutachten, HU und Zollformalitäten sind nicht enthalten. Wir sagen Ihnen vorab, welche davon in Ihrem Fall nötig sind." },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Ich habe kein CoC. Woher bekomme ich es?", a: "Vom Hersteller oder dessen deutscher Niederlassung, gegen Gebühr und mit einigen Tagen Lieferzeit. Für ältere Fahrzeuge stellt eine Prüforganisation stattdessen eine Datenbestätigung aus." },
            { q: "Kann ich die ausländischen Kennzeichen behalten?", a: "Nein. Die Zulassung im Herkunftsland endet mit der deutschen Zulassung. Die Schilder geben Sie ab oder schicken sie zurück, je nach Vorschrift des Landes." },
            { q: "Wie lange dauert es?", a: "Mit CoC und gültiger HU so lange wie eine normale Zulassung. Braucht das Auto erst ein § 21-Gutachten, hängt es vom Termin bei der Prüfstelle ab." },
          ],
        },
      ],
    },
    en: {
      slug: "register-imported-car-wiesbaden",
      nav: "Register an import",
      teaser: "Getting a car from another EU country or from overseas onto German papers.",
      metaTitle: "Register an imported car in Wiesbaden: CoC, § 21 inspection, documents",
      metaDescription:
        "Bringing a car to Germany? How to register an imported vehicle in Wiesbaden: when the CoC is enough, when a § 21 inspection is needed, customs and tax, and the documents.",
      eyebrow: "Imported vehicle",
      h1: "Register an imported car in Wiesbaden",
      lead: "For a car from abroad, one document decides how much work it is: with EC type approval the CoC is enough. Without it you need a full technical inspection.",
      whatsapp: "Hello, I would like to register a car from abroad. Country of origin: ... Here are photos of the papers:",
      blocks: [
        {
          type: "table",
          h2: "Two routes, depending on the vehicle",
          head: ["Vehicle", "Technical proof", "Effort"],
          rows: [
            ["With EC type approval (most EU cars)", "Original CoC. If a used car has none, a data confirmation from TÜV or another approved expert", "Low"],
            ["Without EC type approval (e.g. US, Japan or Gulf imports)", "Inspection report under § 21 StVZO, the so-called full approval", "High, visit the test centre first"],
          ],
        },
        {
          type: "checklist",
          h2: "Documents required by the Wiesbaden office",
          groups: [
            {
              items: [
                "**CoC** or data confirmation, or the **§ 21 report**",
                "**Proof of ownership**: purchase contract or invoice",
                "The **foreign registration papers** in original, or for a new car a statement from the seller that no registration certificate has been issued yet",
                "Proof of a valid **roadworthiness test**. For used cars from abroad a German test is normally required",
                "**eVB number**, ID, IBAN for vehicle tax and a power of attorney",
              ],
            },
          ],
          note: "The official fee is 26.30 to 60 euros according to the City of Wiesbaden. The office keeps the foreign papers and reports the registration to the country of origin.",
        },
        {
          type: "prose",
          h2: "Sort out customs and tax before you register",
          paras: [
            "For a vehicle from a **non-EU country** the registration office wants proof that customs has been cleared, the customs clearance certificate. Without it the car is not registered.",
            "For a **new vehicle from the EU**, German VAT is due. For tax purposes a car counts as new if it is no more than six months old or has done no more than 6,000 kilometres. The registration office reports such registrations to the tax office.",
            "If you moved to Germany and brought your own car, it may qualify as household goods and be exempt from import duties. Customs decides that, not the registration office, so clarify it with them first.",
          ],
        },
        { type: "price", h2: "Our fixed price", keys: ["import"], note: "Inspection reports, the roadworthiness test and customs formalities are not included. We tell you beforehand which of them your case needs." },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "I have no CoC. Where do I get one?", a: "From the manufacturer or its German branch, for a fee and with a few days' delivery. For older vehicles a test organisation issues a data confirmation instead." },
            { q: "Can I keep my foreign plates?", a: "No. The registration in the country of origin ends with the German one. You hand the plates in or send them back, depending on that country's rules." },
            { q: "How long does it take?", a: "With a CoC and a valid roadworthiness test, as long as a normal registration. If the car needs a § 21 inspection first, it depends on the appointment at the test centre." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "lost",
    kind: "service",
    price: "replacement",
    related: ["deregister", "customplate", "documents"],
    updated,
    de: {
      slug: "fahrzeugpapiere-verloren",
      nav: "Papiere oder Kennzeichen verloren",
      teaser: "Fahrzeugschein, Fahrzeugbrief oder Kennzeichen weg: was jetzt zu tun ist.",
      metaTitle: "Fahrzeugschein, Fahrzeugbrief oder Kennzeichen verloren in Wiesbaden: was tun?",
      metaDescription:
        "Fahrzeugpapiere oder Kennzeichen verloren oder gestohlen? So bekommen Sie in Wiesbaden Ersatz: Unterlagen, eidesstattliche Versicherung, Gebühren und was wir übernehmen.",
      eyebrow: "Verlust und Diebstahl",
      h1: "Fahrzeugpapiere oder Kennzeichen verloren",
      lead: "Ersatz gibt es immer, aber der Weg hängt davon ab, was fehlt. Beim Fahrzeugbrief müssen Sie einen Teil selbst erledigen. Das sagen wir Ihnen lieber gleich.",
      whatsapp: "Hallo, mir fehlt Folgendes: Fahrzeugschein / Fahrzeugbrief / Kennzeichen. Verloren oder gestohlen am: ...",
      blocks: [
        {
          type: "table",
          h2: "Was fehlt, und was das bedeutet",
          head: ["Verlust", "Was die Behörde verlangt", "Amtliche Gebühr"],
          rows: [
            ["Kennzeichen (eins oder beide)", "Neues Kennzeichen wird zugeteilt, das alte gesperrt. Bei Diebstahl Anzeige der Polizei", "mindestens 27,60 € plus neue Schilder"],
            ["Zulassungsbescheinigung Teil I (Fahrzeugschein)", "Ersatzdokument, Erklärung über den Verlust", "nach Gebührenordnung, je nach Aufwand"],
            ["Zulassungsbescheinigung Teil II (Fahrzeugbrief)", "Ersatzdokument, in der Regel mit eidesstattlicher Versicherung. Auch ein neuer Teil I wird ausgestellt", "mindestens 20,20 €"],
          ],
          note: "Quelle: wiesbaden.de, Stand 25. November 2026.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Beim Fahrzeugbrief müssen Sie persönlich erscheinen",
          text: "Für den Ersatz der Zulassungsbescheinigung Teil II verlangt die Stadt Wiesbaden in der Regel eine Versicherung an Eides statt. Die können Sie nicht per Vollmacht abgeben. Wir bereiten alle Unterlagen vor und begleiten den Vorgang, aber diesen einen Termin nehmen Sie selbst wahr.",
        },
        {
          type: "checklist",
          h2: "Unterlagen für den Ersatz",
          groups: [
            {
              title: "Kennzeichen verloren oder gestohlen",
              items: [
                "Ausweis",
                "Zulassungsbescheinigung Teil I mit gültiger HU und Teil II",
                "Das verbliebene Kennzeichen, falls noch eines da ist",
                "Bei Diebstahl: die Anzeige der Polizei",
              ],
            },
            {
              title: "Fahrzeugbrief verloren",
              items: [
                "Ausweis",
                "Zulassungsbescheinigung Teil I mit gültiger HU",
                "Eigentumsnachweis, wenn Sie das Auto gekauft haben: Kaufvertrag, aus dem hervorgeht, dass der Brief übergeben wurde",
                "Bei Firmenfahrzeugen: Handelsregisterauszug oder Gewerbeanmeldung",
                "Im Erbfall: Erbschein oder Testament und gegebenenfalls die Einverständniserklärung der Miterben",
              ],
            },
          ],
        },
        {
          type: "prose",
          h2: "Was Sie sofort tun sollten",
          paras: [
            "**Gestohlene Kennzeichen** melden Sie am selben Tag bei der Polizei. Bis ein neues Kennzeichen zugeteilt ist, darf das Auto nicht auf öffentlichen Straßen fahren oder stehen. Mit dem alten Kennzeichen können sonst Tankbetrug oder Verkehrsverstöße auf Ihren Namen laufen.",
            "Ist der **Fahrzeugbrief** weg, prüfen Sie zuerst, ob er bei der Bank liegt. Bei finanzierten oder geleasten Fahrzeugen behält der Kreditgeber den Brief bis zur letzten Rate. Die Stadt Wiesbaden bietet dafür eine Online-Abfrage zum Eingang finanzierter Fahrzeugbriefe.",
            "Den **Fahrzeugschein** müssen Sie bei jeder Fahrt dabeihaben. Fehlt er bei einer Kontrolle, kostet das ein Verwarnungsgeld. Bis der Ersatz da ist, hilft eine Kopie, auch wenn sie das Original rechtlich nicht ersetzt.",
          ],
        },
        { type: "price", h2: "Unser Preis", keys: ["replacement", "platePair"] },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Bekomme ich dasselbe Kennzeichen wieder?", a: "Nach einem Diebstahl nein. Das alte Kennzeichen wird gesperrt, damit es niemand missbrauchen kann. Sie erhalten eine neue Kombination, auf Wunsch ein [Wunschkennzeichen](page:customplate)." },
            { q: "Wie lange dauert der Ersatz des Fahrzeugbriefs?", a: "Länger als andere Vorgänge. Der Verlust wird beim Kraftfahrt-Bundesamt veröffentlicht, erst danach stellt die Behörde das Ersatzdokument aus. Rechnen Sie mit einigen Wochen." },
            { q: "Kann ich das Auto ohne Brief verkaufen?", a: "Praktisch nein. Ohne Teil II kann der Käufer nicht ummelden, und seriöse Käufer zahlen nicht ohne dieses Dokument." },
          ],
        },
      ],
    },
    en: {
      slug: "lost-vehicle-documents",
      nav: "Lost papers or plates",
      teaser: "Registration certificate, title document or plates gone: what to do now.",
      metaTitle: "Lost car registration papers or plates in Wiesbaden: how to replace them",
      metaDescription:
        "Lost or stolen vehicle documents or licence plates in Wiesbaden? How to get replacements: documents, the sworn declaration, official fees and what we can do for you.",
      eyebrow: "Loss and theft",
      h1: "Lost vehicle papers or licence plates",
      lead: "You can always get a replacement, but the route depends on what is missing. For the part II certificate you have to do one step yourself, and we would rather tell you that now.",
      whatsapp: "Hello, I am missing the following: registration certificate part I / part II / plates. Lost or stolen on: ...",
      blocks: [
        {
          type: "table",
          h2: "What is missing, and what it means",
          head: ["Loss", "What the office requires", "Official fee"],
          rows: [
            ["Plates (one or both)", "A new number is assigned and the old one blocked. Police report if stolen", "at least €27.60 plus new plates"],
            ["Registration certificate part I", "Replacement document, declaration about the loss", "by fee schedule, depending on effort"],
            ["Registration certificate part II", "Replacement document, usually with a sworn declaration. A new part I is issued as well", "at least €20.20"],
          ],
          note: "Source: wiesbaden.de, as of 25 November 2026.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "For the part II certificate you must appear in person",
          text: "To replace registration certificate part II, the City of Wiesbaden normally requires a sworn declaration (Versicherung an Eides statt). That cannot be given through a power of attorney. We prepare all documents and manage the case, but you attend this one appointment yourself.",
        },
        {
          type: "checklist",
          h2: "Documents for a replacement",
          groups: [
            {
              title: "Plates lost or stolen",
              items: [
                "ID",
                "Registration certificate part I with a valid roadworthiness test, and part II",
                "The remaining plate, if you still have one",
                "If stolen: the police report",
              ],
            },
            {
              title: "Part II certificate lost",
              items: [
                "ID",
                "Registration certificate part I with a valid roadworthiness test",
                "Proof of ownership if you bought the car: a purchase contract showing the certificate was handed over",
                "For company vehicles: commercial register extract or business registration",
                "After an inheritance: certificate of inheritance or will and, where applicable, the co-heirs' consent",
              ],
            },
          ],
        },
        {
          type: "prose",
          h2: "What to do straight away",
          paras: [
            "Report **stolen plates** to the police the same day. Until a new number is assigned, the car may not be driven or parked on public roads. Otherwise fuel theft or traffic offences committed with the old plates can land in your name.",
            "If the **part II certificate** is gone, first check whether the bank has it. For financed or leased vehicles the lender keeps it until the last instalment. The City of Wiesbaden offers an online query for financed vehicle documents.",
            "You must carry the **part I certificate** on every trip. Without it you risk a fine at a check. Until the replacement arrives a copy helps, although it does not legally replace the original.",
          ],
        },
        { type: "price", h2: "Our price", keys: ["replacement", "platePair"] },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "Will I get the same number again?", a: "Not after a theft. The old number is blocked so nobody can misuse it. You get a new combination, or a [custom plate](page:customplate) if you like." },
            { q: "How long does replacing the part II certificate take?", a: "Longer than other cases. The loss is published by the Federal Motor Transport Authority, and only then does the office issue the replacement. Expect several weeks." },
            { q: "Can I sell the car without the part II certificate?", a: "In practice no. Without it the buyer cannot transfer the car, and serious buyers do not pay without that document." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "business",
    kind: "service",
    related: ["express", "shortterm", "export"],
    updated,
    de: {
      slug: "haendler-und-firmenkunden",
      nav: "Händler und Firmenkunden",
      teaser: "Regelmäßige Zulassungen für Autohäuser, Händler und Fuhrparks.",
      metaTitle: "Zulassungsdienst für Autohäuser, Händler und Fuhrparks in Wiesbaden",
      metaDescription:
        "Zulassungsservice für Autohändler und Flotten in Wiesbaden und Mainz-Kastel: tägliche Abholung, Sammelabgabe bei der Zulassungsbehörde, Monatsrechnung.",
      eyebrow: "Händler und Firmenkunden",
      h1: "Zulassungen für Autohäuser, Händler und Fuhrparks",
      lead: "Sie verkaufen Autos, wir bringen sie auf die Straße. Feste Abholzeiten, ein Ansprechpartner per WhatsApp und eine Rechnung am Monatsende.",
      whatsapp: "Hallo, wir sind ein Autohaus / Fuhrpark und haben regelmäßig Zulassungen. Ungefähre Stückzahl pro Monat: ...",
      blocks: [
        {
          type: "prose",
          h2: "Wie die Zulassungsbehörde Wiesbaden mit Händlern arbeitet",
          paras: [
            "Der Online-Terminkalender der Stadt steht seit dem 21. Mai 2024 nur noch Privatkunden offen. Für Zulassungsdienste und Händler gibt es stattdessen drei Wege: die Sammelabgabe im Händlerzimmer am Morgen, den Händlerschalter für wenige Vorgänge mit sofortiger Bearbeitung und den Einwurf in den Postkasten rund um die Uhr.",
            "Diese Wege kosten Zeit, wenn man sie nur gelegentlich nutzt. Wir sind regelmäßig dort. Ihre Vorgänge laufen in unserer Mappe mit, und Sie müssen niemanden aus dem Verkauf abstellen.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Wichtig: keine Untervollmachten",
          text: "Die Stadt Wiesbaden bearbeitet nur Zulassungen, für die der Dienstleister direkt beauftragt wurde. Untervollmachten werden nicht anerkannt. Die Vollmacht muss deshalb vom Halter selbst auf uns ausgestellt sein, nicht vom Autohaus weitergegeben. Wir stellen Ihnen das passende Formular für Ihre Kundenmappe.",
        },
        {
          type: "checklist",
          h2: "Was wir für gewerbliche Kunden übernehmen",
          groups: [
            {
              items: [
                "**Neuzulassungen und Tageszulassungen** inklusive Kennzeichen und Plaketten",
                "**Umschreibungen** beim Gebrauchtwagenverkauf, auf Wunsch direkt mit Auslieferungstermin abgestimmt",
                "**Abmeldungen** von Inzahlungnahmen und Leasingrückläufern",
                "**Kurzzeit- und Ausfuhrkennzeichen** für Überführungen und Exportkunden",
                "**Firmenzulassungen** mit Prüfung von Handelsregisterauszug, Gewerbeanmeldung und Vertretungsvollmacht",
                "**Abholung und Lieferung** der Unterlagen zu festen Zeiten",
              ],
            },
          ],
        },
        {
          type: "prose",
          h2: "Unterlagen bei Firmenzulassungen",
          paras: [
            "Soll ein Fahrzeug auf eine Firma zugelassen werden, verlangt die Behörde einen Firmennachweis: Handelsregisterauszug bei GmbH, UG, AG und eingetragenen Kaufleuten, Gewerbeanmeldung bei Einzelunternehmen. Bei einer GbR werden alle Gesellschafter benötigt oder ein Gesellschaftsvertrag mit Vollmacht der Zeichnungsberechtigten.",
            "Die Kfz-Steuer wird vom Konto der Firma eingezogen. Zahlt jemand anderes als der Halter, braucht die Behörde eine Ausweiskopie des Zahlers. Die Stadt stellt dazu ein Merkblatt für Firmenzulassungen bereit, das wir Ihnen auf Anfrage schicken.",
          ],
        },
        {
          type: "steps",
          h2: "So starten wir",
          steps: [
            { title: "Kurzes Gespräch", text: "Sie nennen uns Stückzahl, Standorte und Ihre üblichen Vorgänge. Wir schlagen Abholzeiten und einen Stückpreis vor." },
            { title: "Probewoche", text: "Die ersten Vorgänge rechnen wir einzeln ab. So sehen Sie, ob Ablauf und Tempo zu Ihrem Betrieb passen." },
            { title: "Laufender Betrieb", text: "Feste Abholung, Statusmeldung per WhatsApp und eine Sammelrechnung am Monatsende." },
          ],
        },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Was kostet der Händlerservice?", a: "Der Preis pro Vorgang hängt von der Stückzahl ab. Nennen Sie uns Ihre ungefähre Menge, dann bekommen Sie ein schriftliches Angebot." },
            { q: "Können Sie auch rote Händlerkennzeichen beantragen?", a: "Rote Dauerkennzeichen vergibt die Stadt über einen eigenen Terminweg an den Betrieb selbst. Wir unterstützen bei den Unterlagen, den Antrag stellt der Inhaber." },
            { q: "Arbeiten Sie auch mit anderen Zulassungsstellen?", a: "Unser Schwerpunkt ist Wiesbaden. Zulassungen in Mainz, im Rheingau-Taunus-Kreis oder im Main-Taunus-Kreis sind nach Absprache möglich." },
          ],
        },
      ],
    },
    en: {
      slug: "dealers-and-fleets",
      nav: "Dealers and fleets",
      teaser: "Regular registrations for dealerships, traders and company fleets.",
      metaTitle: "Vehicle registration service for dealerships and fleets in Wiesbaden",
      metaDescription:
        "Registration service for car dealers and fleets in Wiesbaden and Mainz-Kastel: daily collection, bulk filing at the registration office, monthly invoicing.",
      eyebrow: "Dealers and fleets",
      h1: "Registrations for dealerships, traders and fleets",
      lead: "You sell the cars, we get them on the road. Fixed collection times, one contact on WhatsApp and one invoice at the end of the month.",
      whatsapp: "Hello, we are a dealership / fleet operator with regular registrations. Approximate number per month: ...",
      blocks: [
        {
          type: "prose",
          h2: "How the Wiesbaden office works with the trade",
          paras: [
            "Since 21 May 2024 the city's online appointment calendar has been open to private customers only. Registration services and dealers have three channels instead: bulk drop-off in the trade room in the morning, the trade counter for a few cases with immediate processing, and a letterbox available around the clock.",
            "These channels cost time if you use them only occasionally. We are there regularly. Your cases travel in our folder and you do not have to take anyone off the sales floor.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Important: no sub-authorisations",
          text: "The City of Wiesbaden only processes registrations for which the service provider was commissioned directly. Sub-authorisations are not accepted. The power of attorney must therefore be issued to us by the keeper, not passed on by the dealership. We give you the right form for your customer folder.",
        },
        {
          type: "checklist",
          h2: "What we handle for business customers",
          groups: [
            {
              items: [
                "**New and one-day registrations** including plates and seals",
                "**Transfers** on used car sales, timed to your delivery date if you wish",
                "**Deregistrations** of trade-ins and lease returns",
                "**Short-term and export plates** for transfers and export customers",
                "**Company registrations** with a check of the register extract, business registration and signatory authority",
                "**Collection and delivery** of documents at fixed times",
              ],
            },
          ],
        },
        {
          type: "prose",
          h2: "Documents for company registrations",
          paras: [
            "If a vehicle is to be registered to a company, the office wants proof of the company: a commercial register extract for GmbH, UG, AG and registered merchants, a business registration for sole traders. A GbR needs all partners or a partnership agreement with a power of attorney from the authorised signatories.",
            "Vehicle tax is collected from the company account. If someone other than the keeper pays, the office needs a copy of the payer's ID. The city publishes a leaflet on company registrations, which we send you on request.",
          ],
        },
        {
          type: "steps",
          h2: "How we start",
          steps: [
            { title: "Short conversation", text: "You tell us volume, locations and your usual cases. We propose collection times and a unit price." },
            { title: "Trial week", text: "We bill the first cases individually, so you can see whether process and pace suit your business." },
            { title: "Regular operation", text: "Fixed collection, status updates on WhatsApp and one invoice at the end of the month." },
          ],
        },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "What does the dealer service cost?", a: "The price per case depends on volume. Give us your approximate numbers and you receive a written offer." },
            { q: "Can you apply for red trade plates?", a: "The city issues permanent red plates to the business itself through a separate appointment channel. We help with the paperwork; the owner files the application." },
            { q: "Do you work with other registration offices?", a: "Our focus is Wiesbaden. Registrations in Mainz, the Rheingau-Taunus district or the Main-Taunus district are possible by arrangement." },
          ],
        },
      ],
    },
  },
];
