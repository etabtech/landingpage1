import React, { Component } from "react";
import "../Assets/css/Navbar.css";
import { Link } from "react-scroll";
import etablogo from "../Assets/images/etablogo.png";
export default class Navbar extends Component {
  clickeed = () => {
    let navbar = document.getElementById("nav");
    let burgur = document.querySelector(".burger");
    navbar.classList.toggle("displayy");
    let line = document.getElementsByClassName("line");
    line[0].classList.toggle("line0");
    line[1].classList.toggle("line1");
    line[2].classList.toggle("line2");
  };
  render() {
    return (
      <div>
        <header className="header">
          <div>
            {" "}
            <img src={etablogo} alt="" />{" "}
          </div>
          <nav className="navbar" id="nav">
            <ul>
              <li>
                <Link
                  to="Features"
                  className="hoverr"
                  style={{ color: "#0D65D9" }}
                  spy={true}
                  offset={50}
                  duration={500}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="How_we_work"
                  className="hoverr"
                  spy={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  How we work
                </Link>
              </li>
              <li>
                <Link
                  to="Testrimonials"
                  className="hoverr"
                  spy={true}
                  offset={50}
                  duration={500}
                >
                  Testrimonials
                </Link>
              </li>
              <li>
                <Link
                  to="About_Us"
                  className="hoverr"
                  spy={true}
                  offset={50}
                  duration={500}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="hoverr"
                  spy={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="burger" onClick={() => this.clickeed()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </header>
      </div>
    );
  }
}
