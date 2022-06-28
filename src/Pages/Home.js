import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/back.png";
import gown from "../images/style1.jpeg";
import spcs from "../images/spcs.jpg";
import bags from "../images/bag1.jpg";
import polo from "../images/polo1.jpg";
import image2 from "../images/logoi.png";
import Loading from "./Loading";
import "./home.css";
import {
  BsHandbag,
  BsHandbagFill,
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { GiLargeDress, GiTravelDress, GiPoloShirt } from "react-icons/gi";

const Home = () => {
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
            <div className="for1">
              <img src={image2} alt="logo" className="logofor1"></img>
            </div>
            <div className="for2">
              <h2>Welcome to</h2>
              <h2>AK Fashion Hub</h2>
            </div>
            <div className="for3">
              <p>
                Shop from our wide variety of wears and accessories ranging from
                gowns, 2pcs, polos and lots more
              </p>
            </div>
            <div className="for4">
              <Link to="/gowns" className="btn1">
                <img src={gown} alt="brans" className="categories"></img>
                Gowns
              </Link>
              <Link to="/2pcs" className="btn1">
                <img src={spcs} alt="brans" className="categories"></img>
                2psc
              </Link>
              <Link to="/bags" className="btn1">
                <img src={bags} alt="brans" className="categories"></img>
                Bags
              </Link>
              <Link to="/polo" className="btn1">
                <img src={polo} alt="brans" className="categories"></img>
                Polos
              </Link>
              <div className="bagsection">
                <BsHandbag className="forbag" />
                <h4>Go to Bag</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
