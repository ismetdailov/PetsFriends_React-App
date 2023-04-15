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




    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    



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

    const errorsInitialState = {
        title: {
            mesage: '',
            valid: true,
        },
        content: {
            mesage: '',
            valid: true,
        },
        destination: {
            mesage: '',
            valid: true,
        },
        image: {
            mesage: '',
            valid: true,
        },
    };
    const [errors, setErrors] = useState(errorsInitialState);

    const createPostHandler = async (ev) => {
        ev.preventDefault();

        titleValidator();
        contentValidator();
        destinationValidator();
        imageValidator();

        if (!hasErrors()) {
            try {
                await postService.create({
                    title: inputValues.title,
                    content: inputValues.content,
                    destination: inputValues.destination,
                    imageUrl: inputValues.image,
                    ownerId: user.id,
                    creator: user.email,
                });
                navigate('/my-profile');
            } catch (err) {
                setHasCatchedError(true);
                console.log(err);
            }
        }
    };
    const imagesListRef = ref(storage, "images/");
    const imageUrl = '';
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        inputValues.image = ref(storage, `images/${imageUpload.name + v4()}`);
        inputValues.content = "sdasdasd"
        inputValues.title = "sdadasd"
        inputValues.destination = "sdadasdasd"
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                imageUrl = url
                setImageUrls((prev) => [...prev, url]);
            });
        });
    };


    useEffect(() => {
        listAll(imagesListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    const titleInputOnChange = (ev) => {
        const value = ev.target.value;
        setInputValues((oldState) => ({ ...oldState, title: value }));
    };

    const contentInputOnChange = (ev) => {
        const value = ev.target.value;
        setInputValues((oldState) => ({ ...oldState, content: value }));
    };

    const destinationInputOnChange = (ev) => {
        const value = ev.target.value;
        setInputValues((oldState) => ({ ...oldState, destination: value }));
    };

    const imageInputOnChange = (ev) => {
        const value = ev.target.value;
        setInputValues((oldState) => ({ ...oldState, image: value }));
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

    const contentValidator = () => {
        const content = inputValues.content;
        if (content === '') {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    content: { message: 'Content is required', valid: false },
                };
            });
        } else {
            setErrors((oldState) => {
                return { ...oldState, content: { message: '', valid: true } };
            });
        }
    };

    const destinationValidator = () => {
        const destination = inputValues.destination;
        if (destination === '') {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    destination: {
                        message: 'Destination is required',
                        valid: false,
                    },
                };
            });
        } else {
            setErrors((oldState) => {
                return {
                    ...oldState,
                    destination: { message: '', valid: true },
                };
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
            inputValues.content === '' ||
            inputValues.destination === '' ||
            inputValues.image === '' ||
            inputValues.title === ''
        ) {
            return true;
        } else if (
            errors.title.valid &&
            errors.content.valid &&
            errors.destination.valid &&
            errors.image.valid
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
                                <div className='uploadImagesContainer' onChange={uploadFile}>
                                    {imageUrls.map((url) => {
                                        return <img className='postImage12' src={url} alt="" />;
                                    })}
                                    ;

                                </div>
                                <div className='iconsContainer1'>
                                    <FontAwesomeIcon className='fileIcon' type="file"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                        }} icon={faFileImage} />
                                    <input
                                        type="file"
                                        onChange={(event) => {
                                            setImageUpload(event.target.files[0]);
                                            uploadFile();
                                        }}
                                    />
                                    <FontAwesomeIcon className='locationIcon' icon={faLocationDot} />
                                    <FontAwesomeIcon className='emojiIcon' icon={faFaceGrinTongue} />
                                </div>
                                <div className='btnsContainer'>
                                    <button className='cancelBtn'>Cancel</button>
                                    <button className='createPostBtn1' >Create</button>
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