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


import { useNavigate } from 'react-router-dom'


import './Profile.css';

const Profile = () => {

    const navigate=useNavigate() 

    const [showProfileSaveButton, setShowProfileSaveButton] = React.useState(true); //show profile save button on load
    const [showLoading, setShowLoading] = React.useState(false); //show loading state when button is clicked

    const [firstName, setfirstName] = React.useState(''); //set state for user email
    const [lastName, setlastName] = React.useState(''); //set state for user password

    //show errors and success messages for the first name 
    const [firstNameError, setFirstNameError] = React.useState(false); //set this to false on initial load. when field is empty set it to true to show error message
    const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState(''); //show error message in email
    const [firstNameLabelError, setFirstNameLabelError] = React.useState(false); //set the label red when the input is empty or null


    // show errors and success messages for the last name
    const [lastNameError, setLastNameError] = React.useState(false);
    const [lastNameErrorMessage, setLastNameErrorMessage] = React.useState('');
    const [lastNameLabelMessage, setLastNameLabelMessage] = React.useState(false);

    //handle onchange when user enter any character in inputs 
    const handleOnChangeFirstName = (event)=>{setfirstName(event.target.value);}
    const handleOnChangeLastName = (event)=>{setlastName(event.target.value);}

    const [borderError, setBorderError] = React.useState(false);






     //this function handles the profile save button when clicked.
    //this is where all your validation & authentication goes
    const handleProfileSaveBtn = async () => {

        //validate firstname and lastname field before granting access
        let chkErrSum = 0;

        if(firstName === '' || firstName == null){
            //if the first name field is empty or null then show error message
            setFirstNameError(true)
            setFirstNameErrorMessage("Can't be empty")
            setFirstNameLabelError(true);
            
            // to remove the error message after 5 seconds
            setTimeout(() => {
        
                setFirstNameError(false) //set message to false to hide it
                setFirstNameErrorMessage("") //remove the error message
                setFirstNameLabelError(false);
              }, 5000);
        
              chkErrSum++;

        }

        if(lastName === '' || lastName == null) {
            //if the last name field is empty or null then show the error message
            setLastNameError(true);
            setLastNameErrorMessage("Can't be empty");
            setLastNameLabelMessage(true);

            //to remove the error message after 5 seconds
            setTimeout(() => {
                setLastNameError(false)
                setLastNameErrorMessage("")
                setLastNameLabelMessage(false);
            }, 5000);

            chkErrSum++;

        }

        if (chkErrSum > 0) return;

        // trycatch block to handle errors
        try{

            setShowProfileSaveButton(false);
            setShowLoading(true)

             //handle your backend database validaiton here if email and password is not empty
            // alert('Success i just logged in') 
            navigate('/Preview')

            //====================================================================================================//
         // history.push('/CreateAccount')
        //after response from server backend make sure to hide the loading and then show the login button again
        setShowProfileSaveButton(true) 
         setShowLoading(false)
        } catch (error) {
            console.log('Error:', + error)
          }

    }


  return (
    <section>
<div class="nav-container">
    <div class="innerNav-container">
        <img src={devLinkLogo} alt="dev link logo" />
        <div class="linksDetails">
            <button onClick={() => navigate("/AddedLinks") }><img src={links} alt="links" />Links</button>
            <button onClick={() => navigate("/Profile") }><img src={profie} alt="profile" /><span>Profile Details</span></button>
        </div>
        <button onClick={() => navigate("/preview") }>Preview</button>
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
                    <div className="info-section">
                        <div className="firstNameInput">
                           <label 
                           htmlFor='firstNameInput'
                            // className={firstNameLabelError ? 'error-label' : ''}
                            >First name*</label>
                           <input 
                           type="text" 
                           name="" 
                           id="first name input" 
                           placeholder='e.g. John' 
                           value={firstName}
                           onChange={handleOnChangeFirstName}
                           className={firstNameLabelError ? 'error-border' : ''}
                           />
                           {firstNameLabelError &&(
                            <div className="name-message-container">
                                <span id="firstnameError">{firstNameErrorMessage}</span>
                            </div>
                )}
                        </div>  
                        <div className="lastNameInput">
                            <label 
                            htmlFor='lastNameInput'
                            // className={lastNameLabelMessage ? 'error-label' : ''}
                            >Last name*</label>
                            <input 
                            type="text" 
                            name="" 
                            id="last name input" 
                            placeholder='e.g. Appleseed' 
                            value={lastName}
                            onChange={handleOnChangeLastName}
                            className={lastNameLabelMessage ? 'error-border' : ''}
                            />
                           {lastNameLabelMessage &&(
                            <div className="name-message-container">
                                <span id="lastnameError">{firstNameErrorMessage}</span>
                            </div>
                            )}
                        </div>
                        <div className="emailInput">
                           <label htmlFor='emailInput'>Email</label>
                           <input 
                           type="text" 
                           name="" 
                           id="email input" 
                           placeholder='e.g. email@example.com' 
                           
                           />
                        </div>    
                    </div>

                </div>
            </div>
        </div>
        <div className="profileDetailSave">
            {showProfileSaveButton &&(
                <button className='profileDetailSaveBtn' onClick={() => handleProfileSaveBtn()}>save</button>
            )}
        </div>
    </section>
  )
}

export default Profile