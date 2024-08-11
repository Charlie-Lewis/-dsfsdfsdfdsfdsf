import s from "./TestimonialsInfo.module.scss";

const TestimonialsInfo = ({ src, text, alt }) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.block}>
          <img src={src} alt={alt} />
        </div>

        <p className={s.text}>{text}</p>
      </div>
    </>
  );
};

export default TestimonialsInfo;
