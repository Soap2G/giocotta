import "./message-style.css";

const Message = () => {
  return (
    <section data-scroll-section className="message-section">
      <div className="message-title">
        <h1 
        data-scroll 
        data-scroll-speed="1">
          Facci un fischio
        </h1>
        {/* <p
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
          className="message-h2"
        >
          Ti va di fare 1 ora di macchina?      
        </p> */}
      </div>

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
      </div>
    </section>
  );
};

export default Message;
