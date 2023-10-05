/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../Firebase/Firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
// eslint-disable-next-line no-unused-vars
const [user,setUser] = useState(null)
   

const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}
const logIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
    return signOut(auth)
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)

    })
    return () => {
        unSubscribe()
    }
},[])

    const AuthInfo = {
        user,
        createUser,
        logIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
