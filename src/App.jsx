import "./App.scss";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Testimonials from "./pages/Testimonials/Testimonials";
import ContactUs from "./pages/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
