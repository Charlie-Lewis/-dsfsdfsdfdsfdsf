import TestimonialsInfo from "../../components/TestimonialsInfo/TestimonialsInfo";
import TestimonialsLink from "../../components/TestimonialsLink/TestimonialsLink";
import s from "./Testimonials.module.scss";

const Testimonials = () => {
  return (
    <>
      <main className={s.main}>
        <section className={s.section}>
          <img className={s.imgMaks} src="/mask.png" alt="mask" />

          <div className={s.container}>
            <h2 className={s.title}>Simple Way To Order Your Food</h2>

            <p className={s.text}>
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts.
            </p>

            <div className={s.block_1}>
              <TestimonialsInfo
                src={"/hand.svg"}
                text={"Select Your Food"}
                alt={"hand"}
              />

              <TestimonialsInfo
                src={"/cart.svg"}
                text={"Add To Cart"}
                alt={"cart"}
              />

              <TestimonialsInfo
                src={"/paper.svg"}
                text={"Order Your Food"}
                alt={"paper"}
              />
            </div>

            <div className={s.block_2}>
              <TestimonialsLink
                href={"https://play.google.com/"}
                src={"/google.svg"}
                alt={"google"}
              />

              <TestimonialsLink
                href={"https://www.apple.com/app-store/"}
                src={"/app.svg"}
                alt={"app"}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonials;
