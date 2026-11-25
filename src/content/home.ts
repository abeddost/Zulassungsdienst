import { priceText } from "@/lib/prices";
import { site, type Lang } from "@/lib/site";

type HeroVariantCopy = { label: string; title: string; text: string };

type HomeCopy = {
  eyebrow: string;
  /** Headline in two parts: the second is set in a quieter tone. */
  h1: [string, string];
  lead: string;
  plate: {
    pick: string;
    letters: string;
    digits: string;
    customHint: string;
    customMessage: string;
    more: string;
    moreShort: string;
    variants: Record<"register" | "custom" | "shortterm" | "export" | "deregister", HeroVariantCopy>;
  };
  chips: string[];
  chat: { from: "them" | "us"; text: string; attachment?: string }[];
  chatTitle: string;
  chatStatus: string;
  servicesTitle: string;
  servicesLead: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  compareTitle: string;
  compareLead: string;
  compareHead: [string, string, string];
  compareRows: [string, string, string][];
  compareNote: string;
  pricesTitle: string;
  pricesLead: string;
  pricesLink: string;
  areaTitle: string;
  areaText: string;
  areaLink: string;
  areas: string[];
  businessTitle: string;
  businessText: string;
  businessLink: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

export const home: Record<Lang, HomeCopy> = {
  de: {
    eyebrow: "Zulassungsdienst · Wiesbaden und Mainz-Kastel",
    h1: ["Kfz-Zulassung in Wiesbaden.", "Ohne Termin."],
    plate: {
      pick: "Kennzeichenart wählen",
      letters: "Buchstaben",
      digits: "Ziffern",
      customHint: "1 bis 2 Buchstaben, 1 bis 4 Ziffern. Ob die Kombination frei ist, prüfen wir für Sie.",
      customMessage: "Hallo, ich hätte gern das Wunschkennzeichen {plate}. Ist es noch frei?",
      more: "Unterlagen und Ablauf",
      moreShort: "Details",
      variants: {
        register: { label: "Anmelden", title: "Auto anmelden", text: "Neuwagen, Gebrauchter oder Wiederzulassung. Die Kennzeichen kommen fertig gesiegelt zurück, mit Stadtsiegel und HU-Plakette." },
        custom: { label: "Wunsch", title: "Ihr Wunschkennzeichen", text: "Tippen Sie Ihre Kombination ein und sehen Sie Ihr Schild. Wir prüfen, ob sie frei ist, und reservieren sie." },
        shortterm: { label: "Kurzzeit", title: "Kurzzeitkennzeichen", text: "Fünf Tage gültig, für Probefahrt, Überführung und den Weg zur Hauptuntersuchung. Im gelben Feld steht das Ablaufdatum." },
        export: { label: "Ausfuhr", title: "Ausfuhrkennzeichen", text: "Für die Fahrt ins Ausland auf eigener Achse. Das rote Feld zeigt, bis wann Zulassung und Versicherung gelten." },
        deregister: { label: "Abmelden", title: "Auto abmelden", text: "Die Behörde entfernt die Siegel, Steuer und Versicherung enden. Fahrzeugschein und Kennzeichen genügen." },
      },
    },
    lead: "Wir gehen für Sie zur Zulassungsbehörde: anmelden, ummelden, abmelden. Kennzeichen und Plakette bringen wir gleich mit. Unterlagen vormittags abgeben, in der Regel am selben Tag fertig.",
    chips: [`Festpreis ${priceText("registration", "de")}`, "Kennzeichen inklusive", "Abhol- und Bringservice"],
    chatTitle: site.name,
    chatStatus: "antwortet meist in wenigen Minuten",
    chat: [
      { from: "them", text: "Hallo, ich habe einen Golf gekauft und möchte ihn auf mich ummelden.", attachment: "Fahrzeugschein.jpg" },
      { from: "us", text: "Guten Morgen! Schein und Brief passen. Es fehlt nur noch Ihre eVB-Nummer von der Versicherung." },
      { from: "them", text: "Kommt sofort. Kann ich die Papiere heute vorbeibringen?" },
      { from: "us", text: `Gern. Bis ${site.expressCutoff} Uhr bei uns in Kastel, dann sind Kennzeichen und Papiere heute Nachmittag fertig.` },
    ],
    servicesTitle: "Was wir für Sie erledigen",
    servicesLead: "Jeder Vorgang hat eigene Unterlagen und eigene Stolperstellen. Auf den Seiten steht genau, was Sie brauchen.",
    stepsTitle: "Drei Schritte, ein Vormittag",
    steps: [
      { title: "Foto per WhatsApp", text: "Sie schicken Fahrzeugschein und Fahrzeugbrief als Foto. Wir sagen, was noch fehlt, und nennen den Festpreis." },
      { title: "Abgeben oder abholen lassen", text: "Sie bringen die Originale nach Kastel oder wir holen sie bei Ihnen ab. Vollmacht und SEPA-Mandat füllen wir gemeinsam aus." },
      { title: "Fertig zurück", text: "Wir reichen bei der Zulassungsbehörde ein, prägen die Kennzeichen und übergeben Papiere, Schilder und Plakette." },
    ],
    compareTitle: "Selbst hingehen oder abgeben?",
    compareLead: "Beides führt zum selben Ergebnis. Der Unterschied liegt in Ihrer Zeit.",
    compareHead: ["", "Selbst zur Behörde", "Mit uns"],
    compareRows: [
      ["Termin", "Persönliche Vorsprache nur mit Online-Termin", "Kein Termin nötig"],
      ["Weg", "Stielstraße 3 in Wiesbaden-Schierstein", "Wiesbadener Straße 93 in Kastel, oder Abholung"],
      ["Unterlagen", "Fehlt etwas, brauchen Sie einen neuen Termin", "Vorab-Check per WhatsApp"],
      ["Kennzeichen", "Beim Schilderpräger separat kaufen", "Im Festpreis enthalten"],
      ["Kosten", "Behördengebühr plus Schilder", `Festpreis ${priceText("registration", "de")}`],
    ],
    compareNote: "Der eigene Gang ist günstiger. Wir sparen Ihnen den halben Tag und den zweiten Anlauf.",
    pricesTitle: "Festpreise, die alles enthalten",
    pricesLead: "Behördengebühren, Kennzeichen und Plakette sind eingerechnet. Was am Ende auf der Rechnung steht, wissen Sie vorher.",
    pricesLink: "Alle Preise ansehen",
    areaTitle: "Für Wiesbaden und die AKK-Stadtteile",
    areaText: "Mainz-Kastel, Kostheim und Amöneburg gehören zu Wiesbaden. Wer hier gemeldet ist, bekommt ein WI-Kennzeichen und ist bei der Wiesbadener Zulassungsbehörde richtig, nicht in Mainz.",
    areaLink: "Warum Kastel ein WI-Kennzeichen hat",
    areas: ["Mainz-Kastel", "Mainz-Kostheim", "Mainz-Amöneburg", "Biebrich", "Schierstein", "Erbenheim", "Nordenstadt", "Delkenheim", "Dotzheim", "Innenstadt", "Bierstadt", "Abholung in Mainz"],
    businessTitle: "Für Autohäuser, Händler und Fuhrparks",
    businessText: "Mehrere Zulassungen pro Woche, feste Abholzeiten und eine Sammelrechnung am Monatsende.",
    businessLink: "Zum Händlerservice",
    faqTitle: "Häufige Fragen",
    faq: [
      { q: "Brauche ich einen Termin?", a: "Nein. Sie schreiben uns per WhatsApp oder rufen an und bringen die Unterlagen vorbei. Den Termin bei der Behörde brauchen nur Privatpersonen, die selbst hingehen." },
      { q: "Wie schnell ist mein Auto zugelassen?", a: `Sind die Unterlagen bis ${site.expressCutoff} Uhr vollständig bei uns, ist der Vorgang in der Regel am selben Tag erledigt. Eine Garantie kann niemand geben, weil die Bearbeitung bei der Behörde liegt. Wir sagen Ihnen morgens ehrlich, womit Sie rechnen können.` },
      { q: "Was kostet die Zulassung?", a: `Die Zulassung kostet ${priceText("registration", "de")}. Darin enthalten sind die Behördengebühren, zwei Kennzeichen und die Umweltplakette. Die Abmeldung kostet ${priceText("deregistration", "de")}.` },
      { q: "Welche Unterlagen brauche ich?", a: "Meist Ausweis, Zulassungsbescheinigung Teil I und II, eVB-Nummer, eine IBAN für die Kfz-Steuer und eine gültige Hauptuntersuchung. Dazu eine Vollmacht für uns. Die genaue Liste hängt vom Vorgang ab und steht auf der jeweiligen Seite." },
      { q: "Geht alles per WhatsApp?", a: "Die Prüfung und alle Fragen ja. Die Behörde verlangt aber Originale. Deshalb geben Sie die Papiere bei uns ab oder wir holen sie ab." },
      { q: "Sind Sie eine Behörde?", a: "Nein. Wir sind ein privater Zulassungsdienst und handeln mit Ihrer Vollmacht. Zuständig bleibt die Zulassungsbehörde der Landeshauptstadt Wiesbaden." },
    ],
  },
  en: {
    eyebrow: "Vehicle registration service · Wiesbaden and Mainz-Kastel",
    h1: ["Car registration in Wiesbaden.", "No appointment."],
    plate: {
      pick: "Choose a plate type",
      letters: "Letters",
      digits: "Digits",
      customHint: "1 or 2 letters, 1 to 4 digits. We check for you whether the combination is free.",
      customMessage: "Hello, I would like the custom plate {plate}. Is it still available?",
      more: "Documents and process",
      moreShort: "Details",
      variants: {
        register: { label: "Register", title: "Register a car", text: "New car, used car or re-registration. The plates come back sealed and ready, with the city seal and the inspection sticker." },
        custom: { label: "Custom", title: "Your custom plate", text: "Type your combination and see your plate. We check whether it is free and reserve it." },
        shortterm: { label: "Short-term", title: "Short-term plates", text: "Valid for five days, for test drives, transfers and the trip to the roadworthiness test. The yellow field shows the expiry date." },
        export: { label: "Export", title: "Export plates", text: "For driving the car abroad under its own power. The red field shows how long registration and insurance are valid." },
        deregister: { label: "Deregister", title: "Deregister a car", text: "The office removes the seals, and tax and insurance end. The registration certificate and the plates are all it takes." },
      },
    },
    lead: "We go to the registration office for you: register, transfer, deregister. Plates and emissions sticker come back with the papers. Hand in your documents in the morning and it is usually done the same day.",
    chips: [`Fixed price ${priceText("registration", "en")}`, "Plates included", "Pickup and delivery"],
    chatTitle: site.name,
    chatStatus: "usually replies within minutes",
    chat: [
      { from: "them", text: "Hi, I bought a Golf and need it registered in my name.", attachment: "registration-certificate.jpg" },
      { from: "us", text: "Good morning! Both certificates look fine. All we still need is the eVB number from your insurer." },
      { from: "them", text: "Sending it now. Can I drop the papers off today?" },
      { from: "us", text: `Sure. Bring them to Kastel by ${site.expressCutoff} and your plates and papers are ready this afternoon.` },
    ],
    servicesTitle: "What we take care of",
    servicesLead: "Every case has its own documents and its own pitfalls. Each page tells you exactly what you need.",
    stepsTitle: "Three steps, one morning",
    steps: [
      { title: "Photo on WhatsApp", text: "Send us a photo of both registration certificates. We tell you what is missing and give you the fixed price." },
      { title: "Drop off or have it collected", text: "Bring the originals to Kastel or let us collect them. We fill in the power of attorney and the SEPA mandate with you." },
      { title: "Back, finished", text: "We file at the registration office, have the plates embossed and hand over papers, plates and sticker." },
    ],
    compareTitle: "Go yourself or hand it over?",
    compareLead: "Both end with the same result. The difference is your time.",
    compareHead: ["", "Going yourself", "With us"],
    compareRows: [
      ["Appointment", "In-person visits only with an online appointment", "None needed"],
      ["Location", "Stielstraße 3 in Wiesbaden-Schierstein", "Wiesbadener Straße 93 in Kastel, or pickup"],
      ["Documents", "Something missing means a new appointment", "Checked beforehand on WhatsApp"],
      ["Plates", "Bought separately from a plate shop", "Included in the fixed price"],
      ["Cost", "Authority fee plus plates", `Fixed price ${priceText("registration", "en")}`],
    ],
    compareNote: "Going yourself is cheaper. We save you half a day and the second attempt.",
    pricesTitle: "Fixed prices with everything included",
    pricesLead: "Authority fees, plates and sticker are part of the price. You know the final amount before you start.",
    pricesLink: "See all prices",
    areaTitle: "For Wiesbaden and the districts across the river",
    areaText: "Mainz-Kastel, Kostheim and Amöneburg belong to Wiesbaden. If you live here you get a WI plate and deal with the Wiesbaden registration office, not the one in Mainz.",
    areaLink: "Why Kastel has WI plates",
    areas: ["Mainz-Kastel", "Mainz-Kostheim", "Mainz-Amöneburg", "Biebrich", "Schierstein", "Erbenheim", "Nordenstadt", "Delkenheim", "Dotzheim", "City centre", "Bierstadt", "Pickup in Mainz"],
    businessTitle: "For dealerships, traders and fleets",
    businessText: "Several registrations a week, fixed collection times and one invoice at the end of the month.",
    businessLink: "Dealer service",
    faqTitle: "Common questions",
    faq: [
      { q: "Do I need an appointment?", a: "No. Message us on WhatsApp or call, then bring your documents. Only private individuals who go to the office themselves need an appointment there." },
      { q: "How quickly is my car registered?", a: `If your complete documents reach us by ${site.expressCutoff}, the job is usually done the same day. Nobody can guarantee it, because processing happens at the authority. We tell you honestly in the morning what to expect.` },
      { q: "What does registration cost?", a: `Registration costs ${priceText("registration", "en")}. That covers the authority fees, two plates and the emissions sticker. Deregistration costs ${priceText("deregistration", "en")}.` },
      { q: "Which documents do I need?", a: "Usually ID, registration certificate part I and II, an eVB insurance number, an IBAN for vehicle tax and a valid roadworthiness test, plus a power of attorney for us. The exact list depends on the case and is on each service page." },
      { q: "Can everything be done on WhatsApp?", a: "Checking your documents and answering questions, yes. The authority needs originals though, so you drop the papers off or we collect them." },
      { q: "Are you a government office?", a: "No. We are a private registration service acting under your power of attorney. The responsible authority remains the registration office of the City of Wiesbaden." },
    ],
  },
};
