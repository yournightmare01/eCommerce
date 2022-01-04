import Card from '../components/UI/Card';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useEffect, useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDapoOvzZodgxrQNtIoJpJ-58CpBNP58EQ',
  authDomain: 'ecommerce-177d7.firebaseapp.com',
  databaseURL:
    'https://ecommerce-177d7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ecommerce-177d7',
  storageBucket: 'ecommerce-177d7.appspot.com',
  messagingSenderId: '273390666982',
  appId: '1:273390666982:web:371f286333ec6b60896727',
};

const Register = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();

  const emailhandler = () => {
    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    setCredentials({ email: emailValue, password: passwordValue });
    sendToFirebase();
    const userPassword = credentials.password;
    const userEmail = credentials.email;
  };

  const sendToFirebase = () => {
    const userPassword = credentials.password;
    const userEmail = credentials.email;
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <Card>
      <h2>Register</h2>
      <h4>Enter your email and password you want.</h4>
      <input type='email' ref={emailInputRef} />
      <input type='password' ref={passwordInputRef} />
      <Button onClick={emailhandler}>Register</Button>
      <Link to='/login'>Already have an account? Log in here. </Link>
    </Card>
  );
};

export default Register;
