import React from 'react';
import './Preview.css';
import iphoneIcon from './assets/images/illustration-phone-mockup.svg';

const Preview = () => {
  return (
    <div className="mauve-cover">
      <div className="navbar">
        <div className="inner-navbar">
          <button>Back to Editor</button>
          <button>Share Link</button>
        </div>
      </div>
      <img src={iphoneIcon} alt="" />
    </div>
  );
}

export default Preview;
