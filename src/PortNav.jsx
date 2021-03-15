import { useState } from "react";
import RLogo from "./RLogo.png";
import "./css/humburger.css";

const PortNav = () => {
  const [open, setopen] = useState(0);
  const [p_menu, set_p_menu] = useState("p_menu_hide");
  const [active, set_active] = useState("");

  const hum_menu_func = () => {
    console.log("clicked");
    if (open === 0) {
      console.log("Open");
      set_p_menu("p_menu_show");
      set_active('is-active')
      setopen(1);
    } else {
      console.log("close");
      set_p_menu("p_menu_hide");
      set_active('')

      setopen(0);
    }
  };

  return (
    <>
      <div className="p_nav">
        <div className="p_brand">
          <a href="/#home"><img className="p_brand_img" src={RLogo} alt="Rakib" /></a>
        </div>


        <button class={`hamburger hamburger--vortex hum_btn   ${active}`} onClick={hum_menu_func} type="button">
          <span class="hamburger-box set_color">
            <span class="hamburger-inner set_color"></span>
          </span>
        </button>

        <div className={`p_menu ${p_menu}`}>
          <a href="/#about">
            <span>01.</span>About
          </a>
          <a href="/#services">
            <span>02.</span>Services
          </a>
          <a href="/#projects">
            <span>03.</span>Projects
          </a>
          <a href="/#contact">
            <span>04.</span>Contact
          </a>
          <button className="resume_btn">Resume</button>
        </div>
      </div>

      {/* <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch> */}
    </>
  );
};

export default PortNav;
