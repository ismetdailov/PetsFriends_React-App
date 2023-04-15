import { collection, getDocs } from "firebase/firestore";
import {auth, db} from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,getAuth} from 'firebase/auth'

const register = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
}

const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

const logout = async () => {
    return await signOut(auth);
}
const postCollection = collection(db, 'Users');

const listAllUsers = async () => {
    return await getDocs(postCollection);
}
// function listAllUsers(nextPageToken) {
  
//     // List batch of users, 1000 at a time.
//     // getAuth().listUsers(1000,nextPageToken)
//     //   .then(function(listUsersResult) {
//     //     listUsersResult.users.forEach(function(userRecord) {
//     //       console.log('user', userRecord.toJSON());
//     //     });
//     //     if (listUsersResult.pageToken) {
//     //       // List next batch of users.
//     //       listAllUsers(listUsersResult.pageToken);
//     //     }
//     //   })
//     //   .catch(function(error) {
//     //     console.log('Error listing users:', error);
//     //   });
//   }
//   // Start listing users from the beginning, 1000 at a time.
//   listAllUsers();

export {
    register,
    login,
    logout,
    listAllUsers
}