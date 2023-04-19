import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Login with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // register with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // register with google
  const createUserWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // LogOut
  const logOut = () => {
    signOut(auth)
      .then(console.log("Sign out successfull."))
      .catch((error) => setError(error.message));
  };
  // Observe User Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    //   Stop observing when unmounting
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loginUser,
    createUser,
    createUserWithGoogle,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
