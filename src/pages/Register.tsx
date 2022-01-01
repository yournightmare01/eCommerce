import Card from '../components/UI/Card';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const Register = () => {
  return (
    <Card>
      <h2>Register</h2>
      <h4>Enter your email and password you want.</h4>
      <input type='email' />
      <input type='password' />
      <Button>Register</Button>
      <Link to='/login'>Already have an account? Log in here. </Link>
    </Card>
  );
};

export default Register;
