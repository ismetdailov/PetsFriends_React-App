import './CreatePost.css';
import React, { useEffect, useState } from 'react';
import logo from '../ComponentImages/logo1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseCrack, faCat, faPaw, faMessage, faBell, faArrowDownShortWide, faRectangleXmark, faFileImage, faLocationDot, faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"
import postImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import * as postService from '../services/post';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext'
import { storage } from '../../config/firebaseConfig'
import * as authService from '../services/authenticationService';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { v4 } from "uuid";
export const CreatePost = ({
    onClose
}) => {




    // const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [currentUser, setCurrentUser] = useState()



    const [hasCatchedError, setHasCatchedError] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const imageUrlRegEx = /^https?:\/\//;

    const formInititalState = {
        title: '',
        content: '',
        destination: '',
        image: '',
    };

    const [inputValues, setInputValues] = useState(formInititalState);
    const [time, setTime] = useState()
    const errorsInitialState = {
        title: {
            mesage: '',
            valid: true,
        }

    };
    const getTime = () => {

        const today = new Date(),

            curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


        setTime(curTime);
    }

    useEffect(() => {
        try {
            authService.getUserById(user.id).then((res) => {
                const currentUser =  res._document.data.value.mapValue.fields.userName
                    console.log(currentUser.stringValue +'this is e')

                setCurrentUser(currentUser)
            })

        } catch (error) {
            setHasCatchedError(true)
            console.log(error)
        }
    })
    const [errors, setErrors] = useState(errorsInitialState);

    const createPostHandler = async (ev) => {
        ev.preventDefault();
           getTime();
        titleValidator();
        if (inputValues.title === '' && imageUrls.length <= 0) {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    title: { message: 'some error', valid: false },
                };
            });
        }
        if (!hasErrors()) {
            try {
                await postService.create({
                    title: inputValues.title,
                    imageUrl: imageUrls,
                    ownerId: user.id,
                    creator: user.email,
                    // time: time,
                    ownerUsername: currentUser.stringValue,
                });
                navigate(`/Home`)
                onClose()
            } catch (err) {
                setHasCatchedError(true);
                console.log(err);
            }
        }
    };


    const [files, setFile] = useState([]);
    const handlerFile = (e) => {
        console.log(e.target.files);

        let allfiles = []
        for (let i = 0; i < e.target.files.length; i++) {
            allfiles.push(e.target.files[i]);
        }
        if (allfiles.length > 0) {
            setFile(allfiles);
        }
    };

    const cancelImage = (e) => {
        setFile([]);
    }






    let images = []


    const uploadFile = async () => {
        if (files.length <= 0) return;
        Array.from(files, (image) => {
            const imageRef = ref(storage, `Posts-Images/${image.name + v4()}`);
            uploadBytes(imageRef, image).then(async (snapshot) => {
                await getDownloadURL(imageRef, snapshot.ref).then(async (url) => {
                    console.log(url + 'this is your url')
                    images.push(url)
                    setImageUrls(images)

                });
            });
        })
    };
    // useEffect(() => {
    //     listAll(imagesListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrls((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, []);


    const titleInputOnChange = (ev) => {
        const value = ev.target.value;
        setInputValues((oldState) => ({ ...oldState, title: value }));
    };







    const titleValidator = () => {
        const title = inputValues.title;
        if (title === '') {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    title: { message: 'Title is required', valid: false },
                };
            });
        } else {
            setErrors((oldState) => {
                return { ...oldState, title: { message: '', valid: true } };
            });
        }
    };





    const imageValidator = () => {
        const imageUrl = inputValues.image;
        if (imageUrl === '') {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    image: { message: 'Image url is required', valid: false },
                };
            });
        } else if (!imageUrlRegEx.test(imageUrl)) {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    image: {
                        message: 'Please enter a valid url',
                        valid: false,
                    },
                };
            });
        } else {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    image: { message: '', valid: true },
                };
            });
        }
    };

    function hasErrors() {
        if (
            inputValues.title === ''
        ) {
            return true;
        } else if (
            errors.title.valid
        ) {
            return false;
        }
        return true;
        // Impoer Image 




    }







    return (

        <>
            <form method="POST"
                onSubmit={createPostHandler}>
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
                                        <textarea placeholder='write your post here....'
                                            onChange={titleInputOnChange}
                                            id="title"
                                            onBlur={titleValidator}></textarea>
                                    </label>
                                </div>
                                <div className='closeContainer'>
                                    <span className='closeIcon' onClick={cancelImage} >
                                        <FontAwesomeIcon icon={faRectangleXmark} />
                                    </span>
                                </div>
                                <div className='uploadImagesContainer' onChange={uploadFile}>
                                    {files.map((file, key) => {
                                        return (
                                            <img className='postImage12' key={key} src={URL.createObjectURL(file)} alt="" />
                                        )
                                    })}
                                </div>
                                {files.length > 0 &&

                                    <div className='uploadImageContainer'>
                                        <span className='uploadImage' onClick={uploadFile} >Upload Images</span>
                                    </div>

                                }
                                <div className='iconsContainer1'>

                                    <FontAwesomeIcon className='fileIcon' type="file"

                                        icon={faFileImage}
                                    />
                                    <input className='fileUpload'
                                        accept="image/*"
                                        multiple
                                        type="file"
                                        onChange={handlerFile}
                                    // onChange={(event) => {
                                    //     setImageUpload(event.target.files[0]);
                                    //     uploadFile();
                                    // }} icon={faFileImage}

                                    />
                                    <FontAwesomeIcon className='locationIcon' icon={faLocationDot} />
                                    <FontAwesomeIcon className='emojiIcon' icon={faFaceGrinTongue} />
                                </div>

                                <div className='btnsContainer'>
                                    <button className='cancelBtn' onClick={onClose}>Cancel</button>
                                    <button className='createPostBtn1' onClick={createPostHandler} >Create</button>
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