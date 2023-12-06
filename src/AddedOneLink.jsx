import React, { useState } from "react";
import devLinkLogo from "./assets/images/logo-devlinks-large.svg";
import iphoneIcon from "./assets/images/illustration-phone-mockup.svg";
import fingerSwipe from "./assets/images/illustration-empty.svg";
import links from "./assets/images/icon-link.svg";
import profie from "./assets/images/icon-profile-details-header.svg";
import dragDrop from "./assets/images/icon-drag-and-drop.svg";
import githubImg from "./assets/images/icon-github.svg";
import youtubeImg from "./assets/images/icon-youtube.svg";
import linkedInImg from "./assets/images/icon-linkedin.svg";
import facebookImg from "./assets/images/icon-facebook.svg";
import frontendmentorImg from "./assets/images/icon-frontend-mentor.svg";
import chevronDown from "./assets/images/icon-chevron-down.svg";
import iconLink from "./assets/images/icon-link-copied-to-clipboard.svg";
import arrowRight from "./assets/images/icon-arrow-right.svg";

import { useNavigate } from "react-router-dom";

import "./AddedOneLink.css";

const AddedOneLink = () => {
  const [hide, setHide] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [linkOneErrorSaveButton, setLinkOneErrorSaveButton] =
    React.useState(true);

  const [linkOneEmpty, setLinkOneEmpty] = React.useState("");

  const handleOnChangeLinkOneEmpty = (event) => {
    setLinkOneEmpty(event.target.value);
  };

  //error and success message
  const [linkOneEmptyError, setLinkOneEmptyError] = React.useState(false);
  const [linkOneEmptyErrorMessage, setLinkOneEmptyErrorMessage] =
    React.useState("");

  const [showSaveButton, setShowSaveButton] = React.useState(true); //show save button on load
  const [showLoadingg, setShowLoadingg] = React.useState(false); //show loading state when button is clicked

  const [linkOneBorderError, setLinkOneBorderError] = React.useState(false); //set border error to the color red
  const [inputError, setInputError] = React.useState(false); //set error to the color red when the input space is empty

  const handleDropDown = () => {
    setHide(!hide); // Toggle the hide state
    console.log("I just clicked");
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setHide(true);
  };

  const handleLinkOneSaveBtn = async () => {
    //validate the link1 field before granting access
    let checkErrorSum = 0;

    if (linkOneEmpty == "" || linkOneEmpty == null) {
      setLinkOneEmptyError(true);
      setLinkOneEmptyErrorMessage("Can't be empty");
      setLinkOneBorderError(true);
      setInputError(true);

      setTimeout(() => {
        setLinkOneEmptyError();
        setLinkOneEmptyErrorMessage("");
        setLinkOneBorderError(false);
        setInputError(false);
      }, 5000);

      checkErrorSum++;
    }
  };

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
          <button onClick={() => navigate("/preview")}>Preview</button>
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
          </div>

          <div className="linkOneContainer">
            <div className="linkNumTwoHeader">
              <p>= Link #1</p>
              <p>Remove</p>
            </div>
            <form>
              <div className="youtube-cont">
                <p className="platform-text">Platform</p>
                <div className="input-with-icon">
                  <input
                    type="text"
                    placeholder="GitHub"
                    onClick={handleDropDown}
                    value={selectedPlatform}
                  />
                  <img
                    src={
                      selectedPlatform === "GitHub"
                        ? githubImg
                        : selectedPlatform === "Youtube"
                        ? youtubeImg
                        : selectedPlatform === "LinkedIn"
                        ? linkedInImg
                        : selectedPlatform === "Facebook"
                        ? facebookImg
                        : selectedPlatform === "Frontend Mentor"
                        ? frontendmentorImg
                        : githubImg
                    }
                    alt=""
                    className="platform-icon"
                  />
                </div>
                <img src={chevronDown} alt="" className="arrowDown" />
                <div className={`dropdown ${hide ? "hidden" : ""}`}>
                  <div className="github">
                    <div className="icon-text-container">
                      <img src={githubImg} alt="" />
                      <p onClick={() => handlePlatformSelect("GitHub")}>
                        GitHub
                      </p>
                    </div>
                  </div>
                  <div className="github">
                    <div
                      className="icon-text-container"
                      onClick={() => handlePlatformSelect("Youtube")}
                    >
                      <img src={youtubeImg} alt="" />
                      <p>YouTube</p>
                    </div>
                  </div>
                  <div
                    className="github"
                    onClick={() => handlePlatformSelect("LinkedIn")}
                  >
                    <div className="icon-text-container">
                      <img src={linkedInImg} alt="" />
                      <p>LinkedIn</p>
                    </div>
                  </div>
                  <div
                    className="github"
                    onClick={() => handlePlatformSelect("Facebook")}
                  >
                    <div className="icon-text-container">
                      <img src={facebookImg} alt="" />
                      <p>Facebook</p>
                    </div>
                  </div>
                  <div
                    className="github"
                    onClick={() => handlePlatformSelect("Frontend Mentor")}
                  >
                    <div className="icon-text-container">
                      <img src={frontendmentorImg} alt="" />
                      <p>Frontend Mentor</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="link-section">
              <p className="link-text">Link</p>
              <div className="linkInput">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g.https://github.com/johnappleseed"
                  className="linkInput"
                />

                {/* <div id="error-message-container">
                  <span className="error-message">{"can't be empty"}</span>
                </div> */}

                <img src={iconLink} alt="" className="link-icon" />
              </div>
            </div>
          </div>

          <div className="AddedOneLinksaveBtn">
            {showSaveButton && (
              <button
                className="AddedOneLinksave"
                onClick={() => handleLinkOneSaveBtn()}
              >
                save
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddedOneLink;
