import React from 'react';
import './Preview.css';
import iphoneIcon from './assets/images/illustration-phone-mockup.svg';
import { useNavigate } from 'react-router-dom'


const Preview = () => {

  const navigate=useNavigate() 
  
  return (
    <div className="mauve-cover">
      <div className="navigationBar">
        <div className="innerNavigationBar">
          <div className="innerNavigationBarBtn">
            <button>Back to Editor</button>
            <button>Share Link</button>
          </div>
        </div>
      </div>
      <img src={iphoneIcon} alt="" className='previewImg'/>
      </div>
     );
    }
     
    
 

export default Preview;
