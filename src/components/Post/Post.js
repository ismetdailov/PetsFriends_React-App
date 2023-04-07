import './Post.css';
import React from 'react';
import logo from '../../ComponentImages/logo1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseCrack, faCat, faPaw, faMessage, faBell, faArrowDownShortWide, faFileImage,faLocationDot,faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"



export const Home = ({

}) => {
    return (
        <>
             <div className='post'>
                  <img src={logo} alt="Avatar" />
                  <b>ISmet Dailov</b>
                  <span>2d</span>
                  <label name='this is my post'>

                  <textarea placeholder='write your post here....'></textarea>
                  </label>
                  <div>
                  <FontAwesomeIcon icon={faFileImage} />
                  <FontAwesomeIcon icon={faLocationDot} />
                  <FontAwesomeIcon icon={faFaceGrinTongue} />
                  </div>
                </div>

        </>
  );
}
