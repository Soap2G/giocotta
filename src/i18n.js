// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "journal": "journal",
      "greeting": "Howdy, we are getting married!",
      "where-title": "Show me the way",
      "ceremony": "June 15th, 2024 at 15:30,<br/> <a>SS Faustino e Giovita</a>'s parish, Modena.",
      "battutina1": "Via Giardini 231, 41124, Modena (MO) <br/> Yep, it's a church, not a hangar :D",
      "fiesta-title": "Are you up for one hour of driving?",
      "fiesta-where": "We'll wait you here:",
      "thankyou": "Thank you.",
      "thankyou1": "We are deeply grateful to you all. <br/> For what you teach us, but most importantly, 'cause you are present. <br/> And not only when we party :)",
      "IBAN": "We're excited for your presence, not presents;<br/> in lieu of gifts, we would appreciate a contribution made to:",
      "donate": "We would like to donate a part of what we'll receive to the communities we'll meet during our <a>trip</a>. <br/> We'll try to blog this experience in a <Link>journal</Link>.<br/> The rest, we'd like to invest it in our passions, such as ",
      "cucina": "(good?) cooking.",
      "travel": "When we don't cook, we enjoy travelling.",
      "travel1": "Did we already mention that?",
      "rsvp": "Get in touch",
      "fullName": "Your name",
      "email": "Your email",
      "number": "Are there additional people?",
      "message": "Allergies, needs, suggestions, cheers, or dad-jokes. If you don't write anything, we'll tell you a dad's joke. In Italian.",
      "send": "SEND",
      "empty": "Wow, such empty!",
      "empty-why": "Why? Well, the journey hasn't yet begun.",
      "ready": "Ready to go! News should arrive soon (hopefully).",
      "countdown": "Come back in {{days}} days, {{hours}} hours, {{minutes}} minutes and {{seconds}} seconds.",
      "madeByUs": "made by us with",
      "andWith": "and with",
      "checkOur": "check out our"

    }
  },
  it: {
    translation: {
        "journal": "diario",
        "greeting": "Ciao, ci sposiamo!",
        "where-title": "Dimmi dove e quando",
        "ceremony": "Il 15 Giugno 2024 alle 15:30,<br/> nella parrocchia dei <a>SS Faustino e Giovita</a> a Modena.",
        "battutina1": "Via Giardini 231, 41124, Modena (MO) <br/> No, non è un hangar, è una chiesa :D",
        "fiesta-title": "Dopo vi va di farvi 1 ora di macchina?",
        "fiesta-where": "Vi aspettiamo qui:",
        "thankyou": "Grazie.",
        "thankyou1": "Siamo profondamente grati a tutti. <br/> Per quello che ci insegnate, ma soprattutto perchè ci siete. <br/> E non solo quando si festeggia :)",
        "IBAN": "Molto di quello che ci serve lo abbiamo già, ma se avete piacere di contribuire, <br/> potete utilizzare queste coordinate:",
        "donate": "Ci piacerebbe donare una parte di quello che ci verrà regalato alle comunità che visiteremo durante il nostro <a>viaggio</a>. <br/> Cercheremo di condividere questa esperienza in un piccolo <Link>diario</Link>.<br/> Il resto lo vorremmo investire in altre nostre passioni, come ",
        "cucina": "La (buona?) cucina.",
        "travel": "Quando non cuciniamo, ci piace viaggiare.",
        "travel1": "Lo avevamo già menzionato?",
        "rsvp": "Facci un fischio",
        "fullName": "Nome e cognome",
        "email": "La tua email",
        "number": "Ci sono ospiti aggiuntivi?",
        "message": "Intolleranze, necessità, consigli, saluti, o barzellette (freddure preferibili). Se non scrivi nulla te la raccontiamo noi una barzelletta.",
        "send": "INVIA",
        "empty": "Wow, non c'è niente!",
        "empty-why": "Perchè? Beh, il viaggio non è ancora cominciato.",
        "ready": "Pronti a partire! A breve arriveranno notizie (speriamo)",
        "countdown": "Ritorna fra {{days}} giorni, {{hours}} ore, {{minutes}} minuti e {{seconds}} secondi.",
        "madeByUs": "fatto da noi con il",
        "andWith": "e con",
        "checkOur": "fatti un giro sul nostro"

    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "it",
    fallbackLng: "it",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;