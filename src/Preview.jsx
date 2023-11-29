import React from 'react';
import iphoneIcon from './assets/images/illustration-phone-mockup.svg';
import copied from './assets/images/icon-link-copied-to-clipboard.svg';

import './Preview.css';

import { useNavigate } from 'react-router-dom'


const Preview = () => {

  const navigate=useNavigate() 
  
  return (
    <div className="mauve-cover">
      <div className="navigationBar">
        <div className="innerNavigationBar">
          <div className="innerNavigationBarBtn">
            <button onClick={() =>navigate("Profile")}>Back to Editor</button>
            <button>Share Link</button>
          </div>
        </div>
      </div>
      
      <div className="previewBox">

      </div>

      <div className="linkPopUp">
        <img src={copied} alt=""/>
        <p>The link has been copied to your clipboard!</p>
      </div>
    </div>
     );
    }
     
    
 

export default Preview;
