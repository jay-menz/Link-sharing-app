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
import { useNavigate } from 'react-router-dom'


import './AddedOneLink.css';

const AddedOneLink = () => {

  const navigate=useNavigate() 


  return (
    <section>
<div class="nav-container">
    <div class="innerNav-container">
        <img src={devLinkLogo} alt="dev link logo" />
        <div class="linksDetails">
            <button><img src={links} alt="links" />Links</button>
            <button onClick={() => navigate("/Profile")}><img src={profie} alt="profile" /><span>Profile Details</span></button>
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
            <div className="AddedOneLink-customisation">
              <div className='customisationHeaderParagraph'>
                <h1>Customize your links</h1>
                    <p>Add/edit/remove links below and then share all your profiles 
                        with the world!
                    </p>
              </div> 
              <div className="newLink-section">
                  <div className="AddedOneLink-newLink">
                    <button className='AddedOneLink-addLinkBtn' onClick={() => navigate("/AddedLinks") }>+Add new link</button>
                  </div>

                  <div className="linkOne">
                       <div className="removeLink">
                          <div className="equalLink">
                              <img src={dragDrop} alt="" />
                              <p>Link #1</p>
                           </div>
                             <p>Remove</p>
                       </div>
                       <div className="platformSection">
                          <p>Platform</p>
                          <div className="gitHubBtn">
                            {/* <img src={githubImg} alt="" /> */}
                          </div>
                       </div>
                       <div className="linkSection">
                       <p>Link</p>
                       </div>
                  </div>
                  
                  </div>
                 
                  <div className="saveBtn">
                      <button className='save'>save</button>
                   </div>
                </div>            
            </div>
    </section>
  )
}

export default AddedOneLink