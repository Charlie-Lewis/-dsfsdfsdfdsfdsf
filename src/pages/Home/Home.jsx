import Delivery from "./Delivery/Delivery";
import Hero from "./Hero/Hero";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Hero />

      <main>
        <Delivery />
      </main>
    </>
  );
};

export default Home;
