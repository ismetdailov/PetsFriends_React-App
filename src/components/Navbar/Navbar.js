
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
  <li className='homeIcon'><FontAwesomeIcon icon={faHouseCrack} /></li>
  <li className='pawIcon'><FontAwesomeIcon icon={faPaw} /></li>
</ul>
<ul className='rightNavbar'>
  <li className='profileImageLi'> <img className='profileImg' src={logo} alt="" /></li>
  <li className='rightIcons'><FontAwesomeIcon icon={faMessage} /></li>
  <li className='rightIcons'><FontAwesomeIcon icon={faBell} /></li>
  <li className='rightIcons'><FontAwesomeIcon icon={faArrowDownShortWide} /></li>
  <li className='rightIcons' ><Link to='/' ><FontAwesomeIcon icon={faRightFromBracket} /></Link></li>
  
</ul>
</div>
  )
}