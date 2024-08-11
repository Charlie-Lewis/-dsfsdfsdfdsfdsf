import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.block}>
            <h2 className={s.subtitle}>Sweet fun, full of milk.</h2>

            <h1 className={s.title}>
              Feel inside cold with our delicious
              <span className={s.lead}> ice-cream.</span>
            </h1>

            <p className={s.text}>
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts, my words.
            </p>

            <button className={s.btn} type="button">
              Buy Now
            </button>
          </div>

          <img className={s.img} src="/ice_cream_1.png" alt="ice_cream_1" />
        </div>
      </header>
    </>
  );
};

export default Hero;
