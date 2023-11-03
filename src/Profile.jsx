import React from 'react'
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import iphoneIcon from './assets/images/illustration-phone-mockup.svg';
import fingerSwipe from './assets/images/illustration-empty.svg';
import links from './assets/images/icon-link.svg';
import profie from './assets/images/icon-profile-details-header.svg';
import dragDrop from './assets/images/icon-drag-and-drop.svg'; 
import githubImg from './assets/images/icon-github.svg'
import chevronDown from './assets/images/icon-chevron-down.svg';
import iconLink from './assets/images/icon-link-copied-to-clipboard.svg';
import uploadimageIcon from './assets/images/icon-upload-image.svg';
import './Profile.css';

const Profile = () => {
  return (
    <section>
<div class="nav-container">
    <div class="innerNav-container">
        <img src={devLinkLogo} alt="dev link logo" />
        <div class="linksDetails">
            <button><img src={links} alt="links" />Links</button>
            <button><img src={profie} alt="profile" /><span>Profile Details</span></button>
        </div>
        <button>Preview</button>
    </div>
</div>
        <div className="main-container">
            <div className="phoneIcon">
               <div className="phone">
                 <img src={iphoneIcon} alt="phone icon"/>
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
                            <p className='pp'>Profile picture</p>
                            <div class="image-container">
                               <img src={uploadimageIcon} alt="" />
                               <p className='upload-text'>+Upload Image</p>
                            </div>   
                            <p className='image-requirements'>Image must be below 1024x1024px <br /> Use PNG or JPG format</p>
                        </div>
                    </div> 
                <div class="info-section">
                    <div class="input-pair">
                        <p>First name*</p>
                        <input type="text" name="" id="" placeholder='e.g. John' />
                    </div>
                    <div class="input-pair">
                         <p>Last name*</p>
                         <input type="text" name="" id="" placeholder='e.g. Appleseed' />
                    </div>
                    <div class="input-pair">
                          <p>Email</p>
                          <input type="text" name="" id="" placeholder='e.g. email@example.com' />
                    </div>
                </div>

                </div>
            </div>
        </div>
        <div className="saveBtn">
            <button className='save'>save</button>
        </div>
    </section>
  )
}

export default Profile