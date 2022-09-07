import React from "react";
import "./hero.css";
import PropTypes from "prop-types";
const Hero = (props) => {
  const Herostyle = {
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      <div className="hero" style={Herostyle}>
        <div className="hero-text">
          <h1 className="hero-text--heading">
            {props.normalText1}{" "}
            <span className="grad-span">{props.highlightedText1}</span>{" "}
            {props.normalText2}{" "}
            {props.normalText3}
          </h1>
          <h2 className="hero-text--subtitle">
            {props.normalText4}{" "}
            <span className="grad-span extra-bold">
              {props.highlightedText3}
            </span>{" "}
            {props.normalText5}<br/>
            {props.normalText6}<br/>
            {props.normalText7}
          </h2>
          <button className="get-a-quote">{props.buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
Hero.prototype = {
  normalText1: PropTypes.string.isRequired,
  normalText2: PropTypes.string.isRequired,
  normalText3: PropTypes.string.isRequired,
  normalText4: PropTypes.string.isRequired,
  normalText5: PropTypes.string.isRequired,
  highlightedText1: PropTypes.string.isRequired,
  highlightedText3: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  normalText1: "",
  normalText2: "",
  normalText3: "",
  normalText4: "",
  normalText5: "",
  normalText6: "",
  normalText7: "",
  highlightedText1: "",
  highlightedText3: "",
  buttonText: "",
};
