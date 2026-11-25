import { priceText } from "@/lib/prices";
import type { PageDoc } from "../types";

const updated = "2026-11-25";

export const guidePages: PageDoc[] = [
  /* ------------------------------------------------------------------ */
  {
    id: "office",
    kind: "guide",
    related: ["akk", "costs", "express"],
    updated,
    de: {
      slug: "zulassungsstelle-wiesbaden",
      nav: "Zulassungsstelle Wiesbaden",
      teaser: "Adresse, Termin, Erreichbarkeit und Zahlungsarten der Behörde in der Stielstraße.",
      metaTitle: "Zulassungsstelle Wiesbaden: Adresse, Termin, Telefon und Anfahrt (Stielstraße 3)",
      metaDescription:
        "Kfz-Zulassungsstelle Wiesbaden in der Stielstraße 3: Termin online buchen, telefonische Erreichbarkeit, Buslinien, Zahlungsarten und wann Sie gar nicht hinmüssen.",
      eyebrow: "Ratgeber",
      h1: "Zulassungsstelle Wiesbaden: alles Wichtige auf einen Blick",
      lead: "Die Zulassungsbehörde der Landeshauptstadt sitzt in der Stielstraße in Schierstein. Wer persönlich hingeht, braucht einen Termin. Hier steht, wie Sie ihn bekommen und welche Wege es sonst gibt.",
      whatsapp: "Hallo, ich habe eine Frage zur Zulassungsstelle Wiesbaden bzw. möchte den Behördengang abgeben.",
      blocks: [
        {
          type: "facts",
          h2: "Adresse und Erreichbarkeit",
          items: [
            { label: "Anschrift", value: "Zulassungsbehörde, Stielstraße 3, 65201 Wiesbaden" },
            { label: "Telefon", value: "0611 31-8342 und 0611 31-3966" },
            { label: "Telefonisch erreichbar", value: "Montag bis Donnerstag 9 bis 15 Uhr, Freitag 9 bis 13 Uhr" },
            { label: "Persönliche Vorsprache", value: "Nur mit Termin über die Online-Terminreservierung der Stadt" },
            { label: "Bus", value: "Linien 5, 23 und 45" },
            { label: "Barrierefreiheit", value: "Barrierefreier Zugang und barrierefreies WC vorhanden" },
          ],
        },
        {
          type: "prose",
          h2: "Termin: so funktioniert die Reservierung",
          paras: [
            "Die Stadt Wiesbaden vergibt Termine für die Zulassungsbehörde ausschließlich online. Sie wählen den Vorgang, bekommen freie Zeitfenster angezeigt und erhalten eine Bestätigung per E-Mail. Ohne Termin werden Privatpersonen am Schalter nicht bedient.",
            "Seit dem 21. Mai 2024 ist dieser Kalender Privatkunden vorbehalten, die ihre eigenen Angelegenheiten erledigen. Händler und Zulassungsdienste nutzen eigene Abgabewege. Das ist der Grund, warum wir ohne Termin einreichen können.",
            "Die aktuellen Öffnungszeiten für Terminkunden veröffentlicht die Stadt zusammen mit der Terminbuchung auf [wiesbaden.de](https://www.wiesbaden.de/vv/oe/07/34/Zulassungsbehoerde). Dort stehen auch kurzfristige Schließungen, etwa bei Systemumstellungen.",
          ],
        },
        {
          type: "table",
          h2: "Drei Wege zur Zulassung in Wiesbaden",
          head: ["Weg", "Für wen geeignet", "Was Sie brauchen"],
          rows: [
            ["Persönlich mit Termin", "Wer Zeit hat und alle Unterlagen sicher beisammen", "Online-Termin, Originale, Karte oder Bargeld"],
            ["Online über i-Kfz", "Wer einen Ausweis mit Online-Funktion hat und ein Fahrzeug mit Sicherheitscodes", "Personalausweis mit eID oder elektronischer Aufenthaltstitel, PayPal"],
            ["Über einen Zulassungsdienst", "Wer keinen Termin findet, tagsüber arbeitet oder unsicher bei den Unterlagen ist", "Vollmacht und die Originale"],
          ],
          note: "Die Online-Zulassung ist die günstigste Variante. Sie scheitert in der Praxis oft an der nicht freigeschalteten Ausweisfunktion oder an älteren Papieren ohne Sicherheitscode.",
        },
        {
          type: "prose",
          h2: "Bezahlen und häufige Stolperstellen",
          paras: [
            "Vor Ort können Sie mit EC-Karte, Kreditkarte oder bar zahlen. Online-Vorgänge werden per PayPal bezahlt.",
            "Drei Dinge führen am häufigsten dazu, dass ein Termin ergebnislos endet: eine abgelaufene Hauptuntersuchung, offene Kfz-Steuer ab 5 Euro und offene Gebühren aus früheren Zulassungen. In Hessen genügen schon mehr als 10 Euro Rückstand, damit die Behörde die Zulassung verweigert. Prüfen Sie das vorher, sonst brauchen Sie einen zweiten Termin.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Mit Reisepass? Meldebescheinigung mitbringen",
          text: "Wer sich mit dem Reisepass statt mit dem Personalausweis ausweist, braucht zusätzlich eine Meldebescheinigung, die nicht älter als drei Monate ist. Im Pass steht keine Adresse, und die Behörde muss den Wohnsitz prüfen.",
        },
        {
          type: "faq",
          h2: "Häufige Fragen zur Zulassungsstelle Wiesbaden",
          items: [
            { q: "Gibt es eine Außenstelle in Mainz-Kastel?", a: "Nein. Für das gesamte Stadtgebiet einschließlich Kastel, Kostheim und Amöneburg ist die Behörde in der Stielstraße zuständig." },
            { q: "Kann ich ohne Termin hingehen?", a: "Als Privatperson nein. Fertige Dokumente abholen oder etwas in den Postkasten werfen geht, eine Bearbeitung am Schalter nicht." },
            { q: "Wo bekomme ich die Kennzeichen?", a: "Bei Schilderprägern in der Nähe der Behörde, oder Sie bringen sie mit. Über uns sind die Schilder im Festpreis enthalten." },
            { q: "Wer ist zuständig, wenn ich in Mainz wohne?", a: "Die Zulassungsstelle der Stadt Mainz. Maßgeblich ist der Hauptwohnsitz, nicht der Standort des Autos." },
          ],
        },
      ],
    },
    en: {
      slug: "vehicle-registration-office-wiesbaden",
      nav: "Registration office Wiesbaden",
      teaser: "Address, appointments, phone hours and payment at the office on Stielstraße.",
      metaTitle: "Vehicle registration office Wiesbaden (Zulassungsstelle): address, appointments, phone",
      metaDescription:
        "The Wiesbaden vehicle registration office at Stielstraße 3: how to book an appointment, phone hours, buses, payment methods, and when you do not need to go at all.",
      eyebrow: "Guide",
      h1: "Wiesbaden vehicle registration office: the essentials",
      lead: "The city's registration office (Zulassungsbehörde) is on Stielstraße in Schierstein. If you go in person you need an appointment. Here is how to get one and what the alternatives are.",
      whatsapp: "Hello, I have a question about the Wiesbaden registration office, or I would like you to handle the visit.",
      blocks: [
        {
          type: "facts",
          h2: "Address and how to reach them",
          items: [
            { label: "Address", value: "Zulassungsbehörde, Stielstraße 3, 65201 Wiesbaden" },
            { label: "Phone", value: "0611 31-8342 and 0611 31-3966" },
            { label: "Phone hours", value: "Monday to Thursday 9:00 to 15:00, Friday 9:00 to 13:00" },
            { label: "Visits in person", value: "Only with an appointment from the city's online booking system" },
            { label: "Bus", value: "Lines 5, 23 and 45" },
            { label: "Accessibility", value: "Step-free access and accessible toilet" },
          ],
        },
        {
          type: "prose",
          h2: "Appointments: how booking works",
          paras: [
            "The City of Wiesbaden gives out appointments for the registration office online only. You choose the service, see the free slots and receive a confirmation by email. Private individuals are not served at the counter without one.",
            "Since 21 May 2024 this calendar has been reserved for private customers handling their own affairs. Dealers and registration services use separate channels, which is why we can file without an appointment.",
            "The city publishes current opening hours and short-notice closures, for example during system changes, on [wiesbaden.de](https://www.wiesbaden.de/en/vv/oe/07/34/Zulassungsbehoerde). The site has an English version.",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Language at the counter",
          text: "The office works in German, and the forms are in German. If you are not comfortable handling an official appointment in German, bring someone who is, or let a registration service do it under a power of attorney.",
        },
        {
          type: "table",
          h2: "Three ways to register in Wiesbaden",
          head: ["Route", "Suits you if", "What you need"],
          rows: [
            ["In person with an appointment", "You have time and are sure your documents are complete", "Online appointment, originals, card or cash"],
            ["Online via i-Kfz", "You have an ID with the online function and a vehicle with security codes", "German ID card with eID or electronic residence permit, PayPal"],
            ["Through a registration service", "You cannot find a slot, work during the day or are unsure about the paperwork", "Power of attorney and the originals"],
          ],
          note: "Online registration is the cheapest option. In practice it often fails because the ID's online function is not activated or the papers are older and have no security code.",
        },
        {
          type: "prose",
          h2: "Paying, and what commonly goes wrong",
          paras: [
            "At the office you can pay by debit card, credit card or cash. Online cases are paid by PayPal.",
            "Three things most often end an appointment without a result: an expired roadworthiness test, unpaid vehicle tax of 5 euros or more, and unpaid fees from earlier registrations. In Hesse arrears of more than 10 euros are enough for the office to refuse. Check beforehand, or you will need a second appointment.",
            "If you identify yourself with a passport instead of a German ID card, also bring a residence registration certificate no older than three months. A passport shows no address, and the office has to verify where you live.",
          ],
        },
        {
          type: "faq",
          h2: "Common questions about the Wiesbaden office",
          items: [
            { q: "Is there a branch in Mainz-Kastel?", a: "No. The office on Stielstraße covers the whole city, including Kastel, Kostheim and Amöneburg." },
            { q: "Can I go without an appointment?", a: "Not as a private individual. You can collect finished documents or use the letterbox, but you will not be served at the counter." },
            { q: "Where do I get the plates?", a: "From plate shops near the office, or you bring them with you. With us the plates are part of the fixed price." },
            { q: "Which office is responsible if I live in Mainz?", a: "The City of Mainz registration office. What counts is your main residence, not where the car is." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "akk",
    kind: "guide",
    related: ["office", "reregister", "customplate"],
    updated,
    de: {
      slug: "zulassung-mainz-kastel-kostheim",
      nav: "Zulassung in Kastel und Kostheim",
      teaser: "Warum Kastel, Kostheim und Amöneburg ein WI-Kennzeichen haben.",
      metaTitle: "Kfz-Zulassung in Mainz-Kastel, Kostheim und Amöneburg: Mainz oder Wiesbaden?",
      metaDescription:
        "Sie wohnen in Mainz-Kastel, Kostheim oder Amöneburg und fragen sich, wo Sie Ihr Auto anmelden? Zuständig ist Wiesbaden. Warum das so ist und was das für Sie bedeutet.",
      eyebrow: "Ratgeber",
      h1: "Auto anmelden in Mainz-Kastel und Kostheim: Mainz oder Wiesbaden?",
      lead: "Die Adresse sagt Mainz, das Kennzeichen sagt WI. Wer in Kastel, Kostheim oder Amöneburg wohnt, steht bei der Zulassung regelmäßig vor derselben Frage. Die Antwort ist eindeutig.",
      whatsapp: "Hallo, ich wohne in Kastel / Kostheim / Amöneburg und möchte mein Auto anmelden.",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "Kurz gesagt",
          text: "Zuständig ist die Zulassungsbehörde Wiesbaden in der Stielstraße 3. Ihr Auto bekommt ein WI-Kennzeichen. Die Zulassungsstelle Mainz kann Ihr Fahrzeug nicht zulassen, auch wenn sie näher liegt.",
        },
        {
          type: "prose",
          h2: "Warum das so ist",
          paras: [
            "Kastel, Kostheim und Amöneburg waren bis 1945 Mainzer Stadtteile auf der rechten Rheinseite. Nach dem Krieg verlief die Grenze zwischen der amerikanischen und der französischen Besatzungszone entlang des Rheins. Die drei Orte kamen dadurch unter Wiesbadener Verwaltung und liegen heute in Hessen, während Mainz zu Rheinland-Pfalz gehört.",
            "Der Name blieb. Auf den Ortsschildern steht bis heute Mainz-Kastel und Mainz-Kostheim, und zusammen mit Amöneburg nennt man die drei Stadtteile kurz **AKK**. Verwaltet werden sie von der Landeshauptstadt Wiesbaden, vom Bürgerbüro bis zur Kfz-Zulassung.",
            "Für die Zulassung zählt allein der Hauptwohnsitz laut Melderegister. Und das Melderegister für Kastel, Kostheim und Amöneburg führt Wiesbaden.",
          ],
        },
        {
          type: "table",
          h2: "Was gilt wo",
          head: ["", "Kastel, Kostheim, Amöneburg", "Mainz (linksrheinisch)"],
          rows: [
            ["Bundesland", "Hessen", "Rheinland-Pfalz"],
            ["Zulassungsbehörde", "Wiesbaden, Stielstraße 3", "Mainz"],
            ["Kennzeichen", "WI", "MZ"],
            ["Postleitzahl", "55252 (Kastel), 55246 (Kostheim), 65203 (Amöneburg)", "55116 bis 55131"],
          ],
        },
        {
          type: "prose",
          h2: "Typische Fälle aus der Nachbarschaft",
          paras: [
            "**Umzug von Mainz nach Kastel.** Sie wechseln das Bundesland und den Zulassungsbezirk, auch wenn Sie nur über die Theodor-Heuss-Brücke gezogen sind. Die Adresse im Fahrzeugschein muss geändert werden. Ihr MZ-Kennzeichen dürfen Sie behalten.",
            "**Umzug von Kastel nach Mainz.** Dasselbe in die andere Richtung. Dann ist die Mainzer Zulassungsstelle zuständig, und wir können den Vorgang nur nach Absprache übernehmen.",
            "**Auto in Mainz gekauft, Wohnsitz in Kostheim.** Angemeldet wird in Wiesbaden. Für die Fahrt nach Hause reicht ein [Kurzzeitkennzeichen](page:shortterm), falls der Wagen abgemeldet ist.",
            "**Online-Formular zeigt Mainz an.** Viele Portale ordnen die Postleitzahl 55252 automatisch Mainz zu. Lassen Sie sich davon nicht irritieren, und buchen Sie keinen Termin bei der falschen Behörde.",
          ],
        },
        {
          type: "prose",
          h2: "Der kürzere Weg",
          paras: [
            "Von Kastel bis zur Stielstraße in Schierstein sind es rund zehn Kilometer quer durch Biebrich. Mit Termin, Wartezeit und Rückweg ist ein Vormittag schnell vorbei. Unser Büro liegt an der Wiesbadener Straße in Kastel. Sie geben die Unterlagen hier ab und holen Papiere und Kennzeichen hier wieder ab.",
            `Die Zulassung kostet bei uns ${priceText("registration", "de")}, inklusive Behördengebühren, Kennzeichen und Plakette. Alle Unterlagen stehen auf der Seite [Auto anmelden](page:register).`,
          ],
        },
        {
          type: "faq",
          h2: "Häufige Fragen",
          items: [
            { q: "Kann ich als Kasteler ein MZ-Kennzeichen bekommen?", a: "Neu zugeteilt wird nur WI. Ein MZ-Kennzeichen können Sie nur behalten, wenn Sie es bei einem Umzug aus Mainz mitbringen." },
            { q: "Gilt das auch für den Führerschein und den Bewohnerparkausweis?", a: "Ja. Für alle kommunalen Angelegenheiten in AKK ist die Stadt Wiesbaden zuständig." },
            { q: "Ich wohne in Ginsheim oder Hochheim. Wohin dann?", a: "Ginsheim-Gustavsburg gehört zum Kreis Groß-Gerau, Hochheim zum Main-Taunus-Kreis. Beide haben eigene Zulassungsstellen. Sprechen Sie uns an, ob wir den Vorgang trotzdem übernehmen können." },
          ],
        },
      ],
    },
    en: {
      slug: "car-registration-mainz-kastel-kostheim",
      nav: "Registration in Kastel and Kostheim",
      teaser: "Why Kastel, Kostheim and Amöneburg have WI plates.",
      metaTitle: "Car registration in Mainz-Kastel, Kostheim and Amöneburg: Mainz or Wiesbaden?",
      metaDescription:
        "You live in Mainz-Kastel, Kostheim or Amöneburg and wonder where to register your car? The answer is Wiesbaden. Why that is, and what it means for you.",
      eyebrow: "Guide",
      h1: "Registering a car in Mainz-Kastel and Kostheim: Mainz or Wiesbaden?",
      lead: "The address says Mainz, the plate says WI. Anyone living in Kastel, Kostheim or Amöneburg runs into the same question at registration. The answer is clear.",
      whatsapp: "Hello, I live in Kastel / Kostheim / Amöneburg and would like to register my car.",
      blocks: [
        {
          type: "callout",
          tone: "info",
          title: "In short",
          text: "The responsible office is the Wiesbaden registration office at Stielstraße 3. Your car gets a WI plate. The Mainz registration office cannot register your vehicle, even though it is closer.",
        },
        {
          type: "prose",
          h2: "Why that is",
          paras: [
            "Until 1945 Kastel, Kostheim and Amöneburg were districts of Mainz on the right bank of the Rhine. After the war the boundary between the American and French occupation zones ran along the river. The three places came under Wiesbaden's administration and are in the state of Hesse today, while Mainz belongs to Rhineland-Palatinate.",
            "The name stayed. The town signs still read Mainz-Kastel and Mainz-Kostheim, and together with Amöneburg the three districts are known as **AKK**. They are administered by the City of Wiesbaden, from the citizens' office to vehicle registration.",
            "For registration only your main residence in the residents' register counts, and the register for Kastel, Kostheim and Amöneburg is kept by Wiesbaden.",
          ],
        },
        {
          type: "table",
          h2: "What applies where",
          head: ["", "Kastel, Kostheim, Amöneburg", "Mainz (left bank)"],
          rows: [
            ["Federal state", "Hesse", "Rhineland-Palatinate"],
            ["Registration office", "Wiesbaden, Stielstraße 3", "Mainz"],
            ["Plate", "WI", "MZ"],
            ["Postcode", "55252 (Kastel), 55246 (Kostheim), 65203 (Amöneburg)", "55116 to 55131"],
          ],
        },
        {
          type: "prose",
          h2: "Typical cases from the neighbourhood",
          paras: [
            "**Moving from Mainz to Kastel.** You change federal state and registration district, even if you only moved across the Theodor Heuss Bridge. The address in the registration certificate has to be changed. You may keep your MZ plates.",
            "**Moving from Kastel to Mainz.** The same in the other direction. The Mainz office is then responsible, and we can take the case only by arrangement.",
            "**Car bought in Mainz, home in Kostheim.** It is registered in Wiesbaden. For the drive home, [short-term plates](page:shortterm) are enough if the car is deregistered.",
            "**An online form shows Mainz.** Many portals map postcode 55252 to Mainz automatically. Do not be misled, and do not book an appointment at the wrong office.",
          ],
        },
        {
          type: "prose",
          h2: "The shorter way",
          paras: [
            "From Kastel to Stielstraße in Schierstein it is about ten kilometres through Biebrich. With the appointment, the wait and the way back, a morning is gone. Our office is on Wiesbadener Straße in Kastel. You hand in your documents here and collect papers and plates here.",
            `Registration with us costs ${priceText("registration", "en")}, including authority fees, plates and sticker. All documents are listed under [register a car](page:register).`,
          ],
        },
        {
          type: "faq",
          h2: "Common questions",
          items: [
            { q: "Can I get an MZ plate if I live in Kastel?", a: "New numbers are WI only. You can keep an MZ plate only if you bring it with you when moving from Mainz." },
            { q: "Does this also apply to driving licences and residents' parking permits?", a: "Yes. The City of Wiesbaden is responsible for all municipal matters in these districts." },
            { q: "I live in Ginsheim or Hochheim. Where do I go?", a: "Ginsheim-Gustavsburg belongs to the Groß-Gerau district and Hochheim to the Main-Taunus district. Both have their own registration offices. Ask us whether we can still take the case." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "costs",
    kind: "guide",
    related: ["prices", "office", "customplate"],
    updated,
    de: {
      slug: "kfz-zulassung-kosten-wiesbaden",
      nav: "Kosten der Zulassung",
      teaser: "Amtliche Gebühren, Kennzeichen, Plakette: was die Zulassung in Wiesbaden wirklich kostet.",
      metaTitle: "Was kostet die Kfz-Zulassung in Wiesbaden? Gebühren 2026 im Überblick",
      metaDescription:
        "Kosten der Kfz-Zulassung in Wiesbaden: amtliche Gebühren für Anmeldung, Ummeldung, Abmeldung und Kennzeichen, Vergleich vor Ort, online und über einen Zulassungsdienst.",
      eyebrow: "Ratgeber",
      h1: "Was kostet die Kfz-Zulassung in Wiesbaden?",
      lead: "Die Gebühren sind bundesweit in der Gebührenordnung für Maßnahmen im Straßenverkehr geregelt. Was Sie am Ende zahlen, hängt vom Vorgang ab und davon, welchen Weg Sie wählen.",
      whatsapp: "Hallo, ich möchte wissen, was folgender Vorgang bei Ihnen kostet:",
      blocks: [
        {
          type: "table",
          h2: "Amtliche Gebühren der Stadt Wiesbaden",
          intro: "Alle Beträge stammen von den Leistungsseiten der Stadt, abgerufen am 25. November 2026.",
          head: ["Vorgang", "Vor Ort", "Online (i-Kfz)"],
          rows: [
            ["Neufahrzeug zulassen", "30,20 bis 60,00 €", "günstiger, je nach Fall"],
            ["Gebrauchtfahrzeug zulassen", "30,00 €", "12,80 €"],
            ["Wiederzulassung auf denselben Halter", "23,00 bis 50,00 €", "12,80 €"],
            ["Adress- oder Namensänderung", "11,00 bis 50,00 €", "möglich bei Fahrzeugen ab 2015"],
            ["Abmeldung", "15,90 bis 67,10 €", "2,70 €"],
            ["Kurzzeitkennzeichen", "13,10 €", "nicht möglich"],
            ["Ausfuhrkennzeichen", "30,00 bis 70,00 €", "nicht möglich"],
            ["Importfahrzeug zulassen", "26,30 bis 60,00 €", "nicht möglich"],
            ["Saison- oder H-Kennzeichen", "26,30 bis 50,00 €", "je nach Fall"],
            ["E-Kennzeichen", "31,40 bis 61,10 €", "je nach Fall"],
            ["Wunschkennzeichen (Reservierung und Zuteilung)", "12,80 €", "12,80 €"],
            ["Umweltplakette", "5,30 €", "entfällt"],
          ],
          note: "Bei Spannen setzt die Behörde den genauen Betrag erst fest, wenn die vollständigen Unterlagen vorliegen.",
        },
        {
          type: "prose",
          h2: "Was zu den Gebühren dazukommt",
          paras: [
            "**Kennzeichen.** Die Schilder gehören nicht zur Gebühr. Ein Paar kostet beim Schilderpräger an der Behörde meist 20 bis 30 Euro, online bestellt oft weniger. Wer online bestellt, muss die Schilder zum Termin mitbringen.",
            "**Umweltplakette.** Wird ein neues Kennzeichen zugeteilt, brauchen Sie eine neue Plakette. Die Nummer auf der Plakette muss zum Kennzeichen passen.",
            "**Kfz-Steuer.** Sie wird nicht bei der Zulassung bezahlt, sondern später vom Hauptzollamt per Lastschrift eingezogen. Deshalb verlangt die Behörde ein SEPA-Mandat.",
            "**Versicherung.** Ohne eVB-Nummer keine Zulassung. Die Prämie zahlen Sie an den Versicherer.",
          ],
        },
        {
          type: "table",
          h2: "Rechenbeispiel: gebrauchten Golf ummelden",
          intro: "Halterwechsel, das Auto ist noch zugelassen, neues WI-Wunschkennzeichen.",
          head: ["Posten", "Selbst vor Ort", "Über uns"],
          rows: [
            ["Gebühr Zulassung", "30,00 €", "enthalten"],
            ["Wunschkennzeichen", "12,80 €", priceText("customPlate", "de")],
            ["Schilderpaar", "ca. 25 €", "enthalten"],
            ["Umweltplakette", "5,30 €", "enthalten"],
            ["Ihre Zeit", "Termin, Anfahrt, Wartezeit", "Abgabe in Kastel"],
            ["Summe", "ca. 73 €", `${priceText("registration", "de")} zzgl. Wunschkennzeichen`],
          ],
          note: "Die Differenz ist der Preis dafür, dass Sie nicht selbst hinmüssen und die Unterlagen vorher geprüft werden. Ob sich das lohnt, hängt davon ab, was Ihnen ein freier Vormittag wert ist.",
        },
        {
          type: "prose",
          h2: "Wann sich welcher Weg lohnt",
          paras: [
            "**Online** ist unschlagbar günstig, wenn Ihr Ausweis für die Online-Funktion freigeschaltet ist und das Fahrzeug nach dem 1. Januar 2015 zugelassen wurde. Dann tragen die Papiere verdeckte Sicherheitscodes, die Sie freirubbeln und eingeben.",
            "**Persönlich** lohnt sich, wenn Sie ohnehin frei haben und Ihre Unterlagen einfach sind: Privatperson, Gebrauchtwagen, alle Papiere da.",
            "**Ein Zulassungsdienst** lohnt sich, wenn kein Termin frei ist, wenn Sie arbeiten, oder wenn der Fall Tücken hat: Firmenzulassung, Import, Erbfall, verlorene Papiere. Bei solchen Fällen spart die Vorabprüfung am meisten.",
          ],
        },
        {
          type: "faq",
          h2: "Häufige Fragen zu den Kosten",
          items: [
            { q: "Warum nennt die Stadt Spannen statt fester Beträge?", a: "Weil sich die Gebühr aus mehreren Positionen der Gebührenordnung zusammensetzt, etwa Zulassung, Kennzeichenzuteilung und Plaketten. Welche anfallen, steht erst fest, wenn der Fall geprüft ist." },
            { q: "Sind die Gebühren in Mainz anders?", a: "Die Gebührenordnung gilt bundesweit, die Beträge sind daher sehr ähnlich. Unterschiede gibt es bei Zusatzleistungen und bei den Schilderpreisen." },
            { q: "Kann ich bei Ihnen mit Karte zahlen?", a: "Die Zahlungsarten nennen wir Ihnen bei der Anfrage per WhatsApp." },
          ],
        },
      ],
    },
    en: {
      slug: "car-registration-costs-wiesbaden",
      nav: "Registration costs",
      teaser: "Official fees, plates, sticker: what registration in Wiesbaden really costs.",
      metaTitle: "What does car registration cost in Wiesbaden? Official fees 2026",
      metaDescription:
        "Car registration costs in Wiesbaden: official fees for registering, transferring and deregistering, plates and stickers, and a comparison of in person, online and via an agent.",
      eyebrow: "Guide",
      h1: "What does car registration cost in Wiesbaden?",
      lead: "The fees are set nationwide in the federal fee schedule for road traffic measures. What you pay in the end depends on the case and on the route you choose.",
      whatsapp: "Hello, I would like to know what the following costs with you:",
      blocks: [
        {
          type: "table",
          h2: "Official fees of the City of Wiesbaden",
          intro: "All amounts are from the city's service pages, retrieved on 25 November 2026.",
          head: ["Case", "At the office", "Online (i-Kfz)"],
          rows: [
            ["Register a new vehicle", "€30.20 to €60.00", "lower, depending on the case"],
            ["Register a used vehicle", "€30.00", "€12.80"],
            ["Re-register to the same keeper", "€23.00 to €50.00", "€12.80"],
            ["Change of address or name", "€11.00 to €50.00", "possible for vehicles from 2015"],
            ["Deregistration", "€15.90 to €67.10", "€2.70"],
            ["Short-term plates", "€13.10", "not available"],
            ["Export plates", "€30.00 to €70.00", "not available"],
            ["Register an imported vehicle", "€26.30 to €60.00", "not available"],
            ["Seasonal or H plate", "€26.30 to €50.00", "depends on the case"],
            ["E plate", "€31.40 to €61.10", "depends on the case"],
            ["Custom plate (reservation and assignment)", "€12.80", "€12.80"],
            ["Emissions sticker", "€5.30", "not applicable"],
          ],
          note: "Where a range is given, the office sets the exact amount only once it has the complete documents.",
        },
        {
          type: "prose",
          h2: "What comes on top of the fees",
          paras: [
            "**Plates.** The plates are not part of the fee. A pair usually costs 20 to 30 euros at the plate shops by the office, often less if ordered online. If you order online you must bring the plates to your appointment.",
            "**Emissions sticker.** If a new number is assigned you need a new sticker. The number on the sticker has to match the plate.",
            "**Vehicle tax.** It is not paid at registration but collected later by the customs office by direct debit, which is why the office asks for a SEPA mandate.",
            "**Insurance.** No eVB number, no registration. You pay the premium to the insurer.",
          ],
        },
        {
          type: "table",
          h2: "Worked example: transferring a used Golf",
          intro: "Change of keeper, the car is still registered, new custom WI plate.",
          head: ["Item", "Yourself at the office", "Through us"],
          rows: [
            ["Registration fee", "€30.00", "included"],
            ["Custom plate", "€12.80", priceText("customPlate", "en")],
            ["Pair of plates", "approx. €25", "included"],
            ["Emissions sticker", "€5.30", "included"],
            ["Your time", "Appointment, travel, waiting", "Drop-off in Kastel"],
            ["Total", "approx. €73", `${priceText("registration", "en")} plus custom plate`],
          ],
          note: "The difference is the price of not going yourself and having your documents checked first. Whether that is worth it depends on what a free morning is worth to you.",
        },
        {
          type: "prose",
          h2: "Which route pays off when",
          paras: [
            "**Online** is unbeatable on price if your ID is activated for online use and the vehicle was registered after 1 January 2015. The papers then carry hidden security codes that you scratch off and enter.",
            "**In person** makes sense if you are free anyway and your case is simple: private individual, used car, all papers to hand.",
            "**A registration service** makes sense if there is no appointment available, if you work, or if the case is tricky: company registration, import, inheritance, lost papers. In such cases the pre-check saves the most.",
          ],
        },
        {
          type: "faq",
          h2: "Common questions about costs",
          items: [
            { q: "Why does the city give ranges instead of fixed amounts?", a: "Because the fee is made up of several items in the fee schedule, such as registration, plate assignment and seals. Which of them apply is only clear once the case has been checked." },
            { q: "Are the fees different in Mainz?", a: "The fee schedule applies nationwide, so the amounts are very similar. Differences arise in additional services and in plate prices." },
            { q: "Can I pay you by card?", a: "We tell you the payment options when you ask on WhatsApp." },
          ],
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ */
  {
    id: "documents",
    kind: "guide",
    related: ["register", "office", "costs"],
    updated,
    de: {
      slug: "unterlagen",
      nav: "Unterlagen",
      teaser: "Vollmacht, eVB, SEPA-Mandat, HU: was die Begriffe bedeuten und wo Sie alles bekommen.",
      metaTitle: "Unterlagen für die Kfz-Zulassung in Wiesbaden: Checkliste, Vollmacht, eVB, SEPA",
      metaDescription:
        "Checkliste für die Kfz-Zulassung in Wiesbaden: Vollmacht, eVB-Nummer, SEPA-Lastschriftmandat, Zulassungsbescheinigung Teil I und II, HU. Einfach erklärt.",
      eyebrow: "Unterlagen",
      h1: "Unterlagen für die Zulassung: die Checkliste",
      lead: "Sechs Dinge brauchen Sie fast immer. Was sie sind, woher Sie sie bekommen und woran es am häufigsten scheitert.",
      whatsapp: "Hallo, können Sie bitte prüfen, ob meine Unterlagen vollständig sind? Hier sind die Fotos:",
      blocks: [
        {
          type: "checklist",
          h2: "Die Standard-Checkliste",
          intro: "Für Anmeldung, Halterwechsel und Wiederzulassung. Für andere Vorgänge steht die Liste auf der jeweiligen Leistungsseite.",
          groups: [
            {
              items: [
                "**Ausweis** des Halters im Original",
                "**Zulassungsbescheinigung Teil I** (Fahrzeugschein)",
                "**Zulassungsbescheinigung Teil II** (Fahrzeugbrief)",
                "**eVB-Nummer** der Versicherung",
                "**SEPA-Lastschriftmandat** für die Kfz-Steuer",
                "Nachweis der gültigen **Hauptuntersuchung**",
                "**Vollmacht**, wenn jemand anderes für Sie zur Behörde geht",
                "Die bisherigen **Kennzeichen**, wenn das Fahrzeug noch zugelassen ist",
              ],
            },
          ],
        },
        {
          type: "prose",
          h2: "Ausweis und Meldebescheinigung",
          paras: [
            "Der Personalausweis genügt, weil die Adresse darauf steht. Mit einem Reisepass brauchen Sie zusätzlich eine Meldebescheinigung, die nicht älter als drei Monate ist. Bürgerinnen und Bürger aus Nicht-EU-Staaten legen außerdem den elektronischen Aufenthaltstitel vor.",
            "Wenn wir für Sie zur Behörde gehen, verlangt sie Ihren Ausweis, je nach Vorgang im Original oder als gut lesbare Farbkopie. Ein Original bekommen Sie am selben Tag zurück.",
          ],
        },
        {
          type: "prose",
          h2: "Zulassungsbescheinigung Teil I und Teil II",
          paras: [
            "**Teil I** ist der frühere Fahrzeugschein: das gefaltete Dokument, das Sie beim Fahren dabeihaben. **Teil II** ist der frühere Fahrzeugbrief im A4-Format. Er weist aus, wer über das Fahrzeug verfügen darf, und gehört nicht ins Handschuhfach.",
            "Ist das Auto finanziert oder geleast, liegt Teil II bei der Bank. Die schickt ihn auf Anforderung direkt an die Zulassungsbehörde. Die Stadt Wiesbaden hat dafür eine Online-Abfrage, mit der sich prüfen lässt, ob der Brief angekommen ist.",
          ],
        },
        {
          type: "prose",
          h2: "eVB-Nummer",
          paras: [
            "Die elektronische Versicherungsbestätigung ist ein siebenstelliger Code aus Buchstaben und Ziffern. Ihre Versicherung hinterlegt damit bei der Behörde, dass Haftpflichtschutz besteht. Sie bekommen die Nummer nach Abschluss oder Wechsel des Vertrags per E-Mail, SMS oder am Telefon.",
            "Achten Sie darauf, dass die eVB zum Vorgang passt. Für Kurzzeitkennzeichen und Ausfuhrkennzeichen gibt es eigene Bestätigungen, eine normale eVB wird dort nicht akzeptiert. Und sie muss auf den Halter ausgestellt sein, der im Antrag steht.",
          ],
        },
        {
          type: "prose",
          h2: "SEPA-Lastschriftmandat",
          paras: [
            "Die Kfz-Steuer zieht das Hauptzollamt jährlich vom Konto ein. Ohne unterschriebenes Mandat wird nicht zugelassen. Das Formular gibt es bei der Stadt Wiesbaden zum Herunterladen und bei uns im Büro.",
            "Soll jemand anderes die Steuer zahlen, etwa die Eltern für das Auto der Tochter, muss diese Person das Mandat unterschreiben und eine Ausweiskopie beilegen.",
          ],
        },
        {
          type: "prose",
          h2: "Vollmacht",
          paras: [
            "Mit der Vollmacht erlauben Sie uns, den Antrag in Ihrem Namen zu stellen. Die Behörde verlangt sie im Original, lesbar ausgefüllt und unterschrieben, zusammen mit Ihrem Ausweis. Der Bevollmächtigte weist sich mit seinem eigenen Ausweis aus.",
            "Wichtig für Kundinnen und Kunden von Autohäusern: Die Stadt Wiesbaden erkennt keine Untervollmachten an. Die Vollmacht muss direkt auf den Dienstleister ausgestellt sein, der zur Behörde geht.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "Daran scheitert es am häufigsten",
          text: "Abgelaufene Hauptuntersuchung, eVB auf den falschen Namen, fehlende Unterschrift auf dem SEPA-Mandat, Kfz-Steuerschulden ab 5 Euro oder offene Gebühren aus früheren Zulassungen. Alles davon lässt sich vorher klären, wenn Sie uns Fotos der Unterlagen schicken.",
        },
      ],
    },
    en: {
      slug: "documents",
      nav: "Documents",
      teaser: "Power of attorney, eVB, SEPA mandate, HU: what the terms mean and where to get everything.",
      metaTitle: "Documents for car registration in Wiesbaden: checklist and German terms explained",
      metaDescription:
        "Checklist for car registration in Wiesbaden with the German terms explained: Vollmacht, eVB number, SEPA mandate, Zulassungsbescheinigung Teil I and II, HU.",
      eyebrow: "Documents",
      h1: "Documents for registration: the checklist",
      lead: "Six things are needed almost every time. Here is what they are, where to get them and what most often goes wrong.",
      whatsapp: "Hello, could you please check whether my documents are complete? Here are the photos:",
      blocks: [
        {
          type: "checklist",
          h2: "The standard checklist",
          intro: "For registration, change of keeper and re-registration. Lists for other cases are on the individual service pages.",
          groups: [
            {
              items: [
                "The keeper's **ID** in original",
                "**Registration certificate part I** (Zulassungsbescheinigung Teil I, formerly Fahrzeugschein)",
                "**Registration certificate part II** (Zulassungsbescheinigung Teil II, formerly Fahrzeugbrief)",
                "**eVB number** from the insurer",
                "**SEPA direct debit mandate** for vehicle tax",
                "Proof of a valid **roadworthiness test** (Hauptuntersuchung, HU, often called TÜV)",
                "**Power of attorney** (Vollmacht) if someone else goes to the office for you",
                "The current **plates**, if the vehicle is still registered",
              ],
            },
          ],
        },
        {
          type: "prose",
          h2: "ID and proof of address",
          paras: [
            "A German ID card is enough because it shows your address. With a passport you also need a residence registration certificate (Meldebescheinigung) no older than three months, which you get from the Bürgerbüro. Citizens of non-EU countries also present their electronic residence permit.",
            "If we go to the office for you, it asks for your ID, depending on the case in original or as a clearly legible colour copy. An original comes back to you the same day.",
          ],
        },
        {
          type: "prose",
          h2: "Registration certificate part I and part II",
          paras: [
            "**Part I** is the folded document you carry when driving. **Part II** is the A4 title document. It shows who is entitled to dispose of the vehicle and does not belong in the glove box.",
            "If the car is financed or leased, part II is held by the bank, which sends it directly to the registration office on request. The City of Wiesbaden has an online query to check whether it has arrived.",
          ],
        },
        {
          type: "prose",
          h2: "eVB number",
          paras: [
            "The electronic insurance confirmation is a seven-character code of letters and digits. With it your insurer tells the office that liability cover exists. You receive the number by email, text or phone after taking out or changing a policy.",
            "Make sure the eVB matches the case. Short-term plates and export plates have their own confirmations; a normal eVB is not accepted for them. And it must be issued to the keeper named in the application.",
          ],
        },
        {
          type: "prose",
          h2: "SEPA direct debit mandate",
          paras: [
            "Vehicle tax is collected once a year from your account by the customs office. Without a signed mandate there is no registration. The form can be downloaded from the City of Wiesbaden, and we have it at the office. You need a bank account in the SEPA area.",
            "If someone else is to pay the tax, for example parents for their daughter's car, that person signs the mandate and adds a copy of their ID.",
          ],
        },
        {
          type: "prose",
          h2: "Power of attorney",
          paras: [
            "With the power of attorney you allow us to file the application in your name. The office wants it in original, legibly completed and signed, together with your ID. The representative identifies themselves with their own ID.",
            "Important for dealership customers: the City of Wiesbaden does not accept sub-authorisations. The power of attorney must name the service provider who actually goes to the office.",
          ],
        },
        {
          type: "callout",
          tone: "warn",
          title: "What most often goes wrong",
          text: "An expired roadworthiness test, an eVB in the wrong name, a missing signature on the SEPA mandate, vehicle tax arrears of 5 euros or more, or unpaid fees from earlier registrations. All of it can be cleared up beforehand if you send us photos of your documents.",
        },
      ],
    },
  },
];
