import s from "./PricingCard.module.scss";

const PricingCard = ({ flexDirection, src, subtitle, text, price, line }) => {
  return (
    <>
      <div
        className={s.container}
        style={{ flexDirection: flexDirection && "row-reverse" }}
      >
        <img className={s.img} src={src} alt="broken" />

        <div className={s.block}>
          <h2 className={s.subtitle}>{subtitle}</h2>

          <p className={s.text}>{text}</p>

          <p className={s.price}>
            {price} <span className={s.line}>{line}</span>
          </p>

          <button className={s.btn}>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
