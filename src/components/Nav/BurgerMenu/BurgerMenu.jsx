import { Link } from "react-router-dom";
import s from "./BurgerMenu.module.scss";
import { useContext } from "react";
import { Context } from "../../../context/Context";

const BurgerMenu = () => {
  const { burger, setBurger } = useContext(Context);

  return (
    <>
      <aside
        className={burger ? `${s.aside} ${s.active}` : s.aside}
        onClick={() => setBurger((prev) => !prev)}
      >
        <div className={s.container} onClick={(e) => e.stopPropagation()}>
          <div className={s.close} onClick={() => setBurger((prev) => !prev)}>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>

          <ul className={s.links}>
            <Link className={s.link} to={"/"}>
              Home
            </Link>
            <Link className={s.link} to={"/product"}>
              Product
            </Link>
            <Link className={s.link} to={"/pricing"}>
              Pricing
            </Link>
            <Link className={s.link} to={"/testimonials"}>
              Testimonials
            </Link>
            <Link className={s.link} to={"/contact_us"}>
              Contact Us
            </Link>
          </ul>

          <button className={s.btn}>Buy Now</button>
        </div>
      </aside>
    </>
  );
};

export default BurgerMenu;
