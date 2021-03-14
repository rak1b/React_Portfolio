import { Route, Switch, NavLink, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import LogoRak1b from "./LogoRak1b.png";
import RkLogo from "./RkLogo.png";
import RLogo from "./RLogo.png";
import RL from "./RL.png";

const PortNav = () => {
  const [open, setopen] = useState(0);
  const [block_none, setblock_none] = useState("none");
  const [translate, set_translate] = useState("100%");

  const rk = "";
  console.log(block_none);
  const hum_menu_func = () => {
    console.log("clicked");
    if (open === 0) {
      console.log("Open");
      set_translate("translateX(0%)");
      setblock_none("visible");
      setopen(1);
      // const rk = rk + "Added_Classname";
    } else {
      console.log("close");
      setblock_none("hidden");
      set_translate("translateX(100%)");
      setopen(0);
      // rk = rk + "removed_Classname";
    }
  };

  return (
    <>
      <div className="p_nav">
        <div className="p_brand">
          {/* <h4>R</h4> */}
          {/* <img src={LogoRak1b} alt='Rakib'/> */}
          {/* <img src={RL} alt='Rakib'/> */}
          <img className="p_brand_img" src={RLogo} alt="Rakib" />
        </div>

        <div className={`hum_menu ${rk}`} onClick={hum_menu_func}>
          {/* <MenuIcon className="hum_icon" /> */}
          <div className="line1 lines"></div>
          <div className="line2 lines"></div>
          <div className="line3 lines"></div>
        </div>

        <div
          className="p_menu"
          style={{
            visibility: block_none,
            transform: translate,
            transition: "var(--transition)",
          }}
        >
          <NavLink to="/about">
            <span>01.</span>About
          </NavLink>
          <NavLink to="/services">
            <span>02.</span>Services
          </NavLink>
          <NavLink to="/projects">
            <span>03.</span>Projects
          </NavLink>
          <NavLink to="/contact">
            <span>04.</span>Contact
          </NavLink>
          <button className="resume_btn">Resume</button>
        </div>
      </div>

      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default PortNav;
