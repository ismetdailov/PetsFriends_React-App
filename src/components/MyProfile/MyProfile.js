import '../MyProfile/MyProfile.css'
import React, { useEffect, useState } from 'react'
import postImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import { Navbar } from '../Navbar/Navbar'
import logo from '../ComponentImages/logo1.png'
import ProfileImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import { Link, Route, useParams, useSearchParams } from "react-router-dom"
import * as postService from '../services/post'
import { useAuthContext } from '../context/authContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faFileImage, faLocationDot, faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"
import { UserActions } from '../Home/GuestHome/UserAction';
import EditPost from '../Posts/EditPost'
import CreatePost from '../Posts/CreatePost'


export const MyProfile = ({
    onClose
}) => {


    const [userAction, setUserAction] = useState({ user: null, action: null, id: null });

    const onActionClick = (actionType,id) => {

        setUserAction({
            user,
            action: actionType,
            id: id
        });
    }
    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };





    const { user } = useAuthContext();
    const [hasCatchedError, setHasCatchedError] = useState(false);
    const [myposts, setMyPosts] = useState()
    const [count, setCount] = useState(0);
    useEffect(() => {
        try {

            postService.getUserPosts(user.id).then((res) => {
                const userPosts = res.docs.map((post) => ({
                    ...post.data(),
                    id: post.id
                }))
                setMyPosts(userPosts)
            })
        } catch (error) {
            setHasCatchedError(true)
            console.log(error)
        }
    }, [count, user.id])


        const showModal=(id)=>{
        }




    return (

        <>
            {userAction.action === UserActions.EditPost &&
                <EditPost 
                    onClose={closeHandler}

                />
            }{userAction.action === UserActions.CreatePost &&
                <CreatePost
                    onClose={closeHandler}

                />
            }
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
                                    <div className='postContainer' onClick={() => onActionClick(UserActions.CreatePost)} 
                                  >
                                        <img className='postImage' src={logo} alt="" />
                                        <p className='createPostBtn' alt='' >Create post</p>
                                    </div>
                                </div>
                                {myposts?.map((p) => {
                                    return (
                                        <div className='posts' key={p.id}>
                                            <article>
                                                <div className='postUserInfo'>
                                                    <img className='profileImage' src={logo} alt="" />
                                                    <b>{p.ownerUsername}</b>
                                                    <time>{p.time}</time>
                                                    <div className='closeContainer' >
                                                        <span className='closeIcon'  >
                                                            <FontAwesomeIcon icon={faRectangleXmark} />
                                                        </span>
                                                    </div>
                                                </div>
                                                <p>{p.title}</p>
                                                <div className='imagePost'>
                                                    {p.imageUrl?.map((url) => {
                                                        return <img className='postImage1' src={url} alt="" />
                                                    })}
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
                                                    <div className='shareBtn'key={p.id}  to={p.id} onClick={ 
                                                        () => onActionClick(UserActions.EditPost)
                                                    }>
                                                    <Link to={`/Post/Edit/${p.id}`} >
                                                        <button className='share'onClick={()=>[() => onActionClick(UserActions.EditPost),<Link to={p.id}></Link>]}>Edit Post</button>
                                                    </Link>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                    )
                                })}


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