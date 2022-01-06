import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { firebaseConfig } from './Register';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();

  const userDataHandler = () => {
    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    setCredentials({ email: emailValue, password: passwordValue });
  };

  useEffect(() => {
    const userPassword = credentials.password;
    const userEmail = credentials.email;
    initializeApp(firebaseConfig);

    const auth = getAuth();
    userPassword &&
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, '      ', errorMessage);
        });
  }, [credentials]);

  // const sendToFirebase = () => {
  //   const userPassword = credentials.password;
  //   const userEmail = credentials.email;
  //   const app = initializeApp(firebaseConfig);
  //   const db = getFirestore(app);
  //   const auth = getAuth();

  //   createUserWithEmailAndPassword(auth, userEmail, userPassword)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode);
  //       console.log(errorMessage);
  //       // ..
  //     });
  // };

  return (
    <Card>
      <h2>Login</h2>
      <h4>Login using your existing email and password.</h4>
      <input ref={emailInputRef} type='email' />
      <input ref={passwordInputRef} type='password' />
      <Button onClick={userDataHandler}>Login</Button>
      <Link to='/register'>Dont have an account yet? Create one here. </Link>
    </Card>
  );
};

export default Login;
