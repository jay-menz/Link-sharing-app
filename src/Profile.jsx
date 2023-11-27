// Profile.js

import React from 'react';
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import iphoneIcon from './assets/images/illustration-phone-mockup.svg';
import fingerSwipe from './assets/images/illustration-empty.svg';
import links from './assets/images/icon-link.svg';
import profie from './assets/images/icon-profile-details-header.svg';
import dragDrop from './assets/images/icon-drag-and-drop.svg';
import githubImg from './assets/images/icon-github.svg';
import chevronDown from './assets/images/icon-chevron-down.svg';
import iconLink from './assets/images/icon-link-copied-to-clipboard.svg';
import uploadimageIcon from './assets/images/icon-upload-image.svg';

import { useNavigate } from 'react-router-dom';

import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const [showProfileSaveButton, setShowProfileSaveButton] = React.useState(true);
  const [showLoading, setShowLoading] = React.useState(false);

  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');

  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [firstNameLabelError, setFirstNameLabelError] = React.useState(false);

  const [lastNameError, setLastNameError] = React.useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
  const [lastNameLabelMessage, setLastNameLabelMessage] = React.useState(false);

  const handleOnChangeFirstName = (event) => {
    setfirstName(event.target.value);
  };

  const handleOnChangeLastName = (event) => {
    setlastName(event.target.value);
  };

  const handleProfileSaveBtn = async () => {
    let chkErrSum = 0;

    if (firstName === '' || firstName === null) {
      setFirstNameError(true);
      setFirstNameErrorMessage("Can't be empty");
      setFirstNameLabelError(true);

      setTimeout(() => {
        setFirstNameError(false);
        setFirstNameErrorMessage('');
        setFirstNameLabelError(false);
      }, 5000);

      chkErrSum++;
    }

    if (lastName === '' || lastName === null) {
      setLastNameError(true);
      setLastNameErrorMessage("Can't be empty");
      setLastNameLabelMessage(true);

      setTimeout(() => {
        setLastNameError(false);
        setLastNameErrorMessage('');
        setLastNameLabelMessage(false);
      }, 5000);

      chkErrSum++;
    }

    if (chkErrSum > 0) return;

    try {
      setShowProfileSaveButton(false);
      setShowLoading(true);

      // Simulating a successful save, replace with actual backend logic
      // navigate('/Preview');

      // Simulating an error, remove this block in actual implementation
      throw new Error('Simulated error during profile save');

      setShowProfileSaveButton(true);
      setShowLoading(false);
    } catch (error) {
      console.log('Error:', error);
      setShowProfileSaveButton(true);
      setShowLoading(false);
    }
  };

  return (
    <section>
      <div className="nav-container">
        <div className="innerNav-container">
          <img src={devLinkLogo} alt="dev link logo" />
          <div className="linksDetails">
            <button onClick={() => navigate('/AddedLinks')}>
              <img src={links} alt="links" />
              Links
            </button>
            <button onClick={() => navigate('/Profile')}>
              <img src={profie} alt="profile" />
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
        <div className="profileDetails">
          <div className="customisationHeaderParagraph">
            <h1>Profile Details</h1>
            <p>Add your details to create a personal touch to your profile</p>
          </div>
          <div className="image-info-section">
            <div className="image-section">
              <div className="inner-image-section">
                <p className="pp">Profile picture</p>
                <div className="image-container">
                  <img src={uploadimageIcon} alt="" />
                  <p className="upload-text">+Upload Image</p>
                </div>
                <p className="image-requirements">
                  Image must be below 1024x1024px <br /> Use PNG or JPG format
                </p>
              </div>
            </div>

            <div className="info-section">
              <div className="firstNameInput">
                <label
                  htmlFor="firstNameInput"
                  className={firstNameLabelError ? 'error-label' : ''}
                >
                  First name*
                </label>
                <input
                  type="text"
                  name=""
                  id="first name input"
                  placeholder="e.g. John"
                  value={firstName}
                  onChange={handleOnChangeFirstName}
                  className={`input-field ${firstNameError ? 'invalid' : ''}`}
                />
                {firstNameError && (
                  <p className="error-message">{firstNameErrorMessage}</p>
                )}
              </div>

              <div className="lastNameInput">
                <label
                  htmlFor="lastNameInput"
                  className={lastNameLabelMessage ? 'error-label' : ''}
                >
                  Last name*
                </label>
                <input
                  type="text"
                  name=""
                  id="last name input"
                  placeholder="e.g. Appleseed"
                  value={lastName}
                  onChange={handleOnChangeLastName}
                  className={`input-field ${lastNameError ? 'invalid' : ''}`}
                />
                {lastNameError && (
                  <p className="error-message">{lastNameErrorMessage}</p>
                )}
              </div>

              <div className="emailInput">
                <label htmlFor="emailInput">Email</label>
                <input
                  type="text"
                  name=""
                  id="email input"
                  placeholder="e.g. email@example.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profileDetailSave">
        {showProfileSaveButton && (
          <button className="profileDetailSaveBtn" onClick={handleProfileSaveBtn}>
            Save
          </button>
        )}
      </div>
    </section>
  );
};

export default Profile;
