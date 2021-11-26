import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  


  const auth = getAuth();

  // Google sign in
  const handleGoogleSingIn = () => { 
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    
};

  // Github sign in
  const handleGithubSingIn = () => {
    setIsLoading(true);
   return signInWithPopup(auth, githubProvider)
    
  };

  // Facebook sign in
  const handleFacebookSingIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider)
     
  };

const handleName = (e) =>{
  setName(e.target.value);
};

const handleEmail = (e) =>{
setEmail(e.target.value);
};

const handlePassword = (e) =>{
  setPassword(e.target.value);
};

// Create email

const handleCreateEmail = () => {
  setIsLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
  
};

// Email sign in

const handleEmailSingIn = () => {
  setIsLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
  
};

const logOut = () =>{
  signOut(auth)
}

useEffect(()=>{
  const unsubscribed = onAuthStateChanged(auth, (user) => {
    if (user) {
      
      setUser(user)
     
    } else {
      setUser({})
    }
    setIsLoading(false);
  });
  return () => unsubscribed;
},[]);
  
  return {
    user,
    error,
    isLoading,
    handleGoogleSingIn,
    handleGithubSingIn,
    handleFacebookSingIn,
    handleName,
    handleEmail,
    handlePassword,
    handleCreateEmail,
    handleEmailSingIn,
    logOut,
    setUser,
    setError,
    setIsLoading,
    auth,
    name
    
  }
};

export default useFirebase;