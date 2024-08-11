import { useContext } from 'react';
import s from './ContactUs.module.scss';
import { Context } from '../../context/Context';

const ContactUs = () => {
  const { sendTelegramMessage, message } = useContext(Context);
  return (
    <>
      <main className={s.main}>
        <h2 className={s.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>

        <form
          className={s.form}
          onSubmit={(e) => sendTelegramMessage(message.message, e)}
        >
          <input
            onChange={(e) => (message.message = e.target.value)} className={s.inp}
            placeholder="Enter Your Question"
            type="text"
          />
          <button className={s.btn} type="submit">
            send
          </button>
        </form>
      </main>
    </>
  );
};

export default ContactUs;
