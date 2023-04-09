import './Home.css'
import React, { useState } from 'react';

import logo from '../../ComponentImages/logo1.png'
import postImage from '../../ComponentImages/guestHome.png'
import { Navbar } from '../../Navbar/Navbar'
import { CreatePost } from '../../Posts/CreatePost.js'
import { UserActions } from '../GuestHome/UserAction';

export const Home = ({
  user
}) => {
  const [userAction, setUserAction] = useState({ user: null, action: null });
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
      {userAction.action === UserActions.CreatePost &&
        <CreatePost
          onClose={closeHandler}

        />
      }
      <div className='mainContainer'>
        <Navbar />
        <main className='mainSection'>
          <section className='leftSidebar'>
            <div className='leftContainer'>
              <ul className='leftUl'>
                <li>fasddasf</li>
                <li>dasdasd</li>
                <li>asdasdasd</li>
              </ul>
            </div>
          </section>
          <article className='postSection'>
            <div className='centerContainer'>
              <div className='createPsotContainer'>
                <div className='modalcreatePostContainer'>
                  <div className='postContainer'onClick={() => onActionClick(UserActions.CreatePost)}>
                    <img className='postImage' src={logo} alt="" />
                    <p className='createPostBtn' alt='' >Create post</p>
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