import {auth, db} from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const register = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password).then(create=>{
        return db.collection('Users').doc(create.user.uid)
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