import LinksPricing from "./LinksPricing/LinksPricing";
import s from "./Pricing.module.scss";
import ProductPricing from "./ProductPricing/ProductPricing";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";

const Pricing = () => {
  return (
    <>
      <main className={s.main}>
        <h2 className={s.title_1}>Our Product</h2>

        <LinksPricing />
        <ProductPricing />

        <div className={s.container}>
          <div className={s.block}>
            <div className={s.box_1}>
              <img className={s.img} src="/user.svg" alt="user" />

              <div className={s.holder}>
                <h2 className={s.title_2}>Adele A. McNeill</h2>
                <h3 className={s.subtitle}>AMIRICAN</h3>
              </div>
            </div>

            <p className={s.text}>
              Thanks a lot for the prompt service. Really appreciate. Excellence
              taste in Every Bite.Add a joy of best Taste. Foodie Moments.
            </p>

            <div className={s.box_2}>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                navigation
                spaceBetween={50}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 120,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="/user.svg" alt="user" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/user.svg" alt="user" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/user.svg" alt="user" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src="/user.svg" alt="user" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <img className={s.imgIce} src="/ice_cream_6.png" alt="ice_cream_6" />
        </div>
      </main>
    </>
  );
};

export default Pricing;
