import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import { firebaseConfig } from './Register';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useRef, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import Form from '../components/UI/Form';
import useInput from '../hooks/use-input';

const isEmail = (value: any) => value.includes('@') && value.includes('.');

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const emailInputRef = useRef<any>();
  const passwordInputRef = useRef<any>();
  const [error, setError] = useState('');

  const {
    value: enteredMail,
    valueChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
  } = useInput(isEmail);

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
          const errorCode = error.code.replaceAll('-', ' ').split('auth/');
          setError(errorCode);
        });
  }, [credentials]);

  return (
    <Form>
      <h2>Login</h2>
      <h4>Login using your existing email and password.</h4>
      <p className='error'>{error}</p>
      <input
        ref={emailInputRef}
        type='email'
        placeholder='yourmail@gmail.com'
        value={enteredMail}
        onChange={mailInputChangeHandler}
        onBlur={mailInputBlurHandler}
      />
      <input ref={passwordInputRef} type='password' placeholder='password' />
      <Button onClick={userDataHandler}>Login</Button>
      <Link to='/register'>Dont have an account yet? Create one here. </Link>
    </Form>
  );
};

export default Login;
