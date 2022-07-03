import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';



initializeFirebase();
const useFirebase = () => {
   
    const [user, setUser] = useState({})
    // const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name) => {
        // setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser( email, name, 'POST' );
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
               
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }




    

   
   
    const signInUsingGoogle = () =>{
        // setIsLoading(true);
         signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        // .finally(() => setIsLoading(false));
    

    }
    const logOut = () => {
        // setIsLoading(true);
        signOut(auth)
            .then(() => { })
            // .finally(() => setIsLoading(false));
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user);
            }
            else {
                setUser({})
            }
            // setIsLoading(false);
          });
    },[])
    return{
        user,
    //  isLoading,
    registerUser,
        signInUsingGoogle,
        logOut

    }
}

export default useFirebase;