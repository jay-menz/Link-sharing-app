// AddedLinks.js

import React, { useRef, useState } from "react";
import devLinkLogo from "./assets/images/logo-devlinks-large.svg";
import iphoneIcon from "./assets/images/illustration-phone-mockup.svg";
import links from "./assets/images/icon-link.svg";
import profile from "./assets/images/icon-profile-details-header.svg";
import chevronDown from "./assets/images/icon-chevron-down.svg";
import youtubeImg from "./assets/images/icon-youtube.svg";
import githubImg from "./assets/images/icon-github.svg";
import linkedInImg from "./assets/images/icon-linkedin.svg";
import facebookImg from "./assets/images/icon-facebook.svg";
import frontendmentorImg from "./assets/images/icon-frontend-mentor.svg";
import iconLink from "./assets/images/icon-link-copied-to-clipboard.svg";
import smallDevLinkLogo from "./assets/images/logo-devlinks-small.svg";

import { useNavigate } from "react-router-dom";

import "./AddedLinks.css";

const AddedLinks = () => {
  const navigate = useNavigate();

  const [hide, setHide] = useState(true);
  const [selectedButton, setSelectedButton] = useState("links");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [selectedPlatformTwo, setSelectedPlatformTwo] = useState("YouTube");
  const [isActive, setIsActive] = useState(false);
  const [linkOneErrorSaveButton, setLinkOneErrorSaveButton] =
    React.useState(true);

  const [linksOneEmpty, setLinksOneEmpty] = React.useState("");

  const handleOnChangeLinkOneEmpty = (event) => {
    setLinksOneEmpty(event.target.value);
  };

  const [linkTwoUrlCheck, setLinkTwoUrlCheck] = React.useState("");

  const handleOnChangeTwoUrlCheck = (event) => {
    setLinkTwoUrlCheck(event.target.value);
  };

  //error and success message
  const [linksOneEmptyError, setLinksOneEmptyError] = React.useState(false);
  const [linksOneEmptyErrorMessage, setLinksOneEmptyErrorMessage] =
    React.useState("");

  //error and success message for the link two to check the url
  const [linkTwoUrlCheckError, setLinkTwoUrlCheckError] = React.useState(false);
  const [linkTwoUrlCheckErrorMessage, setLinkTwoUrlCheckErrorMessage] =
    React.useState("");

  const [showsSaveBtn, setShowsSaveBtn] = React.useState(true); //show save button on load
  const [showLoadingg, setShowLoadingg] = React.useState(false); //show loading state when button is clicked

  const [linkOneBorderError, setLinkOneBorderError] = React.useState(false); //set border error to the color red
  const [inputError, setInputError] = React.useState(false); //set error to the color red when the input space is empty

  const [linkTwoBorderError, setLinkTwoBorderError] = React.useState(false); //set border error to the color red
  const [linkTwoInputError, setLinkTwoInputError] = React.useState(false); //set label error to the color red

  const [linksOne, setLinksOne] = React.useState("");
  const handleLinksOneNotFilled = (event) => {
    setLinksOne(event.target.value);
  };

  const handleLinkOneTwoSaveBtn = async () => {
     //validate the link1 field before granting access
     let checkErrorSum = 0;

     if (linksOneEmpty == "" || linksOneEmpty == null) {
       setLinksOneEmptyError(true);
       setLinksOneEmptyErrorMessage("Can't be empty");
       setLinkOneBorderError(true);
       setInputError(true);
 
       setTimeout(() => {
         setLinksOneEmptyError();
         setLinksOneEmptyErrorMessage("");
         setLinkOneBorderError(false);
         setInputError(false);
       }, 5000);
 
       checkErrorSum++;
     }
  };

  // const handleLinkTwoCheckUrl = async () => {

  // }

  const myRef = useRef(null);
  const myRefTwo = useRef(null);

  const handleDropDown = (whichOne) => {
    if (whichOne === 1) {
      if (myRef.current.className === "dropdown") {
        myRef.current.className = "dropdown hidden";
      } else {
        myRef.current.className = "dropdown";
      }
    }

    if (whichOne === 2) {
      if (myRefTwo.current.className === "dropdown") {
        myRefTwo.current.className = "dropdown hidden";
      } else {
        myRefTwo.current.className = "dropdown";
      }
    }

    console.log("I just clicked");
  };

  const handlePlatformSelectTwo = (platform) => {
    setSelectedPlatformTwo(platform);
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    myRef.current.className = "dropdown hidden";
    myRefTwo.current.className = "dropdown hidden";
  };

  const handleLinkOneSaveBtn = async () => {
    //validate the link1 field before granting access
    let checkErrorSum = 0;

    if (linksOneEmpty == "" || linksOneEmpty == null) {
      setLinksOneEmptyError(true);
      setLinksOneEmptyErrorMessage("Can't be empty");

      setTimeout(() => {
        setLinksOneEmptyError();
        setLinksOneEmptyErrorMessage("");
      }, 5000);

      checkErrorSum++;
    }
  };

  const handleLinksButtonClick = () => {
    navigate("/AddedLinks");
    setSelectedButton("links");
  };

  return (
    <section>
      <div className="nav-container">
        <div className="innerNav-container">
          {window.innerWidth < 600 ? (
            <img
              src={smallDevLinkLogo}
              alt="small devlink logo"
              className="emptySmallLinkLogo"
            />
          ) : (
            <img src={devLinkLogo} alt="dev link logo" className="emptyLogo" />
          )}
          <div className="linksDetails">
            <button
              onClick={handleLinksButtonClick}
              className={`links-button ${
                selectedButton === "links" ? "active" : ""
              }`}
            >
              <img src={links} alt="links" className="links-image" />
              <span>Links</span>
            </button>
            <button
              onClick={() => {
                navigate("/Profile");
                setSelectedButton("profile");
              }}
              className={`profile-button ${
                selectedButton === "profile" ? "activeButton" : ""
              }`}
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

        <div className="AddedLinks-customisation">
          <div className="links-customisationHeaderParagraph">
            <h1>Customize your links</h1>
            <p>
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="link-newLink-section">
            <div className="AddedLinks-newLink">
              <button
                className="AddedLinks-addLinkBtn"
                onClick={() => navigate("/AddedLinks")}
              >
                +Add new link
              </button>
            </div>

            <div className="links-linkOneContainer">
              <div className="linksNumTwoHeader">
                <p>= Link #1</p>
                <p>Remove</p>
              </div>
              <form>
                <div className="links-youtube-cont">
                  <p className="platform-text">Platform</p>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      placeholder="GitHub"
                      onClick={() => handleDropDown(1)}
                      // onClick={handleDropDown}
                      value={selectedPlatform}
                    />
                    {/* <img src={githubImg} alt="" className="platform-icon" /> */}
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
                  <div className={"dropdown hidden"} ref={myRef}>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelect("GitHub")}
                      >
                        <img src={githubImg} alt="" />
                        <p>GitHub</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelect("YouTube")}
                      >
                        <img src={youtubeImg} alt="" />
                        <p>YouTube</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelect("LinkedIn")}
                      >
                        <img src={linkedInImg} alt="" />
                        <p>LinkedIn</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelect("Facebook")}
                      >
                        <img src={facebookImg} alt="" />
                        <p>Facebook</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelect("Frontend Mentor")}
                      >
                        <img src={frontendmentorImg} alt="" />
                        <p>Frontend Mentor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="links-section">
                <p className="links-text">Link</p>
                <div className="linksInput">
                  <input
                    type="text"
                    name=""
                    id="added links link one input"
                    placeholder="e.g.https://github.com/johnappleseed"
                    className={`input-field ${
                      linksOneEmptyError ? "invalid" : ""
                    }`}
                    value={linksOne}
                    onChange={handleLinksOneNotFilled}
                  />

                  {linksOneEmptyError && (
                    <p className="links-one-error-message">
                      {linksOneEmptyErrorMessage}
                    </p>
                  )}

                  <img src={iconLink} alt="" className="link-icon" />
                </div>
              </div>
            </div>

            <div className="linkTwoContainer">
              <div className="linksTwoHeader">
                <p>= Link #2</p>
                <p>Remove</p>
              </div>
              <form>
                <div className="youtube-container">
                  <p className="platform-text">Platform</p>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      placeholder={selectedPlatformTwo}
                      onClick={() => handleDropDown(2)}
                    />
                    {/* <img src={youtubeImg} alt="" className="platform-icon" /> */}
                    <img
                      src={
                        selectedPlatformTwo === "GitHub"
                          ? githubImg
                          : selectedPlatformTwo === "Youtube"
                          ? youtubeImg
                          : selectedPlatformTwo === "LinkedIn"
                          ? linkedInImg
                          : selectedPlatformTwo === "Facebook"
                          ? facebookImg
                          : selectedPlatformTwo === "Frontend Mentor"
                          ? frontendmentorImg
                          : githubImg
                      }
                      alt=""
                      className="platform-icon"
                    />
                  </div>
                  <img src={chevronDown} alt="" className="arrowDown" />
                  <div className={"dropdown hidden"} ref={myRefTwo}>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelectTwo("GitHub")}
                      >
                        <img src={githubImg} alt="" />
                        <p>GitHub</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelectTwo("YouTube")}
                      >
                        <img src={youtubeImg} alt="" />
                        <p>YouTube</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelectTwo("LinkedIn")}
                      >
                        <img src={linkedInImg} alt="" />
                        <p>LinkedIn</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() => handlePlatformSelectTwo("Facebook")}
                      >
                        <img src={facebookImg} alt="" />
                        <p>Facebook</p>
                      </div>
                    </div>
                    <div className="github">
                      <div
                        className="icon-text-container"
                        onClick={() =>
                          handlePlatformSelectTwo("Frontend Mentor")
                        }
                      >
                        <img src={frontendmentorImg} alt="" />
                        <p>Frontend Mentor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="youtube-link-section">
                <p className="link-text">Link</p>
                <div className="linkInput">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="e.g.https://www.youtube.com/benwright"
                    className="linkInput"
                  />
                  <img src={iconLink} alt="" className="link-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="AddedLinksaveBtn">
          {showsSaveBtn && (
            <button
              className="AddedLinksave"
              onClick={() => handleLinkOneTwoSaveBtn()}
              // onClick={() => handleLinkTwoCheckUrl()}
            >
              save
            </button>
          )}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AddedLinks;
