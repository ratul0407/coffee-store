import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  // user and loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //creating user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in existing users
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   all the provider values
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
