import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import {auth, db} from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const postCollection = collection(db, 'Tsers');
const create = async (data) => {
    return addDoc(postCollection, data);
}
const Username ={UserName:'USername'}
const register = async (email, password) => {
    return await createUserWithEmailAndPassword(auth,email, password,Username).then(cred=>{
      return   setDoc(doc(db, "Users", cred.user.uid), Username);
            
    }).then(()=>{
        console.log('Succsesfull')
    })
}

const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

const logout = async () => {
    return await signOut(auth);
}

export {
    register,
    login,
    logout
}