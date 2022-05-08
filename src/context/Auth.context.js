import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase.config";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
// const currentUser = auth.currentUser;
const [currentUser, setCurrentUser] = React.useState(null);
const [loading, setLoading] = React.useState(false);

React.useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, user => {
    //     setCurrentUser(user);
    // });
    
    return onAuthStateChanged(auth, user => {
        if(!user) {
            setLoading(true);
            setCurrentUser(null);
        }else {
            setLoading(true);
        }
        setCurrentUser(user);
        console.log(auth);
    });
    // return () => {
    //     unsubscribe();
    // };
}, []);

// onAuthStateChanged()
const value = {
    loading,
    currentUser,
}
return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider> 
    );

}