import './CreatePost.css';
import React, { useEffect, useState } from 'react';
import logo from '../ComponentImages/logo1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faRectangleXmark, faFileImage, faLocationDot, faFaceGrinTongue } from "@fortawesome/free-solid-svg-icons"
import postImage from '../ComponentImages/alvan-nee-T-0EW-SEbsE-unsplash.jpg'
import * as postService from '../services/post';
import { useActionData, useNavigate, useParams } from 'react-router-dom';
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
export const EditPost = ({
    onClose
}) => {
        const[values, setValues] = useState({
            title:'',
            imageUrl:[],
        })
    
    
        const {id} = useParams()


    const [myposts, setMyPosts] = useState([])
    useEffect(() => {
        postService
            .getById(id)
            .then((res) => {
                const postData = res.data();
                setValues(postData);
                setMyPosts(postData.imageUrl)
            })
            .catch((err) => {
                setHasCatchedError(true);
                console.log(err);
            });
    }, [id]);

    const editPostHandler = async (ev) => {
        ev.preventDefault();
        if (values.imageUrl.length!==myposts.length) {
            const uploadFile = async () => {
                if (files.length <= 0) return;
                Array.from(files, (image) => {
                    const imageRef = ref(storage, `Posts-Images/${image.name + v4()}`);
                    uploadBytes(imageRef, image).then(async (snapshot) => {
                        await getDownloadURL(imageRef, snapshot.ref).then(async (url) => {
                            console.log(url + 'this is your url')
                            images.push(url)
                            setImageUrls(images)
                            setValues(imageUrls(images))
                        });
                    });
                })
            };
        }

        if (!hasErrors()) {
            try {
                const newPostData = {
                    
                        title: values.title,
                        imageUrl: values.imageUrl,
                        ownerId: user.id,
                        creator: user.email,
                        ownerUsername: currentUser.stringValue,
                  
                };
                await postService.update(id, newPostData);
                navigate(-1);
            } catch (err) {
                console.log(err);
            }
        }
    };


    useEffect(() => {
        try {

            postService.update().then((res) => {
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
    }, )


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
                const currentUser = res._document.data.value.mapValue.fields.userName
                console.log(currentUser.stringValue + 'this is e')

                setCurrentUser(currentUser)
            })

        } catch (error) {
            setHasCatchedError(true)
            console.log(error)
        }
    },[])
    const [errors, setErrors] = useState(errorsInitialState);

    const createPostHandler = async (ev) => {
        ev.preventDefault();
        getTime();
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
      values.title=value
        setInputValues((oldState) => ({ ...oldState, title: value }));
    };


const deletePost = async()=>{
    try{
        await postService.deletePost(id)
        navigate(-1)
    }catch(error){
        console.log(error);
    }
}




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
                onSubmit={editPostHandler}>
                <div className='overlay' >
                    <div className='modalContainer' >
                        <div className='postcontainer'>
                            <div className='closeContainer'>
                                <span className='closeIcon' onClick={()=>navigate(-1)}>
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
                                            value={values.title}
                                            ></textarea>
                                    </label>
                                </div>
                                <div className='closeContainer'>
                                    <span className='closeIcon' onClick={cancelImage} >
                                        <FontAwesomeIcon icon={faRectangleXmark} />
                                    </span>
                                </div>
                                <div className='uploadImagesContainer' onChange={uploadFile}>
                                <div className='uploadImagesContainer' onChange={uploadFile}>
                                    {files.map((file, key) => {
                                        return (
                                            <img className='postImage12' key={key} src={URL.createObjectURL(file)} alt="" />
                                        )
                                    })}
                                </div>
                             
                                    {values.imageUrl?.map((url) => {
                                        return (
                                            <img className='postImage12'  src={url} alt="" />
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
                              
                                    />
                                    <FontAwesomeIcon className='locationIcon' icon={faLocationDot} />
                                    <FontAwesomeIcon className='emojiIcon' icon={faFaceGrinTongue} />
                                </div>

                                <div className='btnsContainer'>
                                    <button className='cancelBtn' onClick={()=>navigate(-1)}>Cancel</button>
                                    <button className='createPostBtn1' onClick={editPostHandler} >Create</button>
                                    <button className='createPostBtn1' onClick={deletePost} >Delete this post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default EditPost;