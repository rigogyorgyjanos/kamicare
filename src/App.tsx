import About from "./components/About"
import Contact from "./components/Contact"
import ContactBrief from "./components/ContactBrief"
import Footer from "./components/Footer"
import Navbar from "./components/Header"
import Hero from "./components/Hero"
function App() {

  return (
    <>
      <main className="">
        <Navbar />
        <Hero />
        <ContactBrief />
        <About />
        <Contact
          phone="+36 30 123 4567"
          address="1157 Budapest, Zsókavár utca 52."
          note="Nyitvatartás: H–P 9:00–18:00 "
        />
        <Footer />
      </main>


    </>
  )
}

export default App
