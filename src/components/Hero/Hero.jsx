import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import text_img from "./text.svg";

const Hero = () => {
  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          {/* Replace the text image with a relevant one for Tech Fest */}
          <img src={text_img} className={classes.text_img} alt="Tech Fest VIT Bhopal" />

          <h4 className={classes.caption}>Unleash Innovation at Tech Fest 2025</h4>
          <p className={classes.date}>March 30-31, 2025</p>
          <Link
            className={classes.anchorBtn}
            rel="noopener noreferrer"
            to="/events"
          >
            <Button
              link="/events"
              label="Explore Our Events"
              className={classes.btn}
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
