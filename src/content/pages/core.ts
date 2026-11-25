import { site } from "@/lib/site";
import type { PageDoc } from "../types";

const updated = "2026-11-25";

export const corePages: PageDoc[] = [
  {
    id: "home",
    kind: "core",
    updated,
    de: {
      slug: "",
      nav: "Startseite",
      metaTitle: "Zulassungsdienst Mainz-Kastel | Kfz-Zulassung für Wiesbaden ohne Termin",
      metaDescription:
        "Auto anmelden, ummelden oder abmelden in Wiesbaden: Wir übernehmen den Behördengang. Festpreis mit Kennzeichen, Abholservice, meist am selben Tag. Per WhatsApp.",
      eyebrow: "",
      h1: "",
      lead: "",
      whatsapp: "Hallo, ich möchte ein Fahrzeug zulassen.",
      blocks: [],
    },
    en: {
      slug: "",
      nav: "Home",
      metaTitle: "Car registration service in Wiesbaden and Mainz-Kastel | No appointment",
      metaDescription:
        "Register, transfer or deregister a car in Wiesbaden: we handle the registration office for you. Fixed price with plates, pickup service, usually same day. In English.",
      eyebrow: "",
      h1: "",
      lead: "",
      whatsapp: "Hello, I would like to register a vehicle.",
      blocks: [],
    },
  },
  {
    id: "services",
    kind: "core",
    updated,
    de: {
      slug: "leistungen",
      nav: "Leistungen",
      metaTitle: "Leistungen: Zulassung, Ummeldung, Abmeldung, Kennzeichen | Wiesbaden",
      metaDescription:
        "Alle Leistungen unseres Zulassungsdienstes für Wiesbaden und Mainz-Kastel im Überblick: von der Neuzulassung über Kurzzeitkennzeichen bis zum Händlerservice.",
      eyebrow: "Leistungen",
      h1: "Alles rund um Zulassung und Kennzeichen",
      lead: "Zehn Vorgänge, die wir täglich bei der Zulassungsbehörde Wiesbaden erledigen. Wählen Sie Ihren Fall, dort stehen Unterlagen, Ablauf und Preis.",
      whatsapp: "Hallo, ich habe eine Frage zu Ihren Leistungen.",
      blocks: [
        {
          type: "prose",
          h2: "Ihr Fall ist nicht dabei?",
          paras: [
            "Saisonkennzeichen, H-Kennzeichen für Oldtimer, E-Kennzeichen, Tageszulassung, technische Änderungen eintragen oder ein Halterwechsel im Erbfall: Auch das erledigen wir. Die Behörde verlangt dafür jeweils eigene Nachweise, zum Beispiel ein Oldtimer-Gutachten nach § 23 StVZO für das H-Kennzeichen.",
            "Beschreiben Sie uns kurz per WhatsApp, worum es geht. Sie bekommen eine Liste der Unterlagen und einen Preis, bevor Sie sich auf den Weg machen.",
          ],
        },
      ],
    },
    en: {
      slug: "services",
      nav: "Services",
      metaTitle: "Services: registration, transfer, deregistration, plates | Wiesbaden",
      metaDescription:
        "All services of our vehicle registration agency for Wiesbaden and Mainz-Kastel at a glance, from first registration and short-term plates to dealer service.",
      eyebrow: "Services",
      h1: "Everything around registration and plates",
      lead: "Ten jobs we handle at the Wiesbaden registration office every day. Pick your case to see documents, process and price.",
      whatsapp: "Hello, I have a question about your services.",
      blocks: [
        {
          type: "prose",
          h2: "Your case is not listed?",
          paras: [
            "Seasonal plates, H plates for classic cars, E plates, one-day registrations, entering technical modifications or a change of keeper after an inheritance: we do those too. The authority asks for specific proof each time, for example a classic car report under § 23 StVZO for an H plate.",
            "Tell us briefly on WhatsApp what you need. You get a list of documents and a price before you set off.",
          ],
        },
      ],
    },
  },
  {
    id: "prices",
    kind: "core",
    updated,
    related: ["costs", "express", "documents"],
    de: {
      slug: "preise",
      nav: "Preise",
      metaTitle: "Preise Zulassungsdienst Wiesbaden: Festpreise inkl. Gebühren und Kennzeichen",
      metaDescription:
        "Was kostet der Zulassungsdienst in Wiesbaden? Unsere Festpreise für Zulassung, Ummeldung, Abmeldung, Kurzzeit- und Ausfuhrkennzeichen, inklusive Behördengebühren.",
      eyebrow: "Preise",
      h1: "Festpreise, in denen alles steckt",
      lead: "Sie zahlen einen Betrag. Die Gebühren der Zulassungsbehörde, die Kennzeichen und die Plakette sind darin enthalten, soweit es beim jeweiligen Preis steht.",
      whatsapp: "Hallo, ich hätte gern einen Festpreis für folgenden Vorgang:",
      blocks: [
        {
          type: "price",
          h2: "Zulassung und Ummeldung",
          keys: ["registration", "addressChange", "import"],
          note: "Die Behördengebühr schwankt je nach Fall. Liegt sie in Ihrem Fall höher als üblich, sagen wir Ihnen das vor der Abgabe.",
        },
        { type: "price", h2: "Abmeldung und Ersatz", keys: ["deregistration", "replacement"] },
        {
          type: "price",
          h2: "Besondere Kennzeichen",
          keys: ["shortTerm", "export", "customPlate"],
          note: "Bei Kurzzeit- und Ausfuhrkennzeichen kommt die Versicherung hinzu. Die schließen Sie direkt bei einem Versicherer ab.",
        },
        { type: "price", h2: "Extras", keys: ["pickup", "platePair", "sticker"] },
        {
          type: "prose",
          h2: "Wie sich der Preis zusammensetzt",
          paras: [
            "In jedem Festpreis stecken drei Dinge: die Gebühr der Zulassungsbehörde Wiesbaden, die Kennzeichen samt Plakette und unsere Arbeit. Bei einer Zulassung verlangt die Behörde selbst je nach Fall rund 30 bis 60 Euro, ein Schilderpaar kostet im Handel etwa 20 bis 30 Euro. Der Rest ist der Weg, die Wartezeit und die Prüfung Ihrer Unterlagen.",
            "Wie sich die amtlichen Gebühren im Einzelnen zusammensetzen, steht im Ratgeber [Was kostet die Kfz-Zulassung in Wiesbaden?](page:costs)",
          ],
        },
        {
          type: "faq",
          h2: "Fragen zu den Preisen",
          items: [
            { q: "Wann und wie bezahle ich?", a: "Bei der Abgabe der Unterlagen oder bei der Übergabe von Papieren und Kennzeichen. Die Zahlungsarten nennen wir Ihnen bei der Anfrage." },
            { q: "Kostet Express extra?", a: `Nein. Wenn die Unterlagen bis ${site.expressCutoff} Uhr vollständig bei uns sind, reichen wir am selben Tag ein. Dafür gibt es keinen Aufpreis.` },
            { q: "Was, wenn die Zulassung nicht klappt?", a: "Scheitert der Vorgang an fehlenden Unterlagen, Steuerrückständen oder einer abgelaufenen HU, sagen wir Ihnen sofort, woran es liegt. Meist lässt es sich am nächsten Tag nachholen. Deshalb prüfen wir vorher per WhatsApp." },
            { q: "Gibt es Preise für Händler?", a: "Ja. Für Autohäuser und Fuhrparks rechnen wir nach Stückzahl ab. Details stehen auf der Seite [Händler und Firmenkunden](page:business)." },
          ],
        },
      ],
    },
    en: {
      slug: "prices",
      nav: "Prices",
      metaTitle: "Prices for car registration service in Wiesbaden: fees and plates included",
      metaDescription:
        "What does a registration agent cost in Wiesbaden? Our fixed prices for registration, transfer, deregistration, short-term and export plates, authority fees included.",
      eyebrow: "Prices",
      h1: "Fixed prices with everything in them",
      lead: "You pay one amount. The registration office fees, the plates and the sticker are included wherever the price says so.",
      whatsapp: "Hello, I would like a fixed price for the following:",
      blocks: [
        {
          type: "price",
          h2: "Registration and transfer",
          keys: ["registration", "addressChange", "import"],
          note: "The authority fee varies by case. If yours is higher than usual, we tell you before you hand anything in.",
        },
        { type: "price", h2: "Deregistration and replacements", keys: ["deregistration", "replacement"] },
        {
          type: "price",
          h2: "Special plates",
          keys: ["shortTerm", "export", "customPlate"],
          note: "Short-term and export plates need their own insurance, which you take out directly with an insurer.",
        },
        { type: "price", h2: "Extras", keys: ["pickup", "platePair", "sticker"] },
        {
          type: "prose",
          h2: "What the price is made of",
          paras: [
            "Each fixed price contains three things: the fee charged by the Wiesbaden registration office, the plates with sticker, and our work. For a registration the authority itself charges roughly 30 to 60 euros depending on the case, and a pair of plates costs about 20 to 30 euros in a shop. The rest is the trip, the waiting and the check of your documents.",
            "The official fees are broken down in our guide [What does car registration cost in Wiesbaden?](page:costs)",
          ],
        },
        {
          type: "faq",
          h2: "Questions about prices",
          items: [
            { q: "When and how do I pay?", a: "When you hand in your documents or when you receive your papers and plates. We tell you the payment options when you ask." },
            { q: "Does express cost extra?", a: `No. If your complete documents reach us by ${site.expressCutoff}, we file the same day at no surcharge.` },
            { q: "What if the registration fails?", a: "If it fails because of missing documents, unpaid vehicle tax or an expired roadworthiness test, we tell you straight away what the problem is. It can usually be fixed the next day. That is why we check on WhatsApp first." },
            { q: "Are there dealer prices?", a: "Yes. Dealerships and fleets are billed by volume. See [dealers and fleets](page:business)." },
          ],
        },
      ],
    },
  },
  {
    id: "contact",
    kind: "core",
    updated,
    related: ["documents", "prices", "akk"],
    de: {
      slug: "kontakt",
      nav: "Kontakt",
      metaTitle: "Kontakt und Anfahrt | Zulassungsdienst Mainz-Kastel, Wiesbadener Str. 93",
      metaDescription:
        "So erreichen Sie den Zulassungsdienst in Mainz-Kastel: per WhatsApp oder Telefon unter 0178 8427418. Adresse: Wiesbadener Str. 93, 55252 Wiesbaden.",
      eyebrow: "Kontakt",
      h1: "Schreiben Sie uns oder rufen Sie an",
      lead: "Ein Formular gibt es bei uns nicht. Eine WhatsApp-Nachricht mit einem Foto Ihrer Papiere klärt in zwei Minuten mehr als jedes Formular.",
      whatsapp: "Hallo, ich möchte ein Fahrzeug zulassen. Hier sind Fotos meiner Unterlagen:",
      blocks: [
        {
          type: "steps",
          h2: "Was in die erste Nachricht gehört",
          intro: "Je genauer die erste Nachricht, desto schneller steht der Preis.",
          steps: [
            { title: "Was soll passieren?", text: "Anmelden, ummelden, abmelden, Kurzzeitkennzeichen oder etwas anderes. Ein Satz genügt." },
            { title: "Fotos der Papiere", text: "Zulassungsbescheinigung Teil I (Fahrzeugschein) und Teil II (Fahrzeugbrief), jeweils komplett und lesbar." },
            { title: "Wo sind Sie gemeldet?", text: "Wir arbeiten mit der Zulassungsbehörde Wiesbaden. Zuständig ist sie, wenn Ihr Hauptwohnsitz in Wiesbaden liegt, also auch in Kastel, Kostheim oder Amöneburg." },
          ],
        },
        {
          type: "prose",
          h2: "Anfahrt",
          paras: [
            "Sie finden uns an der Wiesbadener Straße 93 in Mainz-Kastel, an der Verbindung zwischen der Theodor-Heuss-Brücke und Wiesbaden-Biebrich. Aus der Mainzer Innenstadt sind es über die Brücke wenige Minuten, aus Kostheim und Amöneburg ebenso.",
            "Wenn Sie nicht selbst kommen möchten, holen wir die Unterlagen in Wiesbaden, den AKK-Stadtteilen und in Mainz ab. Mehr dazu unter [Express und Abholservice](page:express).",
          ],
        },
      ],
    },
    en: {
      slug: "contact",
      nav: "Contact",
      metaTitle: "Contact and directions | Registration service Mainz-Kastel, Wiesbadener Str. 93",
      metaDescription:
        "How to reach the vehicle registration service in Mainz-Kastel: WhatsApp or phone on 0178 8427418. Address: Wiesbadener Str. 93, 55252 Wiesbaden. English spoken.",
      eyebrow: "Contact",
      h1: "Message us or call",
      lead: "We have no contact form. A WhatsApp message with a photo of your papers settles more in two minutes than any form.",
      whatsapp: "Hello, I would like to register a vehicle. Here are photos of my documents:",
      blocks: [
        {
          type: "steps",
          h2: "What to put in your first message",
          intro: "The more precise the first message, the sooner you have a price.",
          steps: [
            { title: "What should happen?", text: "Register, transfer, deregister, short-term plates or something else. One sentence is enough." },
            { title: "Photos of the papers", text: "Registration certificate part I (the small folded one) and part II (the A4 title document), complete and readable." },
            { title: "Where are you registered as a resident?", text: "We work with the Wiesbaden registration office. It is responsible if your main residence is in Wiesbaden, which includes Kastel, Kostheim and Amöneburg." },
          ],
        },
        {
          type: "prose",
          h2: "Getting here",
          paras: [
            "We are at Wiesbadener Straße 93 in Mainz-Kastel, on the road between the Theodor Heuss Bridge and Wiesbaden-Biebrich. From Mainz city centre it is a few minutes across the bridge, and the same from Kostheim and Amöneburg.",
            "If you would rather not come in person, we collect documents in Wiesbaden, the districts across the river and in Mainz. See [express and pickup](page:express).",
          ],
        },
      ],
    },
  },
];
