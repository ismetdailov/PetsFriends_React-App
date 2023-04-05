import './Home.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseCrack, faCat, faPaw, faMessage, faBell, faArrowDownShortWide, faImage } from "@fortawesome/free-solid-svg-icons"
import GuesImage from '../../ComponentImages/Picture';
import logo from '../../ComponentImages/logo1.png'


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
              <label >
                <header>Create post.... What you think now?</header>

                <input></input>
              </label>
              <span>
                <FontAwesomeIcon icon={faImage} />
              </span>
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