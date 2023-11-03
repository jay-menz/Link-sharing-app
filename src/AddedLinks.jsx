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
import './AddedLinks.css';

const AddedLinks = () => {
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
            <div className="customisation">
                <div className="customisationHeaderParagraph">
                    <h1>Customize your links</h1>
                    <p>Add/edit/remove links below and then share all your profiles 
                        with the world!
                    </p>
                </div>
                <div className="newLink-section">
                  <div className="newLink">
                    <button className='addLinkBtn'>+Add new link</button>
                  </div>
                  <div className="linkNum1Sec">
                    <div className="linkRemove">
                        <div className="img-p">
                        <img src={dragDrop} alt="" />
                        <p>Link #1</p>
                        </div>
                        <p>Remove</p>
                    </div>
                    <div className="platform">
                        <p>Platform</p>
                    </div>
                    <div className="link">
                        <p>Link</p>
                        <div className="input-container">
                        <input type="text" name="" id="" placeholder='e.g.https://www.github.com/johnappleseed'/>
                        <img src={iconLink} alt="" className='icon-link'/>
                        </div>
                    </div>
                  </div>
                  {/* <div className="linkNum2Sec">
                  <div className="linkRemove">
                        <div className="img-p">
                        <img src={dragDrop} alt="" />
                        <p>Link #2</p>
                        </div>
                        <p>Remove</p>
                    </div>
                    <div className="platform">
                        <p>Platform</p>
                    </div>
                    <div className="link">
                        <p>Link</p>
                        <div className="input-container">
                        <input type="text" name="" id="" placeholder='e.g.https://www.github.com/johnappleseed'/>
                        <img src={iconLink} alt="" className='icon-link'/>
                        </div>
                    </div>
                  </div>
                 */}

                         
                
                </div>
            </div>
        </div>
        <div className="saveBtn">
            <button className='save'>save</button>
        </div>
    </section>
  )
}

export default AddedLinks