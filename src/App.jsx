import Navbar from "./components/Navbar/navbar"
import Hero from "./components/Hero/hero"
import Portfolio from "./components/Portfolio/portfolio";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './index.css'
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
  useEffect(() =>{
    Aos.init();
  }, []);
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
