import s from "./Product.module.scss";

const Product = () => {
  return (
    <>
      <main className={s.main}>
        <section className={s.section}>
          <div className={s.container}>
            <h2 className={s.title}>
              Brown Sugar <br /> Oatmea
            </h2>

            <p className={s.text}>
              Together with McDonald’s, Burger King has grown to become
              synonymous with burgers in the US.Together with McDonald’s, Burger
              King has grown to become synonymous.
            </p>

            <button className={s.btn} type="button">
              See Details
            </button>
          </div>

          <img className={s.img} src="/ice_cream_2.png" alt="ice_cream_2" />
        </section>
      </main>
    </>
  );
};

export default Product;
