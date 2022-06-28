import { Link } from "react-router-dom";
import { useState } from "react";
import TpcsList from "./TpcsList";
import data from "./TpcsData";
import image1 from "../../images/updn.png";
import image2 from "../../images/logoi.png";
import "../home.css";
import {
  BsHandbag,
  BsHandbagFill,
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { GiLargeDress, GiTravelDress, GiPoloShirt } from "react-icons/gi";
import { BiHome } from "react-icons/bi";

const Tpcs = () => {
  const [eachTpcs, setEachTpcs] = useState(data);
  return (
    <section className="section">
      <div className="side1">
        <div className="inbox1">
          <div className="main1">
            <img src={image2} alt="logo" className="logo"></img>
            <div className="cate">
              <Link to="/" className="btn">
                <BiHome className="fornav" />
                Home
              </Link>
              <Link to="/gowns" className="btn">
                <GiLargeDress className="fornav" />
                Gowns
              </Link>
              <Link to="/Tpcs" className="btn">
                <GiTravelDress className="fornav" />
                2psc
              </Link>
              <Link to="/bags" className="btn">
                <BsHandbagFill className="fornav" />
                Bags
              </Link>
              <Link to="/polo" className="btn">
                <GiPoloShirt className="fornav" />
                Polos
              </Link>
            </div>
            <div className="socials">
              <Link to="/polo" className="btn">
                <BsWhatsapp className="fornavb" />
              </Link>
              <Link to="/polo" className="btn">
                <BsFacebook className="fornavb" />
              </Link>
              <Link to="/polo" className="btn">
                <BsInstagram className="fornavb" />
              </Link>
            </div>
          </div>
          <div className="main2">
            <img src={image1} alt="backs" className="forgraphics"></img>
          </div>
        </div>
      </div>
      <div className="side2">
        <div className="inbox2">
          <div className="main3">
            <div className="overflow-list">
              <TpcsList eachTpcs={eachTpcs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tpcs;
