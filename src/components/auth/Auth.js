import React , { useEffect, useState } from 'react';
import firebaseApp from './firebaseApp';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);

    function authChange(user) {
        console.log('auth context updated', user)
        setCurrentUser(user)
    }
    // useEffect(() => {
    //     async function authChange() {
    //         await firebaseApp.auth().onAuthStateChanged(function(user) {
    //             setCurrentUser(user)
    //         });
    //     }
    //     authChange()
    // }, []);

    return (
        <AuthContext.Provider
            value={{ currentUser, authChange }}
        >
            {children}
        </AuthContext.Provider>
    );
};