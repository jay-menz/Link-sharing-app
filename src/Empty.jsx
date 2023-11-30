import React, { useState } from "react";
import devLinkLogo from "./assets/images/logo-devlinks-large.svg";
import iphoneIcon from "./assets/images/illustration-phone-mockup.svg";
import fingerSwipe from "./assets/images/illustration-empty.svg";
import links from "./assets/images/icon-link.svg";
import profile from "./assets/images/icon-profile-details-header.svg";
import { useNavigate } from "react-router-dom";

import "./Empty.css";

const Empty = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("links");

  const handleButtonClick = (button) => {
    console.log("BUTTON CLICKED:::", button)
    if(activeButton !== button){
      setActiveButton(button);
      navigate(`/${button}`);
    }
  };

  console.log("ACTIVE BUTTON:::", activeButton);

  return (
    <section>
      <div class="nav-container">
        <div class="innerNav-container">
          <img src={devLinkLogo} alt="dev link logo" className="emptyLogo" />
          <div class="linksDetails">
            <button onClick={() => handleButtonClick("links")}
            className={activeButton === "links" ? "activeButton" : ""}
            >
              <img src={links} alt="links" />
              Links
            </button>

              <button 
              onClick={() => handleButtonClick("profile")}
              className={activeButton === "profile" ? "activeButton" : ""}
              >
                <img src={profile} alt="profile" />
                <span>Profile Details</span>
              </button>

          </div>
          <button onClick={() => navigate("/preview")}>Preview</button>
        </div>
      </div>
      <div className="main-container">
        <div className="phoneIcon">
          <div className="phone">
            <img src={iphoneIcon} alt="phone icon" />
          </div>
        </div>
        <div className="empty-customisation">
          <div className="customisationHeaderParagraph">
            <h1>Customize your links</h1>
            <p>
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="newLink-section">
            <div className="emptyNewLink">
              <button
                className="addLinkBtn"
                onClick={() => navigate("/AddedOneLink")}
              >
                +Add new link
              </button>
            </div>
            <div className="getStarted">
              <div className="phoneSwipe">
                <img src={fingerSwipe} alt="swiping phone" />
              </div>
              <div className="getStartedHeaderParagraph">
                <h1>Let's get you started</h1>
                <p>
                  Use the "Add new link" button to get started. Once you have
                  more <br />
                  than one link, you can reorder and edit them. We're here to
                  help <br />
                  you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        <button className="saveBtnn">save</button>
      </div>
    </section>
  );
};

export default Empty;
