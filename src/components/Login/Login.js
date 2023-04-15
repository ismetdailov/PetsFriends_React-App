import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Images from '../ComponentImages/login'
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRectangleXmark, faKey, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Home } from "../Home/UserHome/Home"
import { useAuthContext } from '../context/authContext';
import * as authService from '../services/authenticationService';

//  import { Link } from 'react-router-dom';
export const Login = ({
    onClose,
}) => {

    const navigate = useNavigate();
    const { login } = useAuthContext();

    const initialErrorState = {
        email: '',
        password: '',
        hasErrors: false,
    };
    const [errors, setErrors] = useState(initialErrorState);
    const [hasCatchedError, setHasCatchedError] = useState(false);

    const loginHandler = async (ev) => {
        ev.preventDefault();

        let { email, password } = Object.fromEntries(
            new FormData(ev.currentTarget)
        );
        email = email.trim();
        password = password.trim();

        try {
            const newUser = await authService.login(email, password);
            const userInfo = {
                id: newUser.user.uid,
                email: newUser.user.email,
                token: newUser.user.accessToken,
                myPageView: 'own',
            };
            login(userInfo);
            navigate('/Home');
        } catch (err) {
            if (
                err.message === 'Firebase: Error (auth/user-not-found).',
                alert('Firebase: Error (auth/user-not-found).')

            ) {
                setErrors((oldState) => {
                    alert('There is no user with this email')
                    return {
                        ...oldState,
                        email: 'There is no user with this email',
                    };
                });
            } else if (err.message === 'Firebase: Error (auth/invalid-email).') {
                setErrors((oldState) => {
                    alert("Invalid email")
                    return {
                        ...oldState,
                        email: 'Invalid email',
                    };
                });
            }
            else if (
                err.message === 'Firebase: Error (auth/wrong-password).' ||
                err.message === 'Firebase: Error (auth/internal-error).'
            ) {
                setErrors((oldState) => {
                    alert('Wrong email or password')
                    return {
                        ...oldState,
                        password: 'Wrong email or password',
                        email: 'Wrong email or password',
                    };
                });
            } else {
                setHasCatchedError(true);
            }
            console.log(err);
        }
    };

    const inputOnBlurHandler = () => {
        setErrors(initialErrorState);
    };


    return (
        <>
            <form method="POST" onSubmit={loginHandler}>
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
                        <div className='errorContainer'>
                                <p>{errors.hasErrors}</p>
                                <p>{errors.email}</p>
                            </div>
                        <div className='labelContainer'>
                            <div className='emailContainer'>
                                <label><b>Email</b></label>
                                <i className='emailIcon'> <FontAwesomeIcon icon={faEnvelopeCircleCheck} /></i>
                                <input
                                    className='email'
                                    placeholder="Enter email address here..."
                                    name="email"
                                    id="email"
                                    onBlur={inputOnBlurHandler}></input>
                            </div>
                            <div className='passwordContainer'>
                                <label>Password</label>
                                <i className='icon'><FontAwesomeIcon icon={faKey} /></i>
                                <input className='password'
                                    placeholder="Enter password here....."
                                    type="password"
                                    name="password"
                                    id="password"
                                    onBlur={inputOnBlurHandler}></input>

                            </div>
                           
                            <div className='loginContainer'>
                                {/* <Link to='/Home'> */}
                                <button className='LoginBtn' >Login</button>
                                {/* </Link> */}
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