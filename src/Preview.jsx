import React from "react";
// import iphoneIcon from "./assets/images/illustration-phone-mockup.svg";
import copied from "./assets/images/icon-link-copied-to-clipboard.svg";
import githubImg from "./assets/images/icon-github.svg";
import arrowRight from "./assets/images/icon-arrow-right.svg";
import youtubeImg from "./assets/images/icon-youtube.svg";
import linkedInImg from "./assets/images/icon-linkedin.svg";

import "./Preview.css";

import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate();

  const [showToasts, setShowToasts] = React.useState(false);
  const showPreviewCopied = true;

  const handleShowPreviewCopied = async () => {


    setShowToasts(true);


    setTimeout(() => {
      setShowToasts(false);
    }, 5000);
  };

  return (
    <div className="mauve-cover">
      <div className="navigationBar">
        <div className="innerNavigationBar">
          <div className="innerNavigationBarBtn">
            <button onClick={() => navigate("/Profile")}>Back to Editor</button>

            <div className="preview-copied">
              {showPreviewCopied && (
                <button
                  className="preview-copiedBtn"
                  onClick={handleShowPreviewCopied}
                >
                  Share Link
                </button>
              )}
              {showToasts && (
                <div className="linkPopUp">
                  <img src={copied} alt="copied to clipboard" />
                  <p>The link has been copied to your clipboard!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="previewBox">
        <div className="innerPreview">
          <div className="previewHP">
            <div className="profileCircle"></div>
            <h2>Ben Wright</h2>
            <p>ben@example.com</p>
          </div>

          <div className="previewPlatforms">
            <div className="gitHubPlatform">
              <img src={githubImg} alt="gitHub icon" />
              <p>GitHub</p>
              <img
                src={arrowRight}
                alt="arrow right"
                className="gitHub-arrow"
              />
            </div>

            <div className="youTubePlatform">
              <img src={youtubeImg} alt="gitHub icon" />
              <p>YouTube</p>
              <img
                src={arrowRight}
                alt="arrow right"
                className="youTube-arrow"
              />
            </div>

            <div className="linkedInPlatform">
              <img src={linkedInImg} alt="gitHub icon" />
              <p>LinkedIn</p>
              <img
                src={arrowRight}
                alt="arrow right"
                className="linkedIn-arrow"
              />
            </div>
          </div>
        </div>
      </div>
{/* 
       {showToasts && (
          <div className="linkPopUp">
            <img src={copied} alt="copied to clipboard" />
            <p>The link has been copied to your clipboard!</p>
          </div>
        )}  */}
    </div>
  );
};

export default Preview;
