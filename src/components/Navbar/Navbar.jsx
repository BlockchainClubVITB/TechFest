import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";

import * as Scroll from "react-scroll";

const Navbar = () => {
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Drop
            activeClass={classes.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            <Link to="/">
              <img src={Logo} alt="/" className={classes.logo} />
            </Link>
          </Drop>
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/">
                  Home
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>
            <Link to="/events">
              <li className={`${classes.dropLink}`}>
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </li>
            </Link>
            <li className={classes.navLink}>
              <Link to="/speakers" className={classes.homeLink}>
                Speakers
              </Link>
            </li>
            <li className={classes.navLink}>
              <Link to="/sponsors" className={classes.homeLink}>
                Sponsors
              </Link>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li>
          </ul>

          <div
            className={classes.hamburger}
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <ul className={classes.mobileNav}>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/">
                  Home
                </Link>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/about">
                  About
                </Link>
              </Drop>
            </li>
            <Link to="/events">
              <li className={`${classes.mobLink}`}>
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </li>
            </Link>
            <li>
              <Link
                onClick={() => setMobile(!mobile)}
                to="/speakers"
                className={classes.homeLink}
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMobile(!mobile)}
                to="/sponsors"
                className={classes.homeLink}
              >
                Sponsors
              </Link>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/contact">
                  Contact
                </Link>
              </Drop>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
