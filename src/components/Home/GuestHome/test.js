import { collection, query,where,  getDocs } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
const q = query(collection(db,"Users"));

const users = collection(db, "Posts")
const myQuery = query(users);
const some = getDocs(myQuery)

function  Test () {

   console.log( myQuery);
   console.log( users);
   console.log(some)
   
   
   
  
}

export default Test