import { priceText } from "@/lib/prices";
import { site } from "@/lib/site";
import type { PageDoc } from "../types";

const updated = "2026-11-25";
const cutoff = site.expressCutoff;

export const servicePagesA: PageDoc[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "register",
    kind: "service",
    price: "registration",
    related: ["customplate", "express", "documents"],
    updated,
    de: {
      slug: "auto-anmelden-wiesbaden",
      nav: "Auto anmelden",
      teaser: "Neuwagen, Gebrauchtwagen oder Wiederzulassung auf Ihren Namen.",
      metaTitle: "Auto anmelden in Wiesbaden ohne Termin | Zulassungsdienst mit Kennzeichen",
      metaDescription:
        "Auto in Wiesbaden anmelden, ohne zur Zulassungsstelle zu gehen: Neuwagen, Gebrauchtwagen, Wiederzulassung. Unterlagen-Liste, amtliche Gebühren und Festpreis.",
      eyebrow: "Auto anmelden",
      h1: "Auto anmelden in Wiesbaden, ohne selbst hinzugehen",
      lead: "Neuwagen, gekaufter Gebrauchter oder ein abgemeldetes Fahrzeug, das wieder fahren soll: Wir reichen die Zulassung bei der Behörde in der Stielstraße ein und bringen Papiere und Kennzeichen zurück.",
      whatsapp: "Hallo, ich möchte ein Auto in Wiesbaden anmelden. Hier sind Fotos von Fahrzeugschein und Fahrzeugbrief:",
      blocks: [
        {
          type: "prose",
          h2: "Wann Sie in Wiesbaden anmelden müssen",
          paras: [
            "Ein Fahrzeug wird dort zugelassen, wo der Halter seinen Hauptwohnsitz hat. Wohnen Sie in Wiesbaden, ist die Zulassungsbehörde der Landeshauptstadt zuständig. Das gilt auch für **Mainz-Kastel, Kostheim und Amöneburg**, die trotz des Namens zu Wiesbaden gehören.",
            "Die Stadt verlangt, dass die Anmeldung unverzüglich erfolgt. Ohne Zulassung dürfen Sie das Auto nicht im öffentlichen Raum fahren oder abstellen.",
          ],
        },
        {
          type: "checklist",
          h2: "Unterlagen für die Anmeldung",
          intro: "Diese Liste entspricht den Vorgaben der Zulassungsbehörde Wiesbaden. Schicken Sie uns Fotos, wir prüfen die Vollständigkeit vorab.",
          groups: [
            {
              title: "Immer nötig",
              items: [
                "Gültiger **Personalausweis**, oder Reisepass mit aktueller Meldebescheinigung (nicht älter als drei Monate)",
                "**eVB-Nummer** Ihrer Kfz-Versicherung",
                "**IBAN** für die Kfz-Steuer. Das SEPA-Lastschriftmandat füllen wir mit Ihnen aus",
                "**Vollmacht** für uns, im Original unterschrieben. Das Formular haben wir da",
              ],
            },
            {
              title: "Zusätzlich beim Gebrauchtwagen",
              items: [
                "Zulassungsbescheinigung **Teil I** (Fahrzeugschein) mit Nachweis der gültigen Hauptuntersuchung",
                "Zulassungsbescheinigung **Teil II** (Fahrzeugbrief)",
                "Die bisherigen **Kennzeichen**, falls das Auto noch zugelassen ist",
              ],
            },
            {
              title: "Zusätzlich beim Neuwagen",
              items: [
                "Zulassungsbescheinigung Teil II, sofern der Hersteller sie schon ausgefüllt hat",
                "**CoC-Papier** (EG-Übereinstimmungsbescheinigung)",
                "Kaufvertrag oder Rechnung im Original, wenn noch kein Teil II ausgestellt wurde",
              ],
            },
            {
              title: "Zusätzlich bei Firmen und Vereinen",
              items: ["Handelsregister- oder Vereinsregisterauszug", "Gewerbeanmeldung"],
            },
          ],
          note: "Die Behörde lässt kein Fahrzeug zu, wenn Kfz-Steuerschulden ab 5 Euro oder offene Gebühren aus früheren Zulassungen von mehr als 10 Euro bestehen.",
        },
        {
          type: "steps",
          h2: "So läuft die Anmeldung über uns",
          steps: [
            { title: "Vorab-Check", text: "Sie schicken Fotos der Papiere per WhatsApp. Wir sagen Ihnen, ob etwas fehlt, zum Beispiel die HU oder die eVB-Nummer." },
            { title: "Abgabe in Kastel", text: `Sie bringen die Originale vorbei oder lassen sie abholen. Sind sie bis ${cutoff} Uhr bei uns, reichen wir am selben Tag ein.` },
            { title: "Zulassung und Kennzeichen", text: "Wir lassen das Fahrzeug zu, lassen die Schilder prägen und die Plaketten anbringen." },
            { title: "Übergabe", text: "Sie erhalten Zulassungsbescheinigung Teil I und II, zwei gesiegelte Kennzeichen und die Umweltplakette." },
          ],
        },
        {
          type: "table",
          h2: "Was die Behörde berechnet",
          intro: "Zum Vergleich: Das sind die amtlichen Gebühren, wenn Sie selbst hingehen. Kennzeichen kommen jeweils dazu.",
          head: ["Vorgang", "Gebühr der Stadt Wiesbaden"],
          rows: [
            ["Neufahrzeug (Erstzulassung)", "30,20 bis 60,00 €"],
            ["Gebrauchtfahrzeug vor Ort", "30,00 €"],
            ["Wiederzulassung auf denselben Halter", "23,00 bis 50,00 €"],
            ["Wunschkennzeichen", "12,80 €"],
          ],
          note: "Quelle: wiesbaden.de, Stand 25. November 2026. Die genaue Höhe setzt die Behörde erst anhand der vollständigen Unterlagen fest.",
        },
        { type: "price", h2: "Unser Festpreis", keys: ["registration", "customPlate", "pickup"] },
        {
          type: "faq",
          h2: "Häufige Fragen zur Anmeldung",
          items: [
            { q: "Brauche ich eine gültige HU?", a: "Ja. Ohne gültige Hauptuntersuchung lässt die Behörde einen Gebrauchtwagen nicht zu. Ist die HU abgelaufen, brauchen Sie zuerst den Prüfbericht. Für die Fahrt zur Prüfstelle gibt es [Kurzzeitkennzeichen](page:shortterm)." },
            { q: "Was ist die eVB-Nummer?", a: "Ein siebenstelliger Code Ihrer Kfz-Versicherung. Er belegt, dass eine Haftpflichtversicherung besteht. Sie bekommen ihn nach Vertragsabschluss meist sofort per E-Mail oder SMS." },
            { q: "Kann ich mein altes Kennzeichen behalten?", a: "Wenn das Fahrzeug noch zugelassen ist, in vielen Fällen ja. Ein abgemeldetes Fahrzeug erhält ein neues Kennzeichen, auf Wunsch ein [Wunschkennzeichen](page:customplate)." },
            { q: "Das Auto soll auf mein Kind unter 18 zugelassen werden. Geht das?", a: "Ja, mit schriftlicher Einwilligung aller Erziehungsberechtigten und deren Ausweisen. Sprechen Sie uns vorher an, die Behörde prüft das genau." },
          ],
        },
      ],
    },
    en: {
      slug: "register-car-wiesbaden",
      nav: "Register a car",
      teaser: "New car, used car or re-registration in your name.",
      metaTitle: "Register a car in Wiesbaden without an appointment | Agent with plates",
      metaDescription:
        "Register your car in Wiesbaden without visiting the registration office: new, used or re-registered. Document checklist, official fees and our fixed price. In English.",
      eyebrow: "Register a car",
      h1: "Register your car in Wiesbaden without going yourself",
      lead: "A new car, a used one you just bought or a deregistered vehicle that should drive again: we file the registration at the office on Stielstraße and bring back your papers and plates.",
      whatsapp: "Hello, I would like to register a car in Wiesbaden. Here are photos of both registration certificates:",
      blocks: [
        {
          type: "prose",
          h2: "When Wiesbaden is the right office",
          paras: [
            "In Germany a vehicle is registered where its keeper has their main residence. If you live in Wiesbaden, the city's registration office is responsible. That includes **Mainz-Kastel, Kostheim and Amöneburg**, which belong to Wiesbaden despite their names.",
            "The city requires registration without delay. An unregistered car may not be driven or parked on public roads.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "US Forces and SOFA status",
          text: "If you are stationed in Wiesbaden under the NATO Status of Forces Agreement, your privately owned vehicle is normally registered through the US military vehicle registry rather than the German office. We handle German registrations. If you are unsure which applies, send us a message and we will tell you.",
        },
        {
          type: "checklist",
          h2: "Documents for registration",
          intro: "This list follows the requirements of the Wiesbaden registration office. Send us photos and we check that everything is complete.",
          groups: [
            {
              title: "Always required",
              items: [
                "Valid **national ID card**, or passport plus a current residence registration certificate (Meldebescheinigung, no older than three months). Non-EU citizens also bring their residence permit",
                "**eVB number** from your car insurer",
                "**IBAN** for vehicle tax. We fill in the SEPA direct debit mandate with you",
                "**Power of attorney** for us, signed in original. We have the form",
              ],
            },
            {
              title: "For a used car, also",
              items: [
                "Registration certificate **part I** (Fahrzeugschein) showing a valid roadworthiness test (HU)",
                "Registration certificate **part II** (Fahrzeugbrief)",
                "The current **plates**, if the car is still registered",
              ],
            },
            {
              title: "For a new car, also",
              items: [
                "Registration certificate part II, if the manufacturer has already issued it",
                "**CoC document** (EC certificate of conformity)",
                "Original purchase contract or invoice if no part II exists yet",
              ],
            },
            {
              title: "For companies and associations, also",
              items: ["Extract from the commercial or association register", "Business registration (Gewerbeanmeldung)"],
            },
          ],
          note: "The office will not register a vehicle if you owe vehicle tax of 5 euros or more, or fees of more than 10 euros from earlier registrations.",
        },
        {
          type: "steps",
          h2: "How it works with us",
          steps: [
            { title: "Pre-check", text: "You send photos of the papers on WhatsApp. We tell you if anything is missing, such as the roadworthiness test or the eVB number." },
            { title: "Drop-off in Kastel", text: `You bring the originals or have them collected. If they reach us by ${cutoff}, we file the same day.` },
            { title: "Registration and plates", text: "We register the vehicle, have the plates embossed and the official seals applied." },
            { title: "Handover", text: "You receive registration certificates part I and II, two sealed plates and the emissions sticker." },
          ],
        },
        {
          type: "table",
          h2: "What the authority charges",
          intro: "For comparison: these are the official fees if you go yourself. Plates are extra in each case.",
          head: ["Case", "City of Wiesbaden fee"],
          rows: [
            ["New vehicle (first registration)", "€30.20 to €60.00"],
            ["Used vehicle, at the office", "€30.00"],
            ["Re-registration to the same keeper", "€23.00 to €50.00"],
            ["Custom plate", "€12.80"],
          ],
          note: "Source: wiesbaden.de, as of 25 November 2026. The office sets the exact amount once it has seen the complete documents.",
        },
        { type: "price", h2: "Our fixed price", keys: ["registration", "customPlate", "pickup"] },
        {
          type: "faq",
          h2: "Common questions about registration",
          items: [
            { q: "Do I need a valid roadworthiness test (HU/TÜV)?", a: "Yes. The office will not register a used car without one. If it has expired you need the test report first. For the drive to the test centre there are [short-term plates](page:shortterm)." },
            { q: "What is an eVB number?", a: "A seven-character code from your car insurer proving that liability cover exists. You usually receive it by email or text right after taking out the policy." },
            { q: "My driving licence is from abroad. Can I still register a car?", a: "Yes. Registration depends on your residence and identity, not on where your licence was issued." },
            { q: "Can I keep the car's current plates?", a: "Often yes, if the vehicle is still registered. A deregistered vehicle gets a new number, and you can choose a [custom plate](page:customplate)." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "reregister",
    kind: "service",
    price: "addressChange",
    related: ["register", "customplate", "akk"],
    updated,
    de: {
      slug: "auto-ummelden-wiesbaden",
      nav: "Auto ummelden",
      teaser: "Halterwechsel, Umzug nach Wiesbaden oder neuer Name in den Papieren.",
      metaTitle: "Auto ummelden in Wiesbaden: Halterwechsel und Umzug ohne Behördengang",
      metaDescription:
        "Auto ummelden in Wiesbaden nach Kauf oder Umzug: welche Unterlagen nötig sind, wann Sie das Kennzeichen behalten dürfen und was die Ummeldung kostet.",
      eyebrow: "Auto ummelden",
      h1: "Auto ummelden nach Kauf oder Umzug",
      lead: "Ummelden heißt bei der Behörde dreierlei: neuer Halter, neue Adresse oder neuer Name. Für jeden Fall gelten andere Unterlagen und andere Kosten.",
      whatsapp: "Hallo, ich möchte ein Auto ummelden (Halterwechsel / Umzug). Hier sind Fotos der Fahrzeugpapiere:",
      blocks: [
        {
          type: "table",
          h2: "Welcher Fall trifft auf Sie zu?",
          head: ["Ihr Fall", "Was die Behörde ändert", "Unser Preis"],
          rows: [
            ["Sie haben ein zugelassenes Auto gekauft", "Halterwechsel, neue Papiere, auf Wunsch neues Kennzeichen", priceText("registration", "de")],
            ["Sie sind nach Wiesbaden gezogen", "Neue Adresse in Teil I, Kennzeichen darf bleiben", priceText("addressChange", "de")],
            ["Sie sind innerhalb Wiesbadens umgezogen", "Neue Adresse in Teil I", priceText("addressChange", "de")],
            ["Ihr Name hat sich geändert", "Neuer Name in Teil I und Teil II", priceText("addressChange", "de")],
          ],
          note: "Preise als Festpreis inklusive Behördengebühren. Beim Halterwechsel sind neue Kennzeichen und Plakette enthalten.",
        },
        {
          type: "prose",
          h2: "Halterwechsel: das gekaufte Auto auf Ihren Namen",
          paras: [
            "Kaufen Sie einen Gebrauchtwagen, der noch auf den Verkäufer zugelassen ist, muss er auf Sie umgeschrieben werden. Bis dahin haftet der Verkäufer weiter für Steuer und Versicherung, deshalb drängen die meisten auf eine schnelle Ummeldung.",
            "Sie brauchen dieselben Unterlagen wie bei einer [Anmeldung](page:register): Ausweis, Teil I mit gültiger HU, Teil II, eVB-Nummer, IBAN und die bisherigen Kennzeichen. Der Kaufvertrag ist für die Behörde nicht zwingend, hilft aber bei Rückfragen.",
          ],
        },
        {
          type: "prose",
          h2: "Umzug: Kennzeichen behalten oder WI nehmen",
          paras: [
            "Ziehen Sie aus einem anderen Zulassungsbezirk nach Wiesbaden, dürfen Sie Ihr bisheriges Kennzeichen behalten. Die Mitnahme ist bundesweit erlaubt. Pflicht ist nur, dass die neue Adresse in die Zulassungsbescheinigung Teil I eingetragen wird.",
            "Wer lieber ein WI-Kennzeichen möchte, bekommt neue Schilder und eine neue Umweltplakette, denn die Plakette muss zum Kennzeichen passen. Das kostet so viel wie ein Halterwechsel.",
          ],
          list: [
            "Für die Adressänderung verlangt die Behörde: Ausweis und Zulassungsbescheinigung Teil I mit gültiger HU",
            "Bei einer Namensänderung zusätzlich: Zulassungsbescheinigung Teil II",
            "Amtliche Gebühr laut Stadt Wiesbaden: 11 bis 50 Euro, je nach Fall",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Zuerst den Wohnsitz ummelden",
          text: "Die Zulassungsbehörde gleicht Ihre Adresse mit dem Melderegister ab. Melden Sie deshalb zuerst Ihren Wohnsitz im Bürgerbüro um und erst danach das Auto. Sonst steht die alte Adresse im System und der Vorgang verzögert sich.",
        },
        {
          type: "faq",
          h2: "Häufige Fragen zur Ummeldung",
          items: [
            { q: "Wie lange habe ich Zeit?", a: "Die Stadt Wiesbaden verlangt die Ummeldung unverzüglich. Praktisch heißt das: in den Tagen nach Kauf oder Umzug, nicht erst nach Wochen." },
            { q: "Der Verkäufer hat das Auto schon abgemeldet. Was nun?", a: "Dann ist es keine Ummeldung, sondern eine [Anmeldung](page:register) eines außer Betrieb gesetzten Fahrzeugs. Die Kennzeichen entfallen, alles andere bleibt gleich." },
            { q: "Brauche ich eine neue eVB-Nummer?", a: "Beim Halterwechsel ja, denn die Versicherung läuft auf den neuen Halter. Bei einer reinen Adressänderung nicht." },
            { q: "Muss ich nach dem Umzug von Mainz nach Kastel ummelden?", a: "Ja. Kastel gehört zu Wiesbaden und damit zu einem anderen Zulassungsbezirk als Mainz. Ihr MZ-Kennzeichen dürfen Sie behalten, die Adresse muss geändert werden. Mehr dazu im Ratgeber [Zulassung in Kastel und Kostheim](page:akk)." },
          ],
        },
      ],
    },
    en: {
      slug: "change-of-keeper-wiesbaden",
      nav: "Transfer a car",
      teaser: "Change of keeper, moving to Wiesbaden or a new name in the papers.",
      metaTitle: "Transfer a car in Wiesbaden: change of keeper or address without the office visit",
      metaDescription:
        "Re-register a car in Wiesbaden after buying or moving: which documents you need, when you may keep your plates and what the transfer costs. English service.",
      eyebrow: "Transfer a car",
      h1: "Transfer a car after buying or moving",
      lead: "At the registration office, \"Ummeldung\" covers three things: a new keeper, a new address or a new name. Each has its own documents and its own cost.",
      whatsapp: "Hello, I would like to transfer a car (change of keeper / move). Here are photos of the vehicle papers:",
      blocks: [
        {
          type: "table",
          h2: "Which case is yours?",
          head: ["Your case", "What the office changes", "Our price"],
          rows: [
            ["You bought a car that is still registered", "Change of keeper, new papers, new plates if you want", priceText("registration", "en")],
            ["You moved to Wiesbaden", "New address in part I, plates may stay", priceText("addressChange", "en")],
            ["You moved within Wiesbaden", "New address in part I", priceText("addressChange", "en")],
            ["Your name changed", "New name in part I and part II", priceText("addressChange", "en")],
          ],
          note: "Fixed prices including authority fees. A change of keeper includes new plates and sticker.",
        },
        {
          type: "prose",
          h2: "Change of keeper: the car you bought, in your name",
          paras: [
            "If you buy a used car that is still registered to the seller, it has to be transferred to you. Until then the seller remains liable for tax and insurance, which is why most sellers push for a quick transfer.",
            "You need the same documents as for a [registration](page:register): ID, part I with a valid roadworthiness test, part II, eVB number, IBAN and the current plates. The purchase contract is not mandatory for the office but helps if questions come up.",
          ],
        },
        {
          type: "prose",
          h2: "Moving: keep your plates or switch to WI",
          paras: [
            "If you move to Wiesbaden from another registration district, you may keep your existing number. That is allowed throughout Germany. What is mandatory is that your new address is entered in registration certificate part I.",
            "If you prefer a WI plate, you get new plates and a new emissions sticker, because the sticker must match the plate. That costs the same as a change of keeper.",
          ],
          list: [
            "For a change of address the office asks for: ID and registration certificate part I with a valid roadworthiness test",
            "For a change of name, additionally: registration certificate part II",
            "Official fee according to the City of Wiesbaden: 11 to 50 euros depending on the case",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Register your new address first",
          text: "The registration office checks your address against the residents' register. Register your new home at the Bürgerbüro first and the car afterwards. Otherwise the old address is still in the system and the transfer is delayed.",
        },
        {
          type: "faq",
          h2: "Common questions about transfers",
          items: [
            { q: "How much time do I have?", a: "The City of Wiesbaden requires the transfer without delay. In practice that means in the days after buying or moving, not weeks later." },
            { q: "The seller already deregistered the car. Now what?", a: "Then it is not a transfer but a [registration](page:register) of a deregistered vehicle. There are no plates to hand in; everything else stays the same." },
            { q: "Do I need a new eVB number?", a: "For a change of keeper yes, because the insurance is in the new keeper's name. For a change of address alone, no." },
            { q: "I moved from Mainz to Kastel. Do I have to re-register?", a: "Yes. Kastel belongs to Wiesbaden and so to a different registration district than Mainz. You may keep your MZ plates, but the address must be changed. See our guide to [registration in Kastel and Kostheim](page:akk)." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "deregister",
    kind: "service",
    price: "deregistration",
    related: ["register", "export", "costs"],
    updated,
    de: {
      slug: "auto-abmelden-wiesbaden",
      nav: "Auto abmelden",
      teaser: "Außerbetriebsetzung nach Verkauf, Unfall oder Stilllegung.",
      metaTitle: "Auto abmelden in Wiesbaden: Unterlagen, Kosten und Abmeldung ohne Termin",
      metaDescription:
        `Auto abmelden in Wiesbaden: Sie brauchen nur Fahrzeugschein und Kennzeichen. Wir erledigen die Außerbetriebsetzung für ${priceText("deregistration", "de")}, oder Sie melden online selbst ab.`,
      eyebrow: "Auto abmelden",
      h1: "Auto abmelden in Wiesbaden",
      lead: "Die Abmeldung ist der einfachste Vorgang bei der Zulassungsbehörde. Sie geben uns Fahrzeugschein und Kennzeichen, wir bringen die Bestätigung zurück.",
      whatsapp: "Hallo, ich möchte ein Auto abmelden. Kennzeichen und Fahrzeugschein habe ich.",
      blocks: [
        {
          type: "checklist",
          h2: "Das brauchen wir von Ihnen",
          groups: [
            {
              items: [
                "Zulassungsbescheinigung **Teil I** (Fahrzeugschein)",
                "Beide **Kennzeichen**. Die Behörde entwertet die Siegel",
                "Nur bei Verschrottung: **Verwertungsnachweis** des Entsorgers und Zulassungsbescheinigung Teil II",
              ],
            },
          ],
          note: "Ein Ausweis oder eine Vollmacht wird für die reine Abmeldung in der Regel nicht verlangt. Wer Schein und Kennzeichen vorlegt, kann abmelden.",
        },
        {
          type: "prose",
          h2: "Was nach der Abmeldung passiert",
          paras: [
            "Mit der Außerbetriebsetzung endet die Pflicht, das Auto zu versichern und Kfz-Steuer zu zahlen. Die Zulassungsbehörde meldet die Abmeldung selbst an Ihre Versicherung und an den Zoll. Zu viel gezahlte Steuer erstattet das Hauptzollamt ohne Antrag.",
            "Das abgemeldete Auto darf nicht mehr auf öffentlichen Straßen stehen, auch nicht geparkt am Straßenrand. Es gehört auf ein Privatgrundstück, bis es verkauft, abgeholt oder wieder zugelassen ist.",
            "Möchten Sie Ihr Kennzeichen für das nächste Auto behalten, reserviert die Behörde es bei der Abmeldung gegen 2,60 Euro. Sagen Sie uns das bei der Abgabe.",
          ],
        },
        {
          type: "table",
          h2: "Selbst abmelden oder abgeben?",
          intro: "Bei der Abmeldung lohnt sich der Vergleich besonders, weil sie online sehr günstig ist.",
          head: ["Weg", "Kosten", "Voraussetzung"],
          rows: [
            ["Online über das Portal der Stadt", "2,70 €", "Erstzulassung nach dem 1. Januar 2015, Sicherheitscodes auf Schein und Plaketten freilegen, Zahlung per PayPal"],
            ["Persönlich bei der Behörde", "15,90 bis 67,10 €", "Online-Termin in der Stielstraße"],
            ["Über uns", priceText("deregistration", "de"), "Schein und Kennzeichen bei uns abgeben"],
          ],
          note: "Amtliche Gebühren laut wiesbaden.de, Stand 25. November 2026. Bei älteren Fahrzeugen ohne Sicherheitscode ist die Online-Abmeldung nicht möglich.",
        },
        {
          type: "callout",
          tone: "warn",
          title: "Auto verkauft, aber noch angemeldet?",
          text: "Solange das Auto auf Sie zugelassen ist, bekommen Sie Steuerbescheide und Bußgelder. Fährt der Käufer ohne Ummeldung weiter, melden Sie den Verkauf der Zulassungsbehörde und Ihrer Versicherung, mit Kaufvertrag und Datum der Übergabe.",
        },
        {
          type: "faq",
          h2: "Häufige Fragen zur Abmeldung",
          items: [
            { q: "Ein Kennzeichen fehlt. Kann ich trotzdem abmelden?", a: "Ja, aber Sie müssen den Verlust erklären. Bei Diebstahl verlangt die Behörde eine Anzeige bei der Polizei. Das verursacht zusätzliche Gebühren, siehe [Papiere oder Kennzeichen verloren](page:lost)." },
            { q: "Wie lange bleibt ein abgemeldetes Auto abgemeldet?", a: "Unbegrenzt. Nach sieben Jahren werden die Fahrzeugdaten beim Kraftfahrt-Bundesamt gelöscht, dann braucht die Wiederzulassung zusätzliche Nachweise." },
            { q: "Bekomme ich eine Bestätigung?", a: "Ja. Die Behörde vermerkt die Außerbetriebsetzung auf der Zulassungsbescheinigung Teil I. Die erhalten Sie zusammen mit den entwerteten Kennzeichen zurück." },
          ],
        },
      ],
    },
    en: {
      slug: "deregister-car-wiesbaden",
      nav: "Deregister a car",
      teaser: "Taking a vehicle off the road after a sale, accident or lay-up.",
      metaTitle: "Deregister a car in Wiesbaden: documents, costs, no appointment",
      metaDescription:
        `Deregistering a car in Wiesbaden takes only the registration certificate and the plates. We do it for ${priceText("deregistration", "en")}, or you can deregister online yourself. Here is how.`,
      eyebrow: "Deregister a car",
      h1: "Deregister a car in Wiesbaden",
      lead: "Deregistration is the simplest job at the registration office. You give us the registration certificate and the plates, and we bring back the confirmation.",
      whatsapp: "Hello, I would like to deregister a car. I have the plates and the registration certificate.",
      blocks: [
        {
          type: "checklist",
          h2: "What we need from you",
          groups: [
            {
              items: [
                "Registration certificate **part I** (Fahrzeugschein)",
                "Both **plates**. The office removes the seals",
                "Only if the car is scrapped: the **certificate of destruction** from the recycler and registration certificate part II",
              ],
            },
          ],
          note: "ID or a power of attorney is not normally required for a simple deregistration. Whoever presents the certificate and plates can deregister.",
        },
        {
          type: "prose",
          h2: "What happens afterwards",
          paras: [
            "Once the vehicle is deregistered you no longer have to insure it or pay vehicle tax. The registration office itself notifies your insurer and customs. Overpaid tax is refunded by the customs office without an application.",
            "A deregistered car may not stand on public roads, not even parked at the kerb. It belongs on private property until it is sold, collected or registered again.",
            "If you want to keep your number for your next car, the office reserves it at deregistration for 2.60 euros. Tell us when you hand in the plates.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Leaving Germany?",
          text: "If you are moving abroad and taking the car with you, deregistration is usually not the right step, because you may not drive on deregistered plates. You need [export plates](page:export) instead, or you deregister after the car has arrived and been registered in the new country.",
        },
        {
          type: "table",
          h2: "Do it yourself or hand it over?",
          intro: "For deregistration the comparison is worth making, because the online route is very cheap.",
          head: ["Route", "Cost", "Requirement"],
          rows: [
            ["Online via the city's portal", "€2.70", "First registered after 1 January 2015, scratch off the security codes on certificate and seals, pay by PayPal"],
            ["In person at the office", "€15.90 to €67.10", "Online appointment at Stielstraße"],
            ["Through us", priceText("deregistration", "en"), "Hand in certificate and plates"],
          ],
          note: "Official fees according to wiesbaden.de, as of 25 November 2026. Older vehicles without a security code cannot be deregistered online.",
        },
        {
          type: "faq",
          h2: "Common questions about deregistration",
          items: [
            { q: "One plate is missing. Can I still deregister?", a: "Yes, but you have to explain the loss. If it was stolen the office asks for a police report. This causes extra fees, see [lost papers or plates](page:lost)." },
            { q: "I sold the car but it is still registered to me.", a: "As long as it is in your name you receive the tax bills and fines. If the buyer keeps driving without transferring it, report the sale to the registration office and your insurer with the contract and handover date." },
            { q: "Do I get a confirmation?", a: "Yes. The office notes the deregistration on registration certificate part I, which you get back together with the unsealed plates." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "express",
    kind: "service",
    related: ["register", "business", "office"],
    updated,
    de: {
      slug: "express-zulassung-wiesbaden",
      nav: "Express und Abholservice",
      teaser: "Am selben Tag zugelassen, auf Wunsch mit Abholung und Lieferung.",
      metaTitle: "Express-Zulassung Wiesbaden am selben Tag | mit Abhol- und Bringservice",
      metaDescription:
        "Zulassung am selben Tag in Wiesbaden: Unterlagen vormittags abgeben, nachmittags Kennzeichen abholen. Mit Abhol- und Bringservice in Wiesbaden, AKK und Mainz.",
      eyebrow: "Express und Abholservice",
      h1: "Vormittags abgeben, nachmittags fahren",
      lead: `Sind Ihre Unterlagen bis ${cutoff} Uhr vollständig bei uns, reichen wir am selben Tag bei der Zulassungsbehörde ein. Wer keine Zeit hat vorbeizukommen, lässt abholen und liefern.`,
      whatsapp: "Hallo, ich brauche eine Zulassung möglichst heute. Hier sind Fotos meiner Unterlagen:",
      blocks: [
        {
          type: "prose",
          h2: "Warum es über einen Zulassungsdienst schneller geht",
          paras: [
            "Privatpersonen brauchen für die persönliche Vorsprache bei der Zulassungsbehörde Wiesbaden einen Online-Termin. Für gewerbliche Zulassungsdienste gilt ein eigener Weg: Wir geben die Vorgänge morgens gesammelt ab oder werden direkt am Händlerschalter bedient.",
            "Das ist kein Sonderrecht, sondern die Arbeitsteilung, die die Stadt selbst vorsieht. Sie hat aber eine Grenze: Die Behörde weist darauf hin, dass sie die Abholung am selben Tag nicht garantieren kann, wenn sehr viele Anträge eingehen. In der Regel klappt es. Wenn nicht, erfahren Sie es von uns am Vormittag und nicht erst am Abend.",
          ],
        },
        {
          type: "steps",
          h2: "Ein typischer Express-Tag",
          steps: [
            { title: "Am Vorabend: Vorab-Check", text: "Sie schicken Fotos der Papiere per WhatsApp. Fehlt die eVB-Nummer oder die HU, haben Sie noch Zeit, sie zu besorgen." },
            { title: `Bis ${cutoff} Uhr: Abgabe oder Abholung`, text: "Sie bringen die Originale nach Kastel, oder unser Fahrer holt sie bei Ihnen zu Hause oder im Büro ab." },
            { title: "Vormittags: Zulassungsbehörde", text: "Wir reichen ein, zahlen die Gebühren und lassen die Kennzeichen prägen und siegeln." },
            { title: "Nachmittags: Übergabe", text: "Sie holen Papiere und Kennzeichen ab oder bekommen sie gebracht. Wir schreiben Ihnen, sobald alles fertig ist." },
          ],
        },
        {
          type: "prose",
          h2: "Abhol- und Bringservice",
          paras: [
            "Der Abholservice ist für alle gedacht, die tagsüber nicht wegkönnen: Schichtarbeit, kleine Kinder, kein zweites Auto. Sie übergeben die Unterlagen an der Haustür, unterschreiben Vollmacht und SEPA-Mandat und bekommen alles zurückgebracht.",
            "Wir fahren im gesamten Wiesbadener Stadtgebiet, in Mainz-Kastel, Kostheim und Amöneburg sowie in Mainz. Für Orte außerhalb fragen Sie bitte kurz an.",
          ],
          list: [
            "Originale immer persönlich übergeben, nie in den Briefkasten legen. Der Fahrzeugbrief ist ein Wertpapier",
            "Kennzeichen des noch zugelassenen Autos gleich mitgeben",
          ],
        },
        { type: "price", h2: "Preise", keys: ["registration", "pickup"], note: "Die Express-Bearbeitung selbst kostet keinen Aufpreis. Der Abholservice wird zusätzlich zum Preis des Vorgangs berechnet." },
        {
          type: "faq",
          h2: "Häufige Fragen zum Express-Service",
          items: [
            { q: "Was, wenn ich erst mittags Zeit habe?", a: "Dann reichen wir am nächsten Werktag morgens ein. Sie können die Unterlagen trotzdem schon am Nachmittag abgeben." },
            { q: "Geht Express auch für Firmenfahrzeuge?", a: "Ja, wenn Handelsregisterauszug, Gewerbeanmeldung und eine Vollmacht der zeichnungsberechtigten Person vorliegen. Firmenzulassungen prüft die Behörde gründlicher, planen Sie den Vorab-Check ein." },
            { q: "Kann ich am Samstag abgeben?", a: "Die Abgabe sprechen wir per WhatsApp ab. Eingereicht wird am nächsten Werktag, an dem die Behörde geöffnet hat." },
          ],
        },
      ],
    },
    en: {
      slug: "express-registration-wiesbaden",
      nav: "Express and pickup",
      teaser: "Registered the same day, with collection and delivery if you want.",
      metaTitle: "Same-day car registration in Wiesbaden | with pickup and delivery",
      metaDescription:
        "Same-day registration in Wiesbaden: hand in documents in the morning, collect plates in the afternoon. Pickup and delivery in Wiesbaden, Kastel, Kostheim and Mainz.",
      eyebrow: "Express and pickup",
      h1: "Hand in the morning, drive in the afternoon",
      lead: `If your complete documents reach us by ${cutoff}, we file at the registration office the same day. If you cannot come by, we collect and deliver.`,
      whatsapp: "Hello, I need a registration as soon as possible, ideally today. Here are photos of my documents:",
      blocks: [
        {
          type: "prose",
          h2: "Why an agent is faster",
          paras: [
            "Private individuals need an online appointment to be seen in person at the Wiesbaden registration office. Commercial registration services use a separate channel: we hand in our cases together in the morning or are served directly at the trade counter.",
            "This is not a privilege but the division of labour the city itself provides for. It has a limit: the office points out that it cannot guarantee same-day collection when a very large number of applications arrive. It usually works. If it does not, you hear from us in the morning rather than in the evening.",
          ],
        },
        {
          type: "steps",
          h2: "A typical express day",
          steps: [
            { title: "The evening before: pre-check", text: "You send photos of the papers on WhatsApp. If the eVB number or the roadworthiness test is missing, you still have time to get it." },
            { title: `By ${cutoff}: drop-off or pickup`, text: "You bring the originals to Kastel, or our driver collects them from your home or office." },
            { title: "Morning: registration office", text: "We file, pay the fees and have the plates embossed and sealed." },
            { title: "Afternoon: handover", text: "You collect papers and plates or have them delivered. We message you as soon as everything is ready." },
          ],
        },
        {
          type: "prose",
          h2: "Pickup and delivery",
          paras: [
            "The pickup service is for anyone who cannot get away during the day: shift work, small children, no second car. You hand over the documents at your door, sign the power of attorney and SEPA mandate, and get everything brought back.",
            "We drive throughout Wiesbaden, in Mainz-Kastel, Kostheim and Amöneburg, and in Mainz. For places further out, please ask.",
          ],
          list: [
            "Always hand originals over in person, never leave them in a letterbox. The part II certificate is a title document",
            "Give us the plates of a still-registered car at the same time",
          ],
        },
        { type: "price", h2: "Prices", keys: ["registration", "pickup"], note: "Express processing itself has no surcharge. Pickup is charged on top of the price of the job." },
        {
          type: "faq",
          h2: "Common questions about express service",
          items: [
            { q: "What if I only have time at midday?", a: "Then we file the next working morning. You can still drop the documents off in the afternoon." },
            { q: "Does express work for company vehicles?", a: "Yes, with the commercial register extract, business registration and a power of attorney from an authorised signatory. The office checks company registrations more closely, so allow time for the pre-check." },
            { q: "Can I drop off on a Saturday?", a: "We arrange drop-off on WhatsApp. Filing happens on the next working day the office is open." },
          ],
        },
      ],
    },
  },
];
