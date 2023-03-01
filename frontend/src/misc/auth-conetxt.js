import React, { createContext, memo, useCallback } from "react";
import { InitializeFirebaseApp } from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { navigate } from "gatsby";

InitializeFirebaseApp();
const auth = getAuth();

export const AuthContext = createContext();

export const AuthProvider = memo(( props ) => 
{
    const user = auth.currentUser;
    const signInGoogle = useCallback( async () =>
    {
        signInWithPopup(auth, new GoogleAuthProvider() )
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate(`/`);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }, []);

    return (
        <AuthContext.Provider value={{ user, signInGoogle }} >
            {props.children}
        </AuthContext.Provider>
    )
});