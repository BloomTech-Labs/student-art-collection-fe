import React , { useEffect, useState } from 'react';
import firebaseApp from './firebaseApp';

export const AuthContext = React.createContext();

export const AuthConsumer =AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ authenticated, setAuthenticated ] = useState(false)

    useEffect(() => {
        async function authChange() {
            await firebaseApp.auth().onAuthStateChanged(function(user) {
                if (user) {
                    setCurrentUser(user)
                    setAuthenticated(true)
                    setLoading(false)
                } else {
                    setAuthenticated(false)
                    setLoading(false)
                }
            });
        }
        authChange()
    }, []);

    return (
        <AuthContext.Provider
            value={{ currentUser, loading, authenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};