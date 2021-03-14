import PortNav from "./PortNav";
import "./css/index.css";
import PortHero from "./PortHero";

const PortApp = () => {
  return (
    <>
      <PortNav />
      <div className="port_container">
        <PortHero />
      </div>
    </>
  );
};

export default PortApp;
