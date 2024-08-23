import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "../../components/navbar/Navbar";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Contact from "./pages/contact-us/Contact";
import Footer from "../../components/footer/footer";

/*
! THIS IS THE ROUTES FOR ALL THE PAGES APART FROM THE DASHBOARD PAGES.
*/
const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
