import '../MyProfile/MyProfile.css'
import React from 'react'
import postImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import { Navbar } from '../Navbar/Navbar'
import logo from '../ComponentImages/logo1.png'
import ProfileImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import { Link } from "react-router-dom"

export const MyProfile = ({

}) => {












    return (

        <>
            <Navbar />
            <div className='myProfileContainer'>
                <div className='coverContainer'>
                    <div className='leftCover'>
                        <img className='leftcoverImage' src={postImage} alt="" />
                    </div>
                    <div className='rightCover'>
                        <img className='rightcoverImage' src={postImage} alt="" />
                    </div>
                    <div className='profilePicutre'>
                        <div className='imageContainer'>

                    <img className='profileImageMyProfil' src={ProfileImage} alt="" />
                        </div>
                    </div>
                </div>
                <main className='mainSectionMyProfile'>
                    <section className='leftSidebar'>
                        <div className='leftContainer'>
                            <ul className='leftUl'>
                                <li>fasddasf</li>
                                <li>dasdasda</li>
                                <li>asdasdasd</li>
                            </ul>
                        </div>
                    </section>
                    <article className='postSection'>
                        <div className='centerContainer'>
                            <div className='createPsotContainer'>
                                <div className='modalcreatePostContainer'>
                                    <div className='postContainer'>
                                        <img className='postImage' src={logo} alt="" />
                                       <Link> className='createPostBtn' alt=''Create post</Link>
                                    </div>
                                </div>

                                <div className='posts'>
                                    <article>
                                        <div className='postUserInfo'>
                                            <img className='profileImage' src={logo} alt="" />
                                            <b>Ismet Dailov</b>
                                            <time>10:55</time>
                                        </div>
                                        <p>this is my post i like very</p>
                                        <div className='imagePost'>
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                        </div>
                                        <div className='btnContainer'>
                                            <div className='likeBtn'>
                                                <button className='like' >like</button>
                                            </div>
                                            <div className='commentBtn'>
                                                <button className='comment' >comment</button>
                                            </div>
                                            <div className='shareBtn'>
                                                <button className='share'>share</button>
                                            </div>
                                        </div>
                                    </article>
                                </div>


                                <div className='posts'>
                                    <article>
                                        <div className='postUserInfo'>
                                            <img className='profileImage' src={logo} alt="" />
                                            <b>Ismet Dailov</b>
                                            <time>10:55</time>
                                        </div>
                                        <p>this is my post i like very</p>
                                        <div className='imagePost'>
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                        </div>
                                        <div className='btnContainer'>
                                            <div className='likeBtn'>
                                                <button className='like' >like</button>
                                            </div>
                                            <div className='commentBtn'>
                                                <button className='comment' >comment</button>
                                            </div>
                                            <div className='shareBtn'>
                                                <button className='share'>share</button>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className='posts'>
                                    <article>
                                        <div className='postUserInfo'>
                                            <img className='profileImage' src={logo} alt="" />
                                            <b>Ismet Dailov</b>
                                            <time>10:55</time>
                                        </div>
                                        <p>this is my post i like very</p>
                                        <div className='imagePost'>
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                            <img className='postImage1' src={postImage} alt="" />
                                        </div>
                                        <div className='btnContainer'>
                                            <div className='likeBtn'>
                                                <button className='like' >like</button>
                                            </div>
                                            <div className='commentBtn'>
                                                <button className='comment' >comment</button>
                                            </div>
                                            <div className='shareBtn'>
                                                <button className='share'>share</button>
                                            </div>
                                        </div>
                                    </article>
                                </div>




                            </div>
                        </div>

                    </article>
                    <section className='rightSide'>
                        <div className='rightContainer'>
                            <ul className='rightUl'>
                                <li>fasddasf</li>
                                <li>dasdasd</li>
                                <li>asdasdasd</li>
                            </ul>
                        </div>
                    </section>

                </main>


            </div>
        </>
    )
}