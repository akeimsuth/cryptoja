import {
    GoogleAuthProvider,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    RecaptchaVerifier,
    sendEmailVerification,
    signInWithPhoneNumber ,
    updateEmail,
    updatePassword
  } from "firebase/auth";
  import * as firebase from 'firebase/app'
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";
import { createUser } from "../services/UserService";
import router from "next/router";
import toast from 'react-hot-toast';
  const firebaseConfig = {
    apiKey: "AIzaSyClcZATPWzQ2y9JOskfJ5Ucpb3baOj5jfk",
    authDomain: "cryptoja-3450e.firebaseapp.com",
    projectId: "cryptoja-3450e",
    storageBucket: "cryptoja-3450e.appspot.com",
    messagingSenderId: "800606986492",
    appId: "1:800606986492:web:c722def70a8b58ac623779",
    measurementId: "G-D8NV68NJ54"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const appVerifier = window.recaptchaVerifier;

  // window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  //   'size': 'invisible',
  //   'callback': (response) => {
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     onSignInSubmit();
  //   }
  // }, auth);

  const logInWithPhone = async(phoneNumber) => {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    }).catch((error) => {
      toast.error("Code failed to be sent!")
    });
  }

  const updateUserEmail = async (email) => {
    try {
      const val = await updateEmail(auth.currentUser, email)
      if (val){
        console.log(val);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const updateUserPassword = async (password) => {
    try {
      const val = await updateEmail(auth.currentUser, password)
      if (val){
        console.log(val);
      }
    } catch (err) {
      console.log(err)
    }
  }

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      const val = await signInWithEmailAndPassword(auth, email, password);
      if (val){
        toast.success("Logged In Successfully!")
      }
      setTimeout(() => {
        router.push("/")
      }, 2000);
    } catch (err) {
      console.error(err);
      toast.error("Incorrect Credentials!");
      // alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (name, email, password, phone, address) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await sendEmailVerification(user);
      router.push("/verify-email");
      createUser({
        userId: user.uid,
        name,
        phone,
        address,
        email,
      }).then(res => console.log(res))
      .catch(error => console.log(error))
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name,
    //     phone,
    //     address,
    //     authProvider: "local",
    //     email,
    //   });
    } catch (err) {
      console.error(err);
    //   alert(err.message);
    }

  };
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent!");
    } catch (err) {
      console.error(err);
      toast.error("User not found!");
    }
  };
  const logout = () => {
    signOut(auth);
    router.push("/signin")
  };
  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    updateUserEmail,
    updateUserPassword,
    logout,
  };