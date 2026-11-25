import type { PageDoc } from "../types";

const updated = "2026-11-25";

export const servicePagesB: PageDoc[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "shortterm",
    kind: "service",
    price: "shortTerm",
    related: ["export", "register", "deregister"],
    updated,
    de: {
      slug: "kurzzeitkennzeichen-wiesbaden",
      nav: "Kurzzeitkennzeichen",
      teaser: "Fünf Tage gültig, für Probefahrt, Überführung und den Weg zum TÜV.",
      metaTitle: "Kurzzeitkennzeichen Wiesbaden: 5-Tage-Kennzeichen beantragen | Kosten und Unterlagen",
      metaDescription:
        "Kurzzeitkennzeichen in Wiesbaden beantragen: wofür das gelbe 5-Tage-Kennzeichen gilt, welche Unterlagen nötig sind, was mit abgelaufener HU erlaubt ist und was es kostet.",
      eyebrow: "Kurzzeitkennzeichen",
      h1: "Kurzzeitkennzeichen für Wiesbaden",
      lead: "Das Kennzeichen mit dem gelben Feld gilt höchstens fünf Tage und nur für Probe- und Überführungsfahrten. Wir beantragen es und bringen die fertigen Schilder mit.",
      whatsapp: "Hallo, ich brauche ein Kurzzeitkennzeichen. Das Fahrzeug steht in: ... Hier sind Fotos der Papiere:",
      blocks: [
        {
          type: "prose",
          h2: "Wofür das Kurzzeitkennzeichen gedacht ist",
          paras: [
            "Sie haben ein abgemeldetes Auto gekauft und müssen es nach Hause bringen. Oder Sie wollen einen Wagen vor dem Kauf Probe fahren. Für genau diese Fälle gibt es das Kurzzeitkennzeichen. Die Stadt Wiesbaden formuliert es eindeutig: Erlaubt sind Probefahrten und Überführungen, andere Fahrtzwecke sind nicht zulässig und können geahndet werden.",
            "Die Gültigkeit beträgt maximal fünf Tage. Das Ablaufdatum steht im gelben Feld rechts auf dem Schild. Kurzzeitkennzeichen gelten **nur innerhalb Deutschlands**. Wer ein Auto ins Ausland bringen will, braucht ein [Ausfuhrkennzeichen](page:export).",
          ],
        },
        {
          type: "checklist",
          h2: "Unterlagen für das Kurzzeitkennzeichen",
          groups: [
            {
              items: [
                "**Ausweis**, oder Reisepass mit Meldebescheinigung, nicht älter als drei Monate",
                "Zulassungsbescheinigung **Teil I und Teil II** oder die EG-Übereinstimmungsbescheinigung. Kopien genügen, wenn die Fahrzeugdaten beim Kraftfahrt-Bundesamt hinterlegt sind",
                "Nachweis der letzten **Hauptuntersuchung**, Kopie genügt",
                "**eVB-Nummer für Kurzzeitkennzeichen**. Das ist ein eigener Tarif, die normale eVB reicht nicht",
                "**Kaufvertrag**, falls das Fahrzeug noch nicht Ihnen gehört",
                "Bei Fahrzeugen aus dem Ausland: die ausländischen Papiere im Original",
                "**Vollmacht** für uns",
              ],
            },
          ],
          note: "Wohnen Sie im Ausland, verlangt die Behörde zusätzlich einen Empfangsbevollmächtigten mit Anschrift in Deutschland.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Abgelaufene HU: nur der direkte Weg zur Prüfung",
          text: "Hat das Fahrzeug keine gültige Hauptuntersuchung, schränkt die Behörde das Kurzzeitkennzeichen ein. Erlaubt ist dann im Wesentlichen die Fahrt zur Prüfstelle und, wenn Mängel festgestellt werden, zur Werkstatt und zurück. Eine Überführung quer durch Deutschland ist damit nicht möglich. Sagen Sie uns vorher, ob die HU gültig ist.",
        },
        {
          type: "prose",
          h2: "Wo Sie beantragen dürfen",
          paras: [
            "Zuständig ist die Zulassungsbehörde an Ihrem Wohnsitz oder dort, wo das Fahrzeug steht. Kaufen Sie also ein Auto in Wiesbaden und wohnen in Köln, können Sie das Kennzeichen hier beantragen und direkt losfahren.",
            "Die Kennzeichen erhalten Sie am Tag des Antrags. Zusammen mit den Schildern bekommen Sie einen Fahrzeugschein für Kurzzeitkennzeichen, den Sie bei jeder Fahrt dabeihaben müssen.",
          ],
        },
        {
          type: "table",
          h2: "Was ein Kurzzeitkennzeichen kostet",
          head: ["Posten", "Betrag"],
          rows: [
            ["Gebühr der Stadt Wiesbaden", "13,10 €"],
            ["Schilderpaar", "rund 20 bis 30 €"],
            ["Versicherung für fünf Tage", "je nach Versicherer, meist 30 bis 100 €"],
          ],
          note: "Amtliche Gebühr laut wiesbaden.de, Stand 25. November 2026. Die Versicherung schließen Sie selbst ab, wir nennen Ihnen gern, worauf Sie beim Tarif achten sollten.",
        },
        { type: "price", h2: "Unser Festpreis", keys: ["shortTerm"] },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Kann ich das Kennzeichen verlängern?", a: "Nein. Nach fünf Tagen ist es abgelaufen. Brauchen Sie mehr Zeit, muss ein neues beantragt werden, mit neuer Versicherung." },
            { q: "Darf ich mit Kurzzeitkennzeichen ins Ausland fahren?", a: "Nein. Sie sind nur in Deutschland gültig. Einzelne Nachbarländer dulden sie nicht, und der Versicherungsschutz endet in der Regel an der Grenze." },
            { q: "Kann ich mehrere Autos damit fahren?", a: "Nein. Das Kennzeichen wird für ein bestimmtes Fahrzeug zugeteilt und in den Schein eingetragen." },
            { q: "Was passiert danach mit den Schildern?", a: "Sie müssen sie nicht zurückgeben. Nach Ablauf sind sie wertlos. Entfernen Sie sie vom Fahrzeug, bevor es wieder auf der Straße steht." },
          ],
        },
      ],
    },
    en: {
      slug: "short-term-plates-wiesbaden",
      nav: "Short-term plates",
      teaser: "Valid five days, for test drives, transfers and the trip to the test centre.",
      metaTitle: "Short-term plates in Wiesbaden (Kurzzeitkennzeichen): 5-day plates, cost, documents",
      metaDescription:
        "How to get German 5-day plates (Kurzzeitkennzeichen) in Wiesbaden: what they allow, which documents you need, the rule for an expired roadworthiness test, and the cost.",
      eyebrow: "Short-term plates",
      h1: "Short-term plates in Wiesbaden",
      lead: "The plate with the yellow field is valid for five days at most and only for test drives and transfers. We apply for it and bring you the finished plates.",
      whatsapp: "Hello, I need short-term plates. The vehicle is located in: ... Here are photos of the papers:",
      blocks: [
        {
          type: "prose",
          h2: "What short-term plates are for",
          paras: [
            "You bought a deregistered car and have to get it home. Or you want to test-drive a car before buying. Short-term plates (Kurzzeitkennzeichen) exist for exactly these cases. The City of Wiesbaden is explicit: test drives and transfers are allowed, any other use is not and can be fined.",
            "They are valid for a maximum of five days. The expiry date is printed in the yellow field on the right of the plate. Short-term plates are valid **only within Germany**. To take a car abroad you need [export plates](page:export).",
          ],
        },
        {
          type: "checklist",
          h2: "Documents for short-term plates",
          groups: [
            {
              items: [
                "**ID card**, or passport plus a residence registration certificate no older than three months",
                "Registration certificate **part I and part II**, or the EC certificate of conformity. Copies are enough if the vehicle data is on file with the Federal Motor Transport Authority",
                "Proof of the last **roadworthiness test (HU)**, a copy is enough",
                "**eVB number for short-term plates**. This is a separate tariff; a normal eVB is not accepted",
                "**Purchase contract**, if the vehicle is not yet yours",
                "For vehicles from abroad: the foreign papers in original",
                "**Power of attorney** for us",
              ],
            },
          ],
          note: "If you live abroad, the office also requires an authorised recipient with an address in Germany.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Expired test: only the direct trip to the inspection",
          text: "If the vehicle has no valid roadworthiness test, the office restricts the plates. In essence you may then only drive to the test centre and, if faults are found, to a garage and back. Driving the car across Germany is not possible that way. Tell us beforehand whether the test is valid.",
        },
        {
          type: "prose",
          h2: "Where you can apply",
          paras: [
            "The responsible office is the one at your place of residence or where the vehicle is located. So if you buy a car in Wiesbaden and live in Cologne, you can apply here and drive off directly.",
            "You get the plates on the day of application, together with a registration slip for short-term plates that you must carry on every trip.",
          ],
        },
        {
          type: "table",
          h2: "What short-term plates cost",
          head: ["Item", "Amount"],
          rows: [
            ["City of Wiesbaden fee", "€13.10"],
            ["Pair of plates", "about €20 to €30"],
            ["Five days of insurance", "depends on the insurer, usually €30 to €100"],
          ],
          note: "Official fee according to wiesbaden.de, as of 25 November 2026. You take out the insurance yourself; we are happy to tell you what to look for.",
        },
        { type: "price", h2: "Our fixed price", keys: ["shortTerm"] },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "Can the plates be extended?", a: "No. They expire after five days. If you need more time, a new set has to be applied for, with new insurance." },
            { q: "Can I drive abroad on short-term plates?", a: "No. They are valid only in Germany. Some neighbouring countries do not accept them, and insurance cover normally ends at the border." },
            { q: "Can I use them on several cars?", a: "No. The plate is assigned to one specific vehicle and entered in the slip." },
            { q: "What happens to the plates afterwards?", a: "You do not have to return them. They are worthless once expired. Take them off the vehicle before it stands on a public road again." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "export",
    kind: "service",
    price: "export",
    related: ["shortterm", "deregister", "import"],
    updated,
    de: {
      slug: "ausfuhrkennzeichen-wiesbaden",
      nav: "Ausfuhrkennzeichen",
      teaser: "Zollkennzeichen für die Fahrt ins Ausland, mit Vorführung bei der Behörde.",
      metaTitle: "Ausfuhrkennzeichen Wiesbaden: Zollkennzeichen beantragen | Unterlagen und Kosten",
      metaDescription:
        "Ausfuhrkennzeichen (Zollkennzeichen) in Wiesbaden: Unterlagen, gelbe Versicherungskarte, Vorführpflicht bei der Zulassungsbehörde, amtliche Gebühren und unser Preis.",
      eyebrow: "Ausfuhrkennzeichen",
      h1: "Ausfuhrkennzeichen für die Fahrt ins Ausland",
      lead: "Das Kennzeichen mit dem roten Feld brauchen Sie, wenn ein Auto auf eigener Achse dauerhaft Deutschland verlässt. Der Antrag ist aufwendiger als eine normale Zulassung, weil das Fahrzeug vorgeführt werden muss.",
      whatsapp: "Hallo, ich brauche ein Ausfuhrkennzeichen. Zielland: ... Hier sind Fotos von Fahrzeugschein und Fahrzeugbrief:",
      blocks: [
        {
          type: "prose",
          h2: "Wann Ausfuhr- und wann Kurzzeitkennzeichen",
          paras: [
            "Ein [Kurzzeitkennzeichen](page:shortterm) gilt fünf Tage und nur in Deutschland. Das Ausfuhrkennzeichen gilt auch im Ausland und für einen frei gewählten Zeitraum von wenigen Tagen bis zu mehreren Monaten. Der Zeitraum richtet sich nach der Laufzeit der Versicherung, die Sie abschließen.",
            "Wird das Auto mit dem Lkw oder im Container exportiert, brauchen Sie kein Ausfuhrkennzeichen. Dann genügt in der Regel die [Abmeldung](page:deregister).",
          ],
        },
        {
          type: "checklist",
          h2: "Unterlagen laut Zulassungsbehörde Wiesbaden",
          groups: [
            {
              title: "Zum Fahrzeug",
              items: [
                "Zulassungsbescheinigung **Teil I und Teil II** im Original",
                "Die bisherigen **Kennzeichen**, falls das Fahrzeug noch zugelassen ist",
                "Nachweis der **gültigen Hauptuntersuchung**, als Bericht im Original oder als Eintrag in Teil I",
                "Bei Importfahrzeugen: ausländische Papiere im Original, Kaufvertrag und gegebenenfalls CoC oder Gutachten",
              ],
            },
            {
              title: "Zu Versicherung und Steuer",
              items: [
                "**Gelbe Versicherungskarte** für Ausfuhrkennzeichen",
                "**SEPA-Lastschriftmandat** für die Kfz-Steuer, oder eine Unbedenklichkeitsbescheinigung des Zollamts über die bereits bezahlte Steuer",
              ],
            },
            {
              title: "Zur Person",
              items: [
                "Personalausweis, oder Reisepass mit Meldebescheinigung, nicht älter als drei Monate",
                "Nicht-EU-Bürger: Reisepass mit elektronischem Aufenthaltstitel",
                "Bei Wohnsitz im Ausland: **Empfangsvollmacht** für eine Person mit Anschrift in Deutschland",
              ],
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Das Fahrzeug muss zur Behörde",
          text: "Anders als bei einer normalen Zulassung verlangt die Stadt Wiesbaden, dass das Fahrzeug vor der Zuteilung vorgefahren wird. Die Behörde prüft die Fahrgestellnummer und macht eine Sichtkontrolle. Wir fahren den Wagen für Sie hin oder begleiten Sie. Planen Sie dafür einen eigenen Termin ein und sprechen Sie ihn mit uns ab.",
        },
        {
          type: "prose",
          h2: "Kfz-Steuer auch für Ausfuhrkennzeichen",
          paras: [
            "Seit dem 1. Juli 2010 sind Ausfuhrkennzeichen ab dem Tag der Zuteilung steuerpflichtig, für den gesamten Zuteilungszeitraum. Haben Sie kein Konto im Euro-Zahlungsraum, zahlen Sie die Steuer vorab beim Hauptzollamt Wiesbaden und legen die Bescheinigung vor.",
            "Die amtliche Gebühr für die Zuteilung liegt laut Stadt Wiesbaden zwischen 30 und 70 Euro. Dazu kommen Schilder, Versicherung und Steuer.",
          ],
        },
        { type: "price", h2: "Unser Preis", keys: ["export"], note: "Der Aufwand hängt vom Fahrzeug, vom Zielland und von der Laufzeit ab. Schicken Sie uns Fotos der Papiere per WhatsApp, dann nennen wir Ihnen einen Festpreis, bevor Sie etwas abgeben. Enthalten sind Antrag, Behördengebühr und Schilder; die Vorführung des Fahrzeugs stimmen wir einzeln mit Ihnen ab." },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Wie lange ist ein Ausfuhrkennzeichen gültig?", a: "So lange wie die Versicherung, die Sie dafür abschließen. Üblich sind 15 Tage bis mehrere Monate. Das Ablaufdatum steht im roten Feld auf dem Schild." },
            { q: "Brauche ich eine gültige HU?", a: "Ja. Die HU muss mindestens bis zum Ende des Zuteilungszeitraums gültig sein. Ist sie abgelaufen, muss das Auto vorher zur Hauptuntersuchung." },
            { q: "Ich wohne nicht in Deutschland. Geht das trotzdem?", a: "Ja. Sie brauchen einen Empfangsbevollmächtigten mit deutscher Anschrift. Sprechen Sie uns an, wir erklären, wie das läuft." },
            { q: "Wird das Auto dabei abgemeldet?", a: "Ja. Mit der Zuteilung des Ausfuhrkennzeichens endet die reguläre Zulassung in Deutschland." },
          ],
        },
      ],
    },
    en: {
      slug: "export-plates-wiesbaden",
      nav: "Export plates",
      teaser: "Plates for driving a car out of Germany, including the vehicle inspection at the office.",
      metaTitle: "Export plates in Wiesbaden (Ausfuhrkennzeichen): documents, insurance, cost",
      metaDescription:
        "German export plates (Ausfuhrkennzeichen) in Wiesbaden: documents, the yellow insurance card, the mandatory vehicle presentation, official fees and our price. In English.",
      eyebrow: "Export plates",
      h1: "Export plates for driving your car abroad",
      lead: "You need the plate with the red field when a car leaves Germany for good under its own power. The application is more involved than a normal registration because the vehicle has to be presented.",
      whatsapp: "Hello, I need export plates. Destination country: ... Here are photos of both registration certificates:",
      blocks: [
        {
          type: "prose",
          h2: "Export plates or short-term plates?",
          paras: [
            "[Short-term plates](page:shortterm) last five days and are valid only in Germany. Export plates are also valid abroad and for a period you choose, from a few days to several months. The period follows the term of the insurance you take out.",
            "If the car is exported on a truck or in a container, you do not need export plates. [Deregistration](page:deregister) is usually enough.",
          ],
        },
        {
          type: "checklist",
          h2: "Documents required by the Wiesbaden office",
          groups: [
            {
              title: "For the vehicle",
              items: [
                "Registration certificate **part I and part II** in original",
                "The current **plates**, if the vehicle is still registered",
                "Proof of a **valid roadworthiness test**, as the original report or as an entry in part I",
                "For imported vehicles: the foreign papers in original, purchase contract and, where applicable, CoC or inspection report",
              ],
            },
            {
              title: "Insurance and tax",
              items: [
                "**Yellow insurance card** for export plates",
                "**SEPA direct debit mandate** for vehicle tax, or a clearance certificate from customs showing the tax is already paid",
              ],
            },
            {
              title: "About you",
              items: [
                "National ID card, or passport plus a residence registration certificate no older than three months",
                "Non-EU citizens: passport with electronic residence permit",
                "If you live abroad: an **authorisation to receive documents** for someone with an address in Germany",
              ],
            },
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "The vehicle has to go to the office",
          text: "Unlike a normal registration, the City of Wiesbaden requires the vehicle to be presented before plates are assigned. The office checks the chassis number and inspects the car visually. We drive it there for you or go with you. Allow a separate slot for this and arrange it with us.",
        },
        {
          type: "prose",
          h2: "Vehicle tax applies to export plates too",
          paras: [
            "Since 1 July 2010 export plates have been taxable from the day they are assigned, for the whole period. If you have no bank account in the euro payment area, you pay the tax in advance at the Wiesbaden main customs office and present the certificate.",
            "According to the City of Wiesbaden the official fee is between 30 and 70 euros. Plates, insurance and tax come on top.",
          ],
        },
        { type: "price", h2: "Our price", keys: ["export"], note: "The effort depends on the vehicle, the destination and the period. Send us photos of the papers on WhatsApp and we give you a fixed price before you hand anything in. It covers the application, the authority fee and the plates; we arrange the vehicle presentation with you individually." },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "How long are export plates valid?", a: "As long as the insurance you take out for them. Fifteen days to several months is common. The expiry date is in the red field on the plate." },
            { q: "Do I need a valid roadworthiness test?", a: "Yes. It must be valid at least until the end of the period. If it has expired, the car must pass the test first." },
            { q: "I do not live in Germany. Is that a problem?", a: "No. You need an authorised recipient with a German address. Ask us and we explain how it works." },
            { q: "Is the car deregistered in the process?", a: "Yes. When export plates are assigned, the regular German registration ends." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "customplate",
    kind: "service",
    price: "customPlate",
    related: ["register", "reregister", "lost"],
    updated,
    de: {
      slug: "wunschkennzeichen-wiesbaden",
      nav: "Wunschkennzeichen",
      teaser: "WI mit Ihren Initialen: reservieren, zuteilen lassen, Schilder prägen.",
      metaTitle: "Wunschkennzeichen Wiesbaden reservieren: WI-Kennzeichen, Kosten und Regeln",
      metaDescription:
        "Wunschkennzeichen in Wiesbaden: wie die Reservierung funktioniert, was sie kostet (12,80 €), wie lange sie gilt und welche Kombinationen möglich sind. Inklusive Schilder.",
      eyebrow: "Wunschkennzeichen und Schilder",
      h1: "Wunschkennzeichen für Wiesbaden",
      lead: "Initialen, Geburtsjahr oder einfach eine Kombination, die Sie sich merken können: Wir prüfen, was frei ist, reservieren und bringen die geprägten Schilder zur Zulassung mit.",
      whatsapp: "Hallo, ich möchte ein Wunschkennzeichen. Meine Wunschkombinationen: WI - ...",
      blocks: [
        {
          type: "prose",
          h2: "So ist ein WI-Kennzeichen aufgebaut",
          paras: [
            "Nach dem Kürzel **WI** für Wiesbaden folgen ein oder zwei Buchstaben und bis zu vier Ziffern. Insgesamt darf ein Kennzeichen höchstens acht Zeichen haben. Bei Saison-, E- und H-Kennzeichen ist eine Stelle weniger frei, weil das Zusatzzeichen Platz braucht.",
            "WI gilt für das gesamte Stadtgebiet, also auch für Mainz-Kastel, Kostheim und Amöneburg. Bestimmte Buchstabenfolgen vergibt die Behörde grundsätzlich nicht. Was gesperrt ist, zeigt die Online-Reservierung der Stadt sofort an.",
          ],
        },
        {
          type: "steps",
          h2: "Von der Idee zum Schild",
          steps: [
            { title: "Wünsche nennen", text: "Schicken Sie uns zwei oder drei Kombinationen in der Reihenfolge Ihrer Vorliebe. Die erste ist oft schon vergeben." },
            { title: "Reservierung", text: "Wir reservieren die erste freie Kombination online bei der Stadt Wiesbaden. Sie bleibt drei Monate für Sie geblockt." },
            { title: "Zuteilung bei der Zulassung", text: "Erst mit der Zulassung wird das Kennzeichen Ihrem Fahrzeug zugeteilt. Ein Anspruch auf Zuteilung besteht laut Stadt nicht, in der Praxis klappt es bei reservierten Kennzeichen." },
            { title: "Prägen und siegeln", text: "Wir lassen die Schilder prägen. Die Behörde bringt die Stadtplakette und die HU-Plakette an." },
          ],
        },
        {
          type: "table",
          h2: "Was ein Wunschkennzeichen kostet",
          head: ["Posten", "Gebühr der Stadt Wiesbaden"],
          rows: [
            ["Vorabreservierung", "2,60 €"],
            ["Zuteilung des Wunschkennzeichens", "10,20 €"],
            ["Zusammen", "12,80 €"],
          ],
          note: "Die 12,80 Euro werden zusammen mit den übrigen Gebühren bei der Zulassung fällig. Stand 25. November 2026, Quelle wiesbaden.de.",
        },
        { type: "price", h2: "Unsere Preise", keys: ["customPlate", "platePair", "sticker"] },
        {
          type: "prose",
          h2: "Saison-, E- und H-Kennzeichen",
          paras: [
            "**Saisonkennzeichen** gelten nur in den eingeprägten Monaten, zum Beispiel von April bis Oktober. Außerhalb dieser Zeit darf das Fahrzeug nicht auf öffentlichen Straßen stehen. Die Behörde berechnet dafür 26,30 bis 50 Euro.",
            "Das **E-Kennzeichen** gibt es für reine Elektroautos, Brennstoffzellenfahrzeuge und Plug-in-Hybride, die die Vorgaben des Elektromobilitätsgesetzes erfüllen. Der Nachweis steht in der Zulassungsbescheinigung oder im CoC. Amtliche Gebühr: 31,40 bis 61,10 Euro.",
            "Das **H-Kennzeichen** setzt ein Oldtimer-Gutachten nach § 23 StVZO und eine gültige Hauptuntersuchung voraus. Das Fahrzeug muss mindestens 30 Jahre alt und weitgehend im Originalzustand sein.",
          ],
        },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Kann ich mein Kennzeichen auf das nächste Auto mitnehmen?", a: "Ja. Bei der Abmeldung lässt sich das Kennzeichen für 2,60 Euro reservieren und dem nächsten Fahrzeug zuteilen." },
            { q: "Ich habe selbst online reserviert. Was brauchen Sie?", a: "Die Reservierungsbestätigung mit der PIN. Ohne PIN kann die Behörde die Reservierung nicht zuordnen." },
            { q: "Was, wenn die Reservierung abläuft?", a: "Nach drei Monaten wird die Kombination wieder frei. Sie können neu reservieren, sofern sie in der Zwischenzeit niemand genommen hat." },
            { q: "Kann ich nur Schilder kaufen, ohne Zulassung?", a: "Ja, etwa als Ersatz für ein beschädigtes Schild oder für einen Fahrradträger. Bringen Sie den Fahrzeugschein mit. Das Siegel für ein neues vorderes oder hinteres Kennzeichen bringt die Zulassungsbehörde an." },
          ],
        },
      ],
    },
    en: {
      slug: "custom-plates-wiesbaden",
      nav: "Custom plates",
      teaser: "WI with your initials: reserve, have it assigned, get the plates made.",
      metaTitle: "Custom licence plates in Wiesbaden (Wunschkennzeichen): reserve a WI plate",
      metaDescription:
        "Custom plates in Wiesbaden: how the reservation works, what it costs (€12.80), how long it lasts and which combinations are possible. Plates made and fitted to the paperwork.",
      eyebrow: "Custom plates",
      h1: "Custom licence plates for Wiesbaden",
      lead: "Initials, a birth year or simply a combination you can remember: we check what is free, reserve it and bring the embossed plates to the registration.",
      whatsapp: "Hello, I would like a custom plate. My preferred combinations: WI - ...",
      blocks: [
        {
          type: "prose",
          h2: "How a WI plate is built",
          paras: [
            "After the district code **WI** for Wiesbaden come one or two letters and up to four digits. A plate may have at most eight characters in total. Seasonal, E and H plates have one position less, because the extra marking needs the space.",
            "WI applies to the whole city, including Mainz-Kastel, Kostheim and Amöneburg. The authority does not issue certain letter combinations at all. The city's online reservation tool shows immediately what is blocked.",
          ],
        },
        {
          type: "steps",
          h2: "From idea to plate",
          steps: [
            { title: "Tell us your wishes", text: "Send two or three combinations in order of preference. The first is often taken." },
            { title: "Reservation", text: "We reserve the first free combination online with the City of Wiesbaden. It is held for you for three months." },
            { title: "Assignment at registration", text: "The number is assigned to your vehicle only when it is registered. According to the city there is no legal entitlement, but in practice reserved numbers are assigned." },
            { title: "Embossing and seals", text: "We have the plates made. The office applies the city seal and the roadworthiness sticker." },
          ],
        },
        {
          type: "table",
          h2: "What a custom plate costs",
          head: ["Item", "City of Wiesbaden fee"],
          rows: [
            ["Advance reservation", "€2.60"],
            ["Assignment of the chosen number", "€10.20"],
            ["Total", "€12.80"],
          ],
          note: "The €12.80 is due together with the other fees at registration. As of 25 November 2026, source wiesbaden.de.",
        },
        { type: "price", h2: "Our prices", keys: ["customPlate", "platePair", "sticker"] },
        {
          type: "prose",
          h2: "Seasonal, E and H plates",
          paras: [
            "**Seasonal plates** are valid only in the months stamped on them, for example April to October. Outside that period the vehicle may not stand on public roads. The office charges 26.30 to 50 euros.",
            "The **E plate** is for battery electric cars, fuel cell vehicles and plug-in hybrids that meet the requirements of the Electric Mobility Act. Proof is in the registration certificate or the CoC. Official fee: 31.40 to 61.10 euros.",
            "The **H plate** requires a classic car report under § 23 StVZO and a valid roadworthiness test. The vehicle must be at least 30 years old and largely in original condition.",
          ],
        },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "Can I take my number to my next car?", a: "Yes. When you deregister, the number can be reserved for 2.60 euros and assigned to your next vehicle." },
            { q: "I reserved online myself. What do you need?", a: "The reservation confirmation with the PIN. Without the PIN the office cannot match the reservation." },
            { q: "What if the reservation expires?", a: "After three months the combination becomes available again. You can reserve it again, provided nobody has taken it in the meantime." },
            { q: "Can I buy plates only, without a registration?", a: "Yes, for example to replace a damaged plate or for a bike carrier. Bring the registration certificate. The seal on a new front or rear plate is applied by the registration office." },
          ],
        },
      ],
    },
  },
];
