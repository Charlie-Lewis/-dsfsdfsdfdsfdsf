import axios from 'axios';
import { createContext, useState } from 'react';
import { toast, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [burger, setBurger] = useState(false);
  const [pricing, setPricing] = useState('');

  const dataPricing = [
    {
      id: 1,
      flexDirection: false,
      subtitle: 'Cake Batter',
      text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
      price: '$19.55',
      line: '$22.55',
      src: '/ice_cream_3.png',
    },
    {
      id: 2,
      flexDirection: true,
      subtitle: 'Cayenne chocolate',
      text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
      price: '$19.55',
      line: '$22.55',
      src: '/ice_cream_4.png',
    },
    {
      id: 3,
      flexDirection: false,
      subtitle: 'Candy Cane',
      text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
      price: '$19.55',
      line: '$22.55',
      src: '/ice_cream_5.png',
    },
    {
      id: 4,
      flexDirection: true,
      subtitle: 'Platters',
      text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
      price: '$19.55',
      line: '$22.55',
      src: '/ice_cream_3.png',
    },
    {
      id: 5,
      flexDirection: false,
      subtitle: 'Dessert',
      text: 'Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.',
      price: '$19.55',
      line: '$22.55',
      src: '/ice_cream_4.png',
    },
  ];

  const sendTelegramMessage = async (message, e) => {
    e.preventDefault();

    if (message === '') return notify.warn();

    const sendMessage = `Message: ${message}`;

    const token = '7446885782:AAF8i2rKNUHINv4uW06bzwnKYXkUJIpS-Io';
    const chatId = '-4244449418';
    const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await axios.post(urlApi, {
        chat_id: chatId,
        text: sendMessage
      });
      notify.success();
    } catch (error) {
      console.log(error);
      notify.error;
    }
  };

  const message = {
    message: '',
  };

  const toastEmitter = {
      position: "bottom-center",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
      };

      const notify = {
        success() {
      toast.success("Отправлено ишак", toastEmitter)
        },

        error()  {
      toast.error("долбаеб ты код сломал", toastEmitter)
        },

      warn() {
        toast.warn(" напиши что нибудь дэбил", toastEmitter)
      }
      }

  return (
    <Context.Provider
      value={{
        burger,
        setBurger,
        pricing,
        setPricing,
        sendTelegramMessage,
        dataPricing,
        message,
      }}
    >
      {children}
    </Context.Provider>
  );
};
