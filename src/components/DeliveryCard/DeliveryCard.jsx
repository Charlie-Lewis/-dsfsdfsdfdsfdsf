import s from "./DeliveryCard.module.scss";

const DeliveryCard = ({ src, alt, title, text }) => {
  return (
    <>
      <div className={s.block}>
        <img className={s.img} src={src} alt={alt} />
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};

export default DeliveryCard;
