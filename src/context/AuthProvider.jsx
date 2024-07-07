import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../services/firebase.config";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const [user,setUser]=useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser)
        return () => unsubscribe()
    })

    const authInfo = {
        auth,
        createUser
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