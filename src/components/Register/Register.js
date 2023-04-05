import React from 'react';
import { Link } from 'react-router-dom'
import Images from '../ComponentImages/login'
import './Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRectangleXmark, faKey, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
//  import { Link } from 'react-router-dom';
export const Register = ({
    user,
    onClick,
    onActionClick,
    onClose
}) => {
    return (
        <>
            <form  >
                <div className="backdrop" onClick={onClose} />
                <div className='overlay'>

                    <div className="regContainer">

                            
                            <div className='reggContainer' >
                        <div className='closeContainer' >
                                <span className='closeIcon' onClick={onClose} >
                                    <FontAwesomeIcon icon={faRectangleXmark} />
                                </span> 
                            </div>
                        <div className='formContainer'>
                            <header>
                                <h1>Join your pet in our site and have fun! </h1>
                            </header>
                                <div className='emaillContainer'>
                                    <div className='llabelContainer'>

                                    <label><b>First Name</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                    </div>
                                    <input className='email' placeholder="Enter email address here..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Last Name</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                        </div>
                                    <input className='email' placeholder="Enter email address here..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Username</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                        </div>
                                    <input className='email' placeholder="Enter email address here..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>City</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                        </div>
                                    <input className='email' placeholder="Enter your city here..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Name of your pet!</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                        </div>
                                    <input className='email' placeholder="Enter email address here..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Email</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                        </div>
                                    <input className='email' placeholder="Enter email address here..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Password</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faKey} /></i>
                                        </div>
                                    <input className='email' type="password" placeholder="Create password..."></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Confirm password</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faKey} /></i>
                                        </div>
                                    <input className='email' type="password" placeholder="Confirm password..."></input>
                                </div>
                                <div className='rememberContainer' >
                                    <label className='remember'>
                                        Remember login information
                                    </label>
                                    <input className='remember' type="checkbox"  name='rememberme'></input>
                                </div>
                                <div className='regiContainer'>
                                    <div className='signUpGoogle'>
                                        <button>Sign Up whith Google</button>
                                    </div>
                                    <div className='registContainer'>
                                        <button>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default Register