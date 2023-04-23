import React from "react";
import "./footer.scss";
import {
  ICDiscord,
  ICFacebook,
  ICGithub,
  ICInstagram,
  ICWhatsapp,
  KabayanCoding,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img src={img} alt="icon" className="icon-medsos" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img src={KabayanCoding} alt="Logo Kabayan Coding" className="logo" />
        </div>
        <div className="social-wrapper ">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICWhatsapp} />
          <Icon img={ICGithub} />
          <Icon img={ICDiscord} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
