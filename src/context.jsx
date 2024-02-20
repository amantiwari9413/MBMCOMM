import React, { createContext, useEffect, useState } from 'react';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from './firebase/firebase';
// Create a context
const UserContext = createContext();

// Create a context provider
export const UserContextProvider = ({ children }) => {
  console.log("i am in contxt provider fun")
  const [UserDtail, setUserDtail] = useState(11); 
  const [isLoding, setisLoding] = useState(false);

  function sigin(auth,email,password){
    return signInWithEmailAndPassword(auth,email,password) 
  }

  function sigup(email,password,name){
    console.log("in sinup")
    return createUserWithEmailAndPassword(auth,email,password)
    
  }

  useEffect(()=>{
    console.log("in the useffect")
    onAuthStateChanged(auth , (user)=>{
      console.log(user)
      console.log("in the event listionar")
    })
  },[])


  const backStore={
    sigin,
    UserDtail,
    isLoding,
    setisLoding,
    sigup
  }

  return (
    
    <UserContext.Provider value={backStore}>
      {console.log("i am in contxt provider body")}
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;