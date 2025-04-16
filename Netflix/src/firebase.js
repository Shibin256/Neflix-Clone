// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword} from 'firebase/auth'
import {addDoc,
        collection,
        getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqlDKnkRI0kbdBww9PKmTVsyRs-oVxRHY",
  authDomain: "netflix-clone-1cbbe.firebaseapp.com",
  projectId: "netflix-clone-1cbbe",
  storageBucket: "netflix-clone-1cbbe.firebasestorage.app",
  messagingSenderId: "179109969335",
  appId: "1:179109969335:web:952a8bb013423787633c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db= getFirestore(app)

const signup=async (name,email,password)=> {
    try {
        const res= await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            email,
            authProvider:'local',
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login= async (email,password)=>{
    try {
        signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error);
    }
}
const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};