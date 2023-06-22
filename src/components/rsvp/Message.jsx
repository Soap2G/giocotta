import "./message-style.css";

const Message = () => {
  return (
    <section data-scroll-section className="message-section">
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="2"
        className="message"
      >
        Ti va di fare 1 ora di macchina?      </p>
      <div
        className=" op-class"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-class="fadeIn"
        data-scroll-speed="1"
      >
        <input type="text" name="fullName" placeholder="Nome e cognome" id="" />
        <input type="text" name="email" placeholder="Quanti ospiti aggiuntivi?" id="" />
        <textarea name="" placeholder="Intolleranze, necessità, consigli, saluti, o barzellette (freddure preferibili)" id="" />
        <input type="text" name="email" placeholder="Quanti ospiti aggiuntivi?" id="" />
      </div>
    </section>
  );
};

export default Message;
