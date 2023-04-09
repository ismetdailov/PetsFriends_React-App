import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Images from '../ComponentImages/login'
import './Register.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRectangleXmark, faKey, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { useAuthContext } from '../context/authContext';
import * as authService  from '../services/authenticationService';
import { UserActions } from '../Home/GuestHome/UserAction';
//  import { Link } from 'react-router-dom';
export const Register = ({
    user,
    onClick,
    onActionClick,
    onClose
}) => { 
    const navigate = useNavigate();
    const {login} = useAuthContext();
    const passwordRegEx = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/;
    const emailRegex = /^.+@.+\..+$/;
    const [errors, setErrors] = useState({
        email: {
            message : '',
            valid : true
        },
        password:  {
            message : '',
            valid : true
        },
        repass:  {
            message : '',
            valid : true
        },
    });
    const [hasCathedError, setHasCatchedError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');
    const registerHandler = async (ev) => {
        ev.preventDefault();
    emailValidator();
    passwordValidator();
    repassValidator();
    if(!hasErrors()) {
        try {
               const newUser = await authService.register(email, password);
               const userInfo = {
                id : newUser.user.uid,
                email : newUser.user.email,
                token : newUser.user.accessToken,
                myPageView : 'own'
               }
               login(userInfo);
               navigate('/Home');
        } catch (err) {
            console.log(err.message);
            if(err.message === 'Firebase: Error (auth/email-already-in-use).') {
                setErrors(oldState => {
                    return {...oldState, email : {message : 'Email is already in use', valid : false}}
                })
            } else if(err.message === 'Firebase: Error (auth/invalid-email).'){
                setErrors(oldState => {
                    return {...oldState, email : {message : 'Please enter a valid email', valid : false}}
                })
            } else {
                setHasCatchedError(true);
            }
        }
    }
};

const emailValidator = () => {
    if(!emailRegex.test(email)) {
        setErrors(oldState => {
            return {...oldState, email : {message : 'Please enter a valid email', valid : false}}
        })
    } else {
        setErrors(oldState => {
            return {...oldState,  email : {message : '', valid : true}}
        })
    }
};


const passwordValidator = () => {
    if (password.length < 6) {
        setErrors(oldState => {
            return {...oldState, password : {message : 'Password must be at least 6 characters long', valid : false}}
        })
    } else if (!passwordRegEx.test(password)) {
        setErrors(oldState => {
            return {...oldState, password : {message : 'Password should contain at least one number and one letter', valid : false}}
        })
    } else {
        setErrors(oldState => {
            return {...oldState, password : {message : '', valid : true}}
        })
    }
};

const repassValidator = () => {
    if(password !== repass ){
        setErrors(oldState => {
            return {...oldState, repass : {message : 'Password don\'t match', valid : false}};
        })
    } else if( password === ''){
        setErrors(oldState => {
            return {...oldState, repass : {message : 'Please repeat you password', valid : false}};
        })
    } else {
        setErrors(oldState => {
            return {...oldState, repass : {message : '', valid : true}};
        })
    }
};

const emailChangeHandler = (e) => {
    const currentValue = (e.target.value).trim();
    setEmail(currentValue);
};


const passwordChangeHandler = (e) => {
    const currentValue = (e.target.value).trim();
    setPassword(currentValue);
};

const repassChangeHandler = (e) => {
    const currentValue = (e.target.value).trim();
    setRepass(currentValue);
};

function hasErrors() {
    if(errors.email.valid && errors.password.valid && errors.repass.valid) {
        return false;
    } 
    return true;
}

    return (
        <>
            <form  method='POST' onSubmit={registerHandler} >
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
                                    <input className='email' placeholder="Enter email address here..."
                                     
                                    ></input>
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
                                    <input className='email' placeholder="Enter email address here..."
                                        aria-errormessage={!errors.email.valid? 'Wrong Email': ''}
                                    onBlur={emailValidator}
                                    onChange={emailChangeHandler}></input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Password</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faKey} /></i>
                                        </div>
                                    <input className='email' type="password" placeholder="Create password..."
                                     onBlur={passwordValidator}
                                     onChange={passwordChangeHandler}>

                                     </input>
                                </div>
                                <div className='emaillContainer'>
                                <div className='llabelContainer'>
                                        
                                    <label><b>Confirm password</b></label>
                                    <i className='emailIcon'> <FontAwesomeIcon icon={faKey} /></i>
                                        </div>
                                    <input className='email' type="password" placeholder="Confirm password..."
                                     onBlur={repassValidator}
                                     onChange={repassChangeHandler}>
                                     </input>
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
                                         <button >Register</button>
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