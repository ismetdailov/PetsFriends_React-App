import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import fireconfig from '../../../config/firebaseConfig.js'

let db = false;

export const getDb = () => {
    if(!db){
        const firebaseConfig = {
            apiKey: <fireconfig.apiKey/>,
            authDomain: <fireconfig.authDomain/>,
            projectId: <fireconfig.projectId/>,
            storageBucket: <fireconfig.storageBucket/>,
            messagingSenderId: <fireconfig.messagingSenderId/>,
            appId: <fireconfig.appId/>
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}
export default getDb