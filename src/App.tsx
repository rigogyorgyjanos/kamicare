import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import ContactBrief from "./components/ContactBrief"
import Footer from "./components/Footer"
import Navbar from "./components/Header"
import Hero from "./components/Hero"
import Hazirend from "./pages/Hazirend"
import Services from "./pages/Services";
import ScrollToHash from "./components/ScrollToHash";
import Munkaim from "./pages/Munkaim";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hazirend" element={<Hazirend />} />
        <Route path="/szolgaltatasok" element={<Services />} />
        <Route path="/munkaim" element={<Munkaim />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}



function Home() {
  return (
    <>
      <Hero />
      <ContactBrief />
      <About />
      <Contact
        phone="+36 30 123 4567"
        address="1157 Budapest, Zsókavár utca 52. földszint"
        note="Nyitvatartás: H–P 7:00–20:00 "
      />
    </>
  );
}

