import './Home.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseCrack, faCat, faPaw, faMessage, faBell, faArrowDownShortWide, faFileImage, faLocationDot, faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"
import GuesImage from '../../ComponentImages/Picture';
import logo from '../../ComponentImages/logo1.png'
import postImage from '../../ComponentImages/guestHome.png'


export const Home = ({

}) => {
  return (
    <div className='mainContainer'>
      <div className="navbar">
        <ul className='leftNavbar'>
          <li className='homeIconLogo'> <img className='logoImage' src={logo} alt="" /></li>
          <li>
            <div className='iconsContainer'>
              <i className='searchIcon'><FontAwesomeIcon icon={faCat} /></i>
              <input className='searchInput' placeholder="search...">
              </input>
            </div>
          </li>
        </ul>
        <ul className='centerNavbar'>
          <li className='homeIcon'><FontAwesomeIcon icon={faHouseCrack} /></li>
          <li className='pawIcon'><FontAwesomeIcon icon={faPaw} /></li>
        </ul>
        <ul className='rightNavbar'>
          <li className='profileImageLi'> <img className='profileImg' src={logo} alt="" /></li>
          <li className='rightIcons'><FontAwesomeIcon icon={faMessage} /></li>
          <li className='rightIcons'><FontAwesomeIcon icon={faBell} /></li>
          <li className='rightIcons'><FontAwesomeIcon icon={faArrowDownShortWide} /></li>
        </ul>
      </div>
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
                <div className='postContainer'>
                  <img className='postImage' src={logo} alt="" />
                  <a className='createPostBtn' alt=''>Create post</a>
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
  )
}