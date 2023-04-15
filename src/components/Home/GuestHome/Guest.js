import React from 'react';
import Image from '../../ComponentImages/Picture.js';
import GuesImage from '../../ComponentImages/images.js';
import '../GuestHome/GuestStyle.css'
import logo from '../../ComponentImages/logo1.png'
import { Link, useActionData } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Register } from '../../Register/Register'
import { Login } from '../../Login/Login.js';
import {CreatePost} from'../../Posts/CreatePost.js'
import { UserActions } from './UserAction.js';

export const Guest = ({
    user
}) => {

    const [userAction, setUserAction] = useState({ user: null, action: null });
    const [users, setUsers] = useState([]);

    const onActionClick = (actionType) => {

        setUserAction({
            user,
            action: actionType
        });

    }
    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    return (
        <>
            <div className="row">
                {userAction.action === UserActions.Login &&
                    <Login 
                   onClose={closeHandler}
                    
                    />
                }
                {userAction.action === UserActions.Register &&
                    <Register onClose={closeHandler}></Register>
                }

                <div className="columnImg1">
                    <Image className='img7' />
                </div>
                <div className="columnm">
                    <div className="guestArticle">
                        <article className="columnn">
                            <div className="containerGuest">
                                <GuesImage className='img' />
                            </div>
                        </article>
                    </div>
                </div>

                <div className="columnm">
                    <div className="guestArticle2">
                        <article className="columnn">
                            <div className="containerGuest">
                                <GuesImage />
                            </div>
                        </article>
                    </div>
                </div>
                <div className="columnm">
                    <div className="guestArticle3">
                        <article className="columnn">
                            <div className="container">
                                <GuesImage className='img' />
                            </div>
                        </article>
                    </div>
                </div>
                <div className="columnImg2">
                    <img src={logo} alt="" />
                    {/* <Image className='img7' /> */}
                </div>
            </div>
            <div className="emptySpace">

                <p></p>
            </div>
            <div className="guestColumInfo">
                <div className="aboutSiteInfo">
                    <h1 className="aboutSite">This is site about our pets and their and our friend this is site for fun</h1>
                </div>
                <div className="loginRegisterContainer">
                    <button className="loginBtn" onClick={() => onActionClick(UserActions.Login)}>Login</button>
                    <button className="registerBtn" onClick={() => onActionClick(UserActions.Register)}>Register</button>
                </div>
            </div>
        </>
    );
}