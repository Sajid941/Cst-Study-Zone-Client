import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../services/firebase.config";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user,setUser]=useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser)
        return () => unsubscribe()
    })

    const authInfo = {
        auth,
        createUser,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}