import { useContext } from "react";
import s from "./LinksPricing.module.scss";
import { Context } from "../../../context/Context";

const LinksPricing = () => {
  const { dataPricing, setPricing } = useContext(Context);

  return (
    <>
      <ul className={s.links}>
        <li className={s.link} onClick={() => setPricing("")}>
          ICE CREAM
        </li>

        {dataPricing.map((el) => (
          <li
            key={el.id}
            className={s.link}
            onClick={(e) => setPricing(e.target.textContent)}
          >
            {el.subtitle}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LinksPricing;
