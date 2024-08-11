import { Link } from "react-router-dom";
import s from "./Nav.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Nav = () => {
  const { setBurger } = useContext(Context);

  return (
    <>
      <nav className={s.nav}>
        <BurgerMenu />

        <div className={s.container}>
          <Link to={"/"}>
            <img className={s.img} src="/logo.svg" alt="logo" />
          </Link>

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

          <div
            className={s.burger_menu}
            onClick={() => setBurger((prev) => !prev)}
          >
            <span className={s.line}></span>
            <span className={s.line}></span>
            <span className={s.line}></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
