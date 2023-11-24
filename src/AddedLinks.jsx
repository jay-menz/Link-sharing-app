import React from "react";
import devLinkLogo from "./assets/images/logo-devlinks-large.svg";
import iphoneIcon from "./assets/images/illustration-phone-mockup.svg";
import fingerSwipe from "./assets/images/illustration-empty.svg";
import links from "./assets/images/icon-link.svg";
import profie from "./assets/images/icon-profile-details-header.svg";
import dragDrop from "./assets/images/icon-drag-and-drop.svg";
import githubImg from "./assets/images/icon-github.svg";
import youtubeImg from './assets/images/icon-youtube.svg';
import linkedInImg from "./assets/images/icon-linkedin.svg";
import facebookImg from "./assets/images/icon-facebook.svg";
import frontendmentorImg from "./assets/images/icon-frontend-mentor.svg";
import chevronDown from "./assets/images/icon-chevron-down.svg";
import iconLink from "./assets/images/icon-link-copied-to-clipboard.svg";

import { useNavigate } from "react-router-dom";

import "./AddedLinks.css";

const AddedLinks = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div class="nav-container">
        <div class="innerNav-container">
          <img src={devLinkLogo} alt="dev link logo" />
          <div class="linksDetails">
            <button>
              <img src={links} alt="links" />
              Links
            </button>
            <button onClick={() => navigate("/Profile")}>
              <img src={profie} alt="profile" />
              <span>Profile Details</span>
            </button>
          </div>
          <button>Preview</button>
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
              <div className="linkNumTwoHeader"></div>
            </div>

            <div className="linkTwoContainer">
              <div className="linkNumTwoHeader">
                <div>
                  <p>=Link 2</p>
                </div>
                <div>Remove</div>
              </div>
              <div>
                <label htmlFor="">Platform</label>
                <input type="text" placeholder="Youtube" />
                <img src={youtubeImg} alt="/" />
                <input type="text" placeholder="GitHub" />
                <img src={githubImg} alt="/" />
                <input type="text" placeholder="LinkedIn" />
                <img src={linkedInImg} alt="/" />
                <input type="text" placeholder="Facebook" />
                <img src={facebookImg} alt="/" />
                <input type="text" placeholder="Frontend Mentor" />
                <img src={frontendmentorImg} alt="/" />
              </div>
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
