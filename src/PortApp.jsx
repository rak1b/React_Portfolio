import PortNav from "./PortNav";
import "./css/index.css";
import PortHero from "./PortHero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";



const PortApp = () => {
  const[blur,make_blur] = useState()

  const blur_func =(check)=>{
    if(check===1){
      make_blur('make_blur')
    }
    else{
      make_blur('')

    }
    
  }
  return (
    <>
      <PortNav blur_func={blur_func} />
      <div className={`${blur}`}>
        <PortHero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default PortApp;
