import "./message-style.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Captcha from './Captcha';

export const Message = () => {

  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const hasSubmitted = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const form = useRef();

  //----------------------------------
  // Update state of the recaptcha
  //----------------------------------
  const handleCaptchaChange = (value) => {
    setIsCaptchaValid(!!value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setSubmissionMessage("Per favore, completa il reCAPTCHA.");
      return;
    }

    const defaultMessage = [ "Non ha scritto nulla, quindi ecco una barzelletta: Perché le bambine piccole non possono comprare gli occhiali da sole? Perché devono essere accompagnate dai genitori.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Perché il pomodoro non riesce mai a dormire? Perché l’insalata… russa!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Qual è il colmo per due divorziati americani? Essere… stati uniti.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Come si chiamano i boy-scout che vanno in macchina? Le giovani marmitte!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Che cosa fa un gallo in chiesa? Il chicchirichetto!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Qual è il colmo per una giraffa? Essere nei guai fino al collo!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Basta, ho finito le battute in serbo. Ma se volete comincio con quelle in croato!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Per alcuni l'amore è cieco.. Per altri slovacco.. In ogni caso, ha sempre qualche sorpresa in serbo.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Annuncio: è morto l'inventore del CD. CD spiace.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Un postino cade dalla bici e si rompe un piede. Frattura con posta.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Cosa ci fanno due bicchieri in un'auto? Vanno a brindisi.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Presentatore TV muore per una scossa elettrica. Era un buon conduttore.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Ma se Pitagora va in barca, Teo rema? TEO REMA??",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Un Dino, due Dini, tre Dini... No non sono pazzo, sono un contaDino.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: A scuola ho studiato Napoleone, non tutto, ma Bonaparte.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Qual è il cane più cattivo? La can-aglia.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Mi scusi, per andare al cimitero dove devo prendere l'autobus? In faccia...",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Mi rifiuto. Disse il netturbino...",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Che cosa fanno otto cane in mare? Il can-otto!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Un uomo entra in un caffè. SPLASH!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: La funga dice al fungo: Sei un porcino!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Chiude una lavanderia. Faceva affari sporchi.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Qual è la città preferita dai ragni? Mosca!",
                          "Non ha scritto nulla, quindi ecco una barzelletta: La tuta di Batman? La Bat-tuta! :-)",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Se io mi metto la camicia di lino, poi Lino che si mette?",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Qual è il formaggio servito nei vagoni ristorante? La mozzarella in carrozza.",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Ma se un passerotto entra dentro un computer diventa un MicroCIP?",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Mario ha smesso di fare il muratore perché aveva paura del cemento armato...",
                          "Non ha scritto nulla, quindi ecco una barzelletta: Come si fa a capire se un motociclista è felice? Basta guardare se ha dei moscerini sui denti!",
    ]
    const defaultNumber = "nessun ospite aggiuntivo"; // Replace with your custom message

    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * defaultMessage.length);
      return defaultMessage[randomIndex];
    };

    const formElements = form.current.elements;
    if (!formElements.number.value) {
      formElements.number.value = defaultNumber;
    }
    if (!formElements.message.value) {
      formElements.message.value = formElements.message.value || getRandomMessage();
    }

    setIsSubmitting(true);
    emailjs.sendForm('service_t8sxek9', 'template_ta19zt5', form.current, '9477ur8cVpY-mQuB7')
      .then((result) => {
          console.log(result.text);
          setSubmissionMessage("Grazie, abbiamo informato Elisa e Giovanni. Statistiche per nerd: 200 OK");
          setIsCaptchaValid(false); // Reset reCAPTCHA
          hasSubmitted(true)
      }, (error) => {
          console.log(error.text);
          setSubmissionMessage("Mh, qualcosa è andato storto. Riprova.");
          hasSubmitted(false)
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="message-section">
      <div className="message-title">
        <h1 >
          Facci un fischio
        </h1>
      </div>

      <div
        // className=" op-class"
      >
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="fullName" placeholder="Nome e cognome" id="rsvpname" required/>
        <input type="text" name="email" placeholder="La tua email" id="rsvpemail" required/>
        <input type="text" name="number" placeholder="Ci sono ospiti aggiuntivi?" id="rsvpnumber" />
        <textarea name="message" placeholder="Intolleranze, necessità, consigli, saluti, o barzellette (freddure preferibili). Se non scrivi nulla te la raccontiamo noi una barzelletta." id="textrsvp" />
        <Captcha handleCaptchaChange={handleCaptchaChange}/>
        <input 
        id="submit"
        type="submit" 
        value="INVIA" 
        disabled={!isCaptchaValid || isSubmitting} 
        style={{ cursor: 'pointer', fontFamily: 'Averia Serif Libre', fontWeight: "bold" }}
        />
        {submissionMessage && <div className={hasSubmitted ? 'success-message' : 'error-message'}>{submissionMessage}</div>}
        </form>
      </div>
    </section>
  );
};