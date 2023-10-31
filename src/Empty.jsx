import React from 'react'
import devLinkLogo from './assets/images/logo-devlinks-large.svg';
import iphoneIcon from './assets/images/illustration-phone-mockup.svg';
import fingerSwipe from './assets/images/illustration-empty.svg';
import links from './assets/images/icon-link.svg';
import profie from './assets/images/icon-profile-details-header.svg'; 
import './Empty.css';

const Empty = () => {
  return (
    <section>
<div class="nav-container">
    <div class="innerNav-container">
        <img src={devLinkLogo} alt="dev link logo" />
        <div class="linksDetails">
            <button><img src={links} alt="links" />Links</button>
            <button><img src={profie} alt="profile" />Profile Details</button>
        </div>
        <button>Preview</button>
    </div>
</div>
        <div className="main-container">
            <div className="phoneIcon">
            <img src={iphoneIcon} alt="phone icon" />
            </div>
            <div className="customisation">
                <div className="customisationHeaderParagraph">
                    <h1>Customize your links</h1>
                    <p>Add/edit/remove links below and then share all your profiles 
                        with the world!
                    </p>
                </div>
                <div className="newLink">
                    <button>+Add new link</button>
                </div>
                <div className="getStarted">
                    <div className="phoneSwipe">
                        <img src={fingerSwipe} alt="swiping phone" />
                    </div>
                </div>
                <div className="getStartedHeaderParagraph">
                    <h1>Let's get you started</h1>
                    <p>Use the "Add new link" button to get started. Once you have more <br />
                    than one link, you can reorder and edit them. We're here to help <br />
                    you share your profiles with everyone!  
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Empty