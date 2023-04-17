import { db } from "../../config/firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, getDoc, query, where } from "firebase/firestore";

const postCollection = collection(db, 'Posts');

const getAll = async () => {
    return await getDocs(postCollection);
}

const getById = async (id) => {
    const currentPost = doc(db, 'Post', id);
    return getDoc(currentPost);
}

const getUserPosts = async(id) => {
    const myQuery = query(postCollection, where('ownerId', '==', id));
    return getDocs(myQuery);
}


const create = async (data) => {
    return addDoc(postCollection, data);
}

const update = async (id, data) => {
    const currentPostRef = doc(db, 'Post', id);
    return updateDoc(currentPostRef, data);
}

const deletePost = async (id) => {
    const currentPostRef = doc(db, 'Post', id);
    deleteDoc(currentPostRef);
}

export {
    getAll,
    getById,
    getUserPosts,
    create,
    update,
    deletePost
}