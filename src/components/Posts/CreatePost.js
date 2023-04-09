import './CreatePost.css';
import React from 'react';
import logo from '../ComponentImages/logo1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseCrack, faCat, faPaw, faMessage, faBell, faArrowDownShortWide, faRectangleXmark, faFileImage, faLocationDot, faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"
import postImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'


export const CreatePost = ({
    onClose
}) => {
    return (
        <>
            <form>
                <div className='overlay' >
                    <div className='modalContainer' >
                        <div className='postcontainer'>
                            <div className='closeContainer'>
                                <span className='closeIcon' onClick={onClose} >
                                    <FontAwesomeIcon icon={faRectangleXmark} />
                                </span>
                            </div>
                            <div className='post'>
                                <div className='headerContainer'>
                                    <h1 className='createh1'>Create Post</h1>
                                </div>
                                <div className='inputCreate'>
                                    <label name='this is my post'>
                                        <textarea placeholder='write your post here....'></textarea>
                                    </label>
                                </div>
                                <div className='uploadImagesContainer'>
                                    <img className='postImage12' src={postImage} alt="" />
                                    <img className='postImage12' src={postImage} alt="" />
                                </div>
                                <div className='iconsContainer1'>
                                    <FontAwesomeIcon className='fileIcon' icon={faFileImage} />
                                    <FontAwesomeIcon className='locationIcon' icon={faLocationDot} />
                                    <FontAwesomeIcon className='emojiIcon' icon={faFaceGrinTongue} />
                                </div>
                                <div className='btnsContainer'>
                                    <button className='cancelBtn'>Cancel</button>
                                    <button className='createPostBtn1'>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default CreatePost;