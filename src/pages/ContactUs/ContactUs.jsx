import { useContext } from "react";
import s from "./ContactUs.module.scss";
import { Context } from "../../context/Context";

const ContactUs = () => {
  const { sendTelegramMessage, message } = useContext(Context);

  return (
    <>
      <main className={s.main}>
        <h2 className={s.title}>Have Question in Mind? Let us help you</h2>

        <form
          className={s.form}
          onSubmit={(e) => sendTelegramMessage(message.message, e)}
        >
          <input
            onChange={(e) => (message.message = e.target.value)}
            className={s.inp}
            type="text"
            placeholder="Enter your question"
          />

          <button className={s.btn} type="submit">
            Send
          </button>
        </form>
      </main>
    </>
  );
};

export default ContactUs;
