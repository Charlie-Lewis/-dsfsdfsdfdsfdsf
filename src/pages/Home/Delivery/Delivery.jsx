import DeliveryCard from "../../../components/DeliveryCard/DeliveryCard";
import s from "./Delivery.module.scss";

const Delivery = () => {
  return (
    <>
      <section className={s.section}>
        <DeliveryCard
          src={"/bus.svg"}
          alt={"bus"}
          title={"Free Shipping"}
          text={"Last Chance! Free shipping on all orders ends today."}
        />

        <DeliveryCard
          src={"/wok.svg"}
          alt={"wok"}
          title={"Quick Packaging"}
          text={"Last Chance! Free shipping on all orders ends today."}
        />

        <DeliveryCard
          src={"/cash.svg"}
          alt={"cash"}
          title={"100% Money Back"}
          text={"Last Chance! Free shipping on all orders ends today."}
        />

        <DeliveryCard
          src={"/delivery.svg"}
          alt={"delivery"}
          title={"Fast Delivery"}
          text={"Last Chance! Free shipping on all orders ends today."}
        />
      </section>
    </>
  );
};

export default Delivery;
