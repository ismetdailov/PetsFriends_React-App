import React from 'react';
import Image from '../../ComponentImages/Picture.js';
import GuesImage from '../../ComponentImages/images.js';
import '../GuestHome/GuestStyle.css'
import logo from'../../ComponentImages/logo1.png'

function Guest() {
    return (
        <>
            <div className="row">

                <div className="columnImg1">
                    <Image className='img7' />
                </div>
                <div className="columnm">
                    <div className="guestArticle">
                        <article className="columnn">
                            <div className="container">
                                <GuesImage className='img'/>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="columnm">
                    <div className="guestArticle2">
                        <article className="columnn">
                            <div className="container">
                             <GuesImage/>
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
                   <img src={logo} alt=""/>  
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
                    <button className="loginBtn">Login</button>
                    <button className="registerBtn">Register</button>
                </div>
            </div>
        </>
    );
}
export default Guest