// AddedLinks.js

import React, { useState } from "react";
import devLinkLogo from "./assets/images/logo-devlinks-large.svg";
import iphoneIcon from "./assets/images/illustration-phone-mockup.svg";
import links from "./assets/images/icon-link.svg";
import profile from "./assets/images/icon-profile-details-header.svg";
import chevronDown from "./assets/images/icon-chevron-down.svg";

import { useNavigate } from "react-router-dom";

import "./AddedLinks.css";

const AddedLinks = () => {
  const navigate = useNavigate();

  const [hide, setHide] = useState(true);
  const [selectedButton, setSelectedButton] = useState("links");

  const handleDropDown = () => {
    setHide(!hide); // Toggle the hide state
    console.log("I just clicked");
  };

  return (
    <section>
      <div className="nav-container">
        <div className="innerNav-container">
          <img src={devLinkLogo} alt="dev link logo" />
          <div className="linksDetails">
        <button
          onClick={() => {
            navigate("/AddedLinks");
            setSelectedButton("links");
          }}
          className={`links-button ${selectedButton === "links" ? "activeButton" : ""}`}
        >
          <img src={links} alt="links" />
          Links
        </button>
        <button
          onClick={() => {
            navigate("/Profile");
            setSelectedButton("profile");
          }}
          className={`profile-button ${selectedButton === "profile" ? "activeButton" : ""}`}
        >
          <img src={profile} alt="profile" />
          <span>Profile Details</span>
        </button>
      </div>
          <button onClick={() => navigate('/preview')}>Preview</button>
        </div>
      </div>
      <div className="main-container">
        <div className="phoneIcon">
          <div className="phone">
            <img src={iphoneIcon} alt="phone icon" />
          </div>
        </div>
        
        <div className="AddedOneLink-customisation">
          <div className="customisationHeaderParagraph">
            <h1>Customize your links</h1>
            <p>
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="newLink-section">
            <div className="AddedOneLink-newLink">
              <button
                className="AddedOneLink-addLinkBtn"
                onClick={() => navigate("/AddedLinks")}
              >
                +Add new link
              </button>
            </div>

            <div className="linkOneContainer">
              <div className="linkNumTwoHeader">
                <div>
                  <p>=Link #1</p>
                </div>
                <div>Remove</div>
              </div>
              <form>
                <div className="youtube-cont">
                  <div className="space">
                    <img src={chevronDown} alt="" className="arrowDown" />
                    <label htmlFor="">Platform</label>
                    <input
                      type="text"
                      placeholder="Youtube"
                      onClick={handleDropDown}
                    />
                  </div>
                  <div className={`dropdown ${hide ? "hidden" : ""}`}>
                    <p>Dropdown Content</p>
                  </div>
                </div>
              </form>
            </div>

            <div className="linkTwoContainer">
              <div className="linkNumTwoHeader">
                <div>
                  <p>=Link #2</p>
                </div>
                <div>Remove</div>
              </div>
              <form>
                <div className="youtube-cont">
                  <div className="space">
                    <img src={chevronDown} alt="" className="arrowDown" />
                    <label htmlFor="">Platform</label>
                    <input
                      type="text"
                      placeholder="Youtube"
                      onClick={handleDropDown}
                    />
                  </div>
                  <div className={`dropdown ${hide ? "hidden" : ""}`}>
                    <p>Dropdown Content</p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="AddedLinksaveBtn">
            <button className="AddedOneLinksave">save</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddedLinks;
