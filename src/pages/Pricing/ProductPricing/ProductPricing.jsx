import { useContext } from "react";
import s from "./ProductPricing.module.scss";
import { Context } from "../../../context/Context";
import PricingCard from "../../../components/PricingCard/PricingCard";

const ProductPricing = () => {
  const { dataPricing, pricing } = useContext(Context);

  return (
    <>
      <div className={s.container}>
        {!!pricing
          ? dataPricing
              .filter(
                (el) => el.subtitle.toLowerCase() === pricing.toLowerCase()
              )
              .map((el) => (
                <div key={el.id}>
                  <PricingCard
                    flexDirection={el.flexDirection}
                    subtitle={el.subtitle}
                    text={el.text}
                    price={el.price}
                    line={el.line}
                    src={el.src}
                  />
                </div>
              ))
          : dataPricing.map((el) => (
              <div key={el.id}>
                <PricingCard
                  flexDirection={el.flexDirection}
                  subtitle={el.subtitle}
                  text={el.text}
                  price={el.price}
                  line={el.line}
                  src={el.src}
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default ProductPricing;
