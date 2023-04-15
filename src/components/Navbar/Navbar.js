
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseCrack, faCat, faPaw, faMessage, faBell, faArrowDownShortWide,faRightFromBracket, faFileImage, faLocationDot, faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"
import logo from '../ComponentImages/logo1.png'
import { Link } from "react-router-dom"

export const Navbar = ({

}) => {
  return (

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
  <li className='homeIcon'><FontAwesomeIcon className="linkIcon" icon={faHouseCrack} /></li>
  <li className='pawIcon'><Link className="linkIcon" to='/AddFriends'><FontAwesomeIcon icon={faPaw} /></Link></li>
</ul>
<ul className='rightNavbar'>
<li className='homeIconLogo'><img className='navprofileImg' src={logo} alt="" /></li>
  <li className='navrightIcons'><Link className="linkIcon" to='/Messages' ><FontAwesomeIcon icon={faMessage} /></Link></li>
  <li className='navrightIcons'><FontAwesomeIcon className="linkIcon" icon={faBell} /></li>
  <li className='navrightIcons'><FontAwesomeIcon className="linkIcon" icon={faArrowDownShortWide} /></li>
  <li className='navrightIcons'><Link to='/' className="linkIcon"><FontAwesomeIcon icon={faRightFromBracket} /></Link></li>
  
</ul>
</div>
  )
}