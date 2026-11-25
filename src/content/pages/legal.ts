import { site } from "@/lib/site";
import type { PageDoc } from "../types";

const updated = "2026-11-25";
const a = site.address;
const l = site.legal;

/** Missing owner details are shown as visible gaps so they cannot go live unnoticed. */
const gap = (value: string | null, de: string, en: string) => ({
  de: value ?? `**[Angabe fehlt: ${de}]**`,
  en: value ?? `**[Missing: ${en}]**`,
});

const owner = gap(l.owner, "Name des Inhabers oder der Geschäftsführung", "name of owner or managing director");
const legalForm = gap(l.legalForm, "Rechtsform", "legal form");
const email = gap(l.email, "E-Mail-Adresse", "email address");
const vat = l.smallBusiness
  ? { de: "Kleinunternehmer nach § 19 UStG, es wird keine Umsatzsteuer ausgewiesen.", en: "Small business under § 19 UStG; no VAT is shown." }
  : gap(l.vatId, "Umsatzsteuer-Identifikationsnummer oder Hinweis auf § 19 UStG", "VAT ID or note on § 19 UStG");
const register = l.register ? { de: l.register, en: l.register } : null;

export const legalPages: PageDoc[] = [
  {
    id: "imprint",
    kind: "legal",
    updated,
    de: {
      slug: "impressum",
      nav: "Impressum",
      metaTitle: `Impressum | ${site.name}`,
      metaDescription: `Impressum und Anbieterkennzeichnung von ${site.name}.`,
      eyebrow: "Rechtliches",
      h1: "Impressum",
      lead: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
      whatsapp: "Hallo, ich habe eine Frage.",
      blocks: [
        {
          type: "facts",
          h2: "Anbieter",
          items: [
            { label: "Unternehmen", value: `${site.name}, ${legalForm.de}` },
            { label: "Vertreten durch", value: owner.de },
            { label: "Anschrift", value: `${a.street}, ${a.postalCode} ${a.city} (${a.district})` },
            { label: "Telefon", value: site.phone.display },
            { label: "E-Mail", value: email.de },
            { label: "Umsatzsteuer", value: vat.de },
            ...(register ? [{ label: "Register", value: register.de }] : []),
          ],
        },
        {
          type: "prose",
          h2: "Hinweis zur Tätigkeit",
          paras: [
            `${site.name} ist ein privater Dienstleister und keine Behörde. Wir handeln im Auftrag und mit Vollmacht unserer Kundinnen und Kunden gegenüber der Zulassungsbehörde der Landeshauptstadt Wiesbaden. Angaben zu Gebühren, Unterlagen und Abläufen der Behörde auf dieser Website beruhen auf den veröffentlichten Informationen der Stadt und können sich ändern. Verbindlich ist die Auskunft der Behörde.`,
          ],
        },
        {
          type: "prose",
          h2: "Verbraucherstreitbeilegung",
          paras: [
            "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
        {
          type: "prose",
          h2: "Haftung für Inhalte und Links",
          paras: [
            "Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Diese Website enthält Links zu Seiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist der jeweilige Anbieter verantwortlich.",
          ],
        },
      ],
    },
    en: {
      slug: "legal-notice",
      nav: "Legal notice",
      metaTitle: `Legal notice | ${site.name}`,
      metaDescription: `Legal notice and provider identification for ${site.name}.`,
      eyebrow: "Legal",
      h1: "Legal notice",
      lead: "Information under § 5 of the German Digital Services Act (DDG). The German version is the binding one.",
      whatsapp: "Hello, I have a question.",
      blocks: [
        {
          type: "facts",
          h2: "Provider",
          items: [
            { label: "Business", value: `${site.name}, ${legalForm.en}` },
            { label: "Represented by", value: owner.en },
            { label: "Address", value: `${a.street}, ${a.postalCode} ${a.city} (${a.district}), Germany` },
            { label: "Phone", value: site.phone.display },
            { label: "Email", value: email.en },
            { label: "VAT", value: vat.en },
            ...(register ? [{ label: "Register", value: register.en }] : []),
          ],
        },
        {
          type: "prose",
          h2: "About our activity",
          paras: [
            `${site.name} is a private service provider, not a public authority. We act on behalf of our customers and under their power of attorney towards the registration office of the City of Wiesbaden. Information on this website about the office's fees, documents and procedures is based on what the city publishes and may change. The office's own information is authoritative.`,
          ],
        },
        {
          type: "prose",
          h2: "Consumer dispute resolution",
          paras: ["We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board."],
        },
        {
          type: "prose",
          h2: "Liability for content and links",
          paras: [
            "These pages were prepared with care. We give no guarantee that they are correct, complete or up to date. This website links to third-party sites whose content we do not control. The respective provider is responsible for that content.",
          ],
        },
      ],
    },
  },
  {
    id: "privacy",
    kind: "legal",
    updated,
    de: {
      slug: "datenschutz",
      nav: "Datenschutz",
      metaTitle: `Datenschutzerklärung | ${site.name}`,
      metaDescription: `Wie ${site.name} mit personenbezogenen Daten umgeht: Hosting, WhatsApp, Telefon und Ihre Rechte.`,
      eyebrow: "Rechtliches",
      h1: "Datenschutzerklärung",
      lead: "Diese Website setzt keine Cookies, kein Tracking und keine eingebetteten Inhalte Dritter ein. Daten entstehen erst, wenn Sie uns kontaktieren.",
      whatsapp: "Hallo, ich habe eine Frage zum Datenschutz.",
      blocks: [
        {
          type: "prose",
          h2: "Verantwortlicher",
          paras: [
            `Verantwortlich im Sinne der Datenschutz-Grundverordnung ist ${site.name}, ${owner.de}, ${a.street}, ${a.postalCode} ${a.city}. Telefon: ${site.phone.display}, E-Mail: ${email.de}.`,
          ],
        },
        {
          type: "prose",
          h2: "Aufruf der Website",
          paras: [
            "Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf verarbeitet der Hoster technisch notwendige Daten in Server-Logdateien: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem. Das ist erforderlich, um die Seite auszuliefern und vor Angriffen zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung. Die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework beziehungsweise Standardvertragsklauseln.",
            "Schriften werden von unserem eigenen Server geladen, nicht von Google. Es gibt keine Analyse-Werkzeuge, keine Werbenetzwerke und keine eingebetteten Karten oder Videos. Der Link zur Routenplanung öffnet Google Maps erst, wenn Sie ihn anklicken.",
          ],
        },
        {
          type: "prose",
          h2: "Kontakt per WhatsApp",
          paras: [
            "Wenn Sie uns über WhatsApp schreiben, verarbeiten wir Ihre Telefonnummer, Ihren Profilnamen und die Inhalte Ihrer Nachrichten, einschließlich Fotos von Fahrzeugpapieren und Ausweisen, um Ihre Anfrage zu beantworten und den Auftrag vorzubereiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
            "WhatsApp ist ein Dienst der WhatsApp Ireland Limited, Merrion Road, Dublin 4, Irland, die zum Meta-Konzern gehört. Die Nachrichten sind Ende-zu-Ende-verschlüsselt. Meta verarbeitet jedoch Metadaten, auch in den USA. Wenn Sie das nicht möchten, rufen Sie uns bitte an oder bringen Sie die Unterlagen persönlich vorbei.",
            "Schicken Sie uns bitte nur die Unterlagen, die wir für den Vorgang brauchen. Fotos löschen wir aus dem Chat, sobald der Auftrag abgeschlossen ist und keine Aufbewahrungspflicht entgegensteht.",
          ],
        },
        {
          type: "prose",
          h2: "Kontakt per Telefon und Auftragsabwicklung",
          paras: [
            "Bei einem Anruf verarbeiten wir Ihre Telefonnummer und die Angaben, die Sie uns machen. Für die Zulassung selbst verarbeiten wir die Daten aus Ihren Unterlagen: Name, Anschrift, Geburtsdatum, Ausweisdaten, Fahrzeugdaten, Bankverbindung für die Kfz-Steuer und die Versicherungsbestätigung. Wir geben sie an die Zulassungsbehörde der Landeshauptstadt Wiesbaden weiter, weil der Auftrag sonst nicht erfüllt werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.",
            "Rechnungen und Auftragsunterlagen bewahren wir nach den handels- und steuerrechtlichen Vorschriften auf, in der Regel bis zu zehn Jahre. Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO.",
          ],
        },
        {
          type: "prose",
          h2: "Ihre Rechte",
          paras: [
            "Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und auf Widerspruch gegen Verarbeitungen, die auf berechtigten Interessen beruhen.",
            "Sie können sich außerdem bei einer Datenschutzaufsichtsbehörde beschweren. Zuständig für uns ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.",
          ],
        },
      ],
    },
    en: {
      slug: "privacy",
      nav: "Privacy",
      metaTitle: `Privacy policy | ${site.name}`,
      metaDescription: `How ${site.name} handles personal data: hosting, WhatsApp, phone and your rights.`,
      eyebrow: "Legal",
      h1: "Privacy policy",
      lead: "This website uses no cookies, no tracking and no embedded third-party content. Data only arises when you contact us. The German version is the binding one.",
      whatsapp: "Hello, I have a question about data protection.",
      blocks: [
        {
          type: "prose",
          h2: "Controller",
          paras: [
            `The controller under the General Data Protection Regulation is ${site.name}, ${owner.en}, ${a.street}, ${a.postalCode} ${a.city}, Germany. Phone: ${site.phone.display}, email: ${email.en}.`,
          ],
        },
        {
          type: "prose",
          h2: "Visiting the website",
          paras: [
            "This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you open a page, the host processes technically necessary data in server log files: IP address, date and time, the page requested, browser and operating system. This is needed to deliver the page and protect it against attacks. The legal basis is Art. 6(1)(f) GDPR. A data processing agreement is in place with the host. Transfers to the USA rely on the EU-US Data Privacy Framework or standard contractual clauses.",
            "Fonts are loaded from our own server, not from Google. There are no analytics tools, no advertising networks and no embedded maps or videos. The directions link opens Google Maps only when you click it.",
          ],
        },
        {
          type: "prose",
          h2: "Contact via WhatsApp",
          paras: [
            "If you write to us on WhatsApp, we process your phone number, your profile name and the content of your messages, including photos of vehicle papers and ID documents, to answer your enquiry and prepare the job. The legal basis is Art. 6(1)(b) GDPR.",
            "WhatsApp is a service of WhatsApp Ireland Limited, Merrion Road, Dublin 4, Ireland, part of the Meta group. Messages are end-to-end encrypted, but Meta processes metadata, including in the USA. If you do not want that, please call us or bring your documents in person.",
            "Please send only the documents we need for the job. We delete photos from the chat once the job is finished and no retention duty applies.",
          ],
        },
        {
          type: "prose",
          h2: "Phone contact and handling your order",
          paras: [
            "When you call, we process your phone number and what you tell us. For the registration itself we process the data in your documents: name, address, date of birth, ID details, vehicle data, bank details for vehicle tax and the insurance confirmation. We pass them to the registration office of the City of Wiesbaden, because the job cannot be done otherwise. The legal basis is Art. 6(1)(b) GDPR.",
            "We keep invoices and order records as required by commercial and tax law, generally for up to ten years. The legal basis is Art. 6(1)(c) GDPR.",
          ],
        },
        {
          type: "prose",
          h2: "Your rights",
          paras: [
            "You have the right to information about the data stored about you, to rectification, erasure, restriction of processing, data portability, and to object to processing based on legitimate interests.",
            "You may also complain to a data protection supervisory authority. The one responsible for us is the Hessian Commissioner for Data Protection and Freedom of Information, Gustav-Stresemann-Ring 1, 65189 Wiesbaden.",
          ],
        },
      ],
    },
  },
];
