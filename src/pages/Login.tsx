import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Login = () => {
  return (
    <Card>
      <h2>Login</h2>
      <h4>Login using your existing email and password.</h4>
      <input type='email' />
      <input type='password' />
      <Button>Login</Button>
      <Link to='/register'>Dont have an account yet? Create one here. </Link>
    </Card>
  );
};

export default Login;
