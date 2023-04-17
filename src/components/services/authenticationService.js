import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'



const register = async (email, password, firstName, lasttName, userName, city, petName) => {
    return await createUserWithEmailAndPassword(auth, email, password).then(cred => {
       

             setDoc(doc(db, "Users", cred.user.uid), ({
                userName: userName,
                city: city,
                firstName: firstName,
                lastName: lasttName,
                petName: petName
            }));
            const auth = getAuth();
            sendSignInLinkToEmail(auth, email)
              .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
              });
        

    }).then(async() => {
        
    });
    
}

const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

const logout = async () => {
    return await signOut(auth);
}
const userCollection = collection(db, 'Users');
const listAllUsers = async () => {
  return await getDocs(userCollection);
}
const getUserById = async (id) => {
  const currentUser= doc(db, 'Users', id);
  return await getDoc(currentUser);
}
export {
    register,
    login,
    logout,
    listAllUsers,
    getUserById
}