import React from 'react';
import { Link } from 'react-router-dom'
import Images from '../ComponentImages/login'
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRectangleXmark, faKey, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Home } from "../Home/UserHome/Home"


//  import { Link } from 'react-router-dom';
export const Login = ({
    user,
    onClick,
    onClose,
    onActionClick
}) => {
    return (
        <>
            <form >
                <div className='overlay' >

                    <div className='modalContainer' >
                        <div className='closeContainer'>
                            <span className='closeIcon' onClick={onClose} >
                                <FontAwesomeIcon icon={faRectangleXmark} />
                            </span>
                        </div>
                        <div className='imageContainer'>
                            <div className='logoContainer'>
                                <div className='containerImage'>
                                    <Images className='logoImage' />
                                </div>
                            </div>
                            </div>
                            <div className='labelContainer'>
                                <div className='emailContainer'>
                                    <label><b>Email</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                    <input className='email' placeholder="Enter email address here..."></input>
                                </div>
                                <div className='passwordContainer'>
                                    <label>Password</label>
                                    <i className='icon'><FontAwesomeIcon icon={faKey} /></i>
                                    <input className='password' placeholder="Enter password here....." type="password"></input>
                                </div>
                                <div className='loginContainer'>
                                    <Link to='/Home'>
                                        <button className='LoginBtn' >Login</button>
                                    </Link>
                                </div>
                                <div className='rememberContainer' >
                                    <label className='remember'>
                                        Remember login information
                                    </label>
                                    <input className='remember' type="checkbox"  ></input>
                                </div>
                                <div className='forgotContainer'>
                                    <Link><p>You forgot your password? Dont worry click on me</p></Link>
                                </div>
                                <div className='signUp'>
                                    <div className='signInwhithGoogle'>
                                        <span className='googleSpan'><Link><p>Sign Up whith Google account</p></Link></span>
                                    </div>
                                    <div className='registerContainer'>
                                        <span className='registerSpan'><Link to="/Register"><p>Register</p></Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
        </>

    );
}