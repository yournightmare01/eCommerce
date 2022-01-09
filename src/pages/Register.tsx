import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { useEffect, useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '../components/UI/Form';
import useInput from '../hooks/use-input';

export const firebaseConfig = {
  apiKey: 'AIzaSyDapoOvzZodgxrQNtIoJpJ-58CpBNP58EQ',
  authDomain: 'ecommerce-177d7.firebaseapp.com',
  databaseURL:
    'https://ecommerce-177d7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ecommerce-177d7',
  storageBucket: 'ecommerce-177d7.appspot.com',
  messagingSenderId: '273390666982',
  appId: '1:273390666982:web:371f286333ec6b60896727',
};

const isEmail = (value: any) => value.includes('@') && value.includes('.');

const Register = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();
  const [error, setError] = useState('');

  const userDataHandler = () => {
    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    setCredentials({ email: emailValue, password: passwordValue });
  };

  const {
    value: enteredMail,
    valueChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
  } = useInput(isEmail);

  useEffect(() => {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    const userPassword = credentials.password;
    const userEmail = credentials.email;

    userPassword &&
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code.replaceAll('-', ' ').split('auth/');
          setError(errorCode);
        });
  }, [credentials]);

  return (
    <Form>
      <h2>Register</h2>
      <h4>Enter your email and password you want.</h4>
      <p className='error'>{error}</p>
      <input
        type='email'
        ref={emailInputRef}
        placeholder='yourmail@gmail.com'
        value={enteredMail}
        onChange={mailInputChangeHandler}
        onBlur={mailInputBlurHandler}
      />
      <input type='password' ref={passwordInputRef} placeholder='password' />
      <Button onClick={userDataHandler}>Register</Button>
      <Link to='/login'>Already have an account? Log in here. </Link>
    </Form>
  );
};

export default Register;
