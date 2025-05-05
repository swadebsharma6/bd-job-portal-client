import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

      // createUser
      const createUser =( email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }
      // signinUser
      const signInUser =( email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }


      // observer
      useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
                  console.log('Observe', currentUser);
                  setUser(currentUser);
                  setLoading(false);
            });

            return ()=>{
                  unsubscribe();
            }

      }, [])

      const authInfo ={
            user,
            loading,
            createUser,
            signInUser
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;