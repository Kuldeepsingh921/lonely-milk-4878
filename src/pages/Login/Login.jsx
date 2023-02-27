import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link
} from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Login.module.css';

function Login() {
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('');
  const [load, setload] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser, isAuth } = useContext(AuthContext);
  const comingFrom = location.state?.data || '/';
  const [error, setError] = useState('');

  const validateForm = () => {
    let isValid = true;
    if (!email || !Password) {
      setError('Please fill all the fields');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      isValid = false;
    } else if (Password.length < 8) {
      setError('Password must be at least 8 characters long');
      isValid = false;
    }
    return isValid;
  };

  const submitLogin = async () => {
    setload(true);
    console.log(load);

    setError('');
    if (validateForm()) {
      try {
        let res = await fetch(`https://mockserver-fhbg.onrender.com/users`);
        let data = await res.json();
        // console.log(data);
        let Auth = false;
        for (let i in data) {
          if (data[i].email === email && data[i].Password === Password) {
            Auth = true;
            loginUser(data[i].name);
            console.log(data[i].name);
            break;
          }
        }
        setload(false);
        if (Auth === false) {
          alert('Please enter right email or password!');
        } else {
          alert('Login Successful!');
          navigate('/');
        }
        console.log(Auth);
      } catch (error) {
        setload(false);

        console.log(error);
      }
      setemail('');
      setPassword('');
    }
  };

  if (isAuth) return <Navigate to={comingFrom} replace />;

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading fontFamily='cursive' color='#4e82e7' textAlign='center'>
          Login
        </Heading>
        {/* <Button onClick={logoutUser} marginLeft='80%'>Sign out</Button> */}
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder='Your Email Address'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type='email'
            className={
              error && (!email || !/\S+@\S+\.\S+/.test(email)) ? 'invalid' : ''
            }
          />

          {error && (!email || !/\S+@\S+\.\S+/.test(email)) && (
            <span className='error'>
              {'* '}
              {error}
            </span>
          )}

          <FormLabel>Password</FormLabel>
          <Input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Your Password Address'
            type='Password'
            className={error && Password.length < 8 ? 'invalid' : ''}
          />
          {error && Password.length < 8 && (
            <span className='error'>
              {'* '}
              {error}
            </span>
          )}
          <FormHelperText>
            We'll never share your Email & Password.
          </FormHelperText>
          <FormHelperText>
            If have no account click{' '}
            <Link color='rgb(252,39,121)' href='/signup'>
              Signup
            </Link>
          </FormHelperText>
          <Button
            w='100px'
            marginLeft='42%'
            marginTop='30px'
            color='white'
            background='#4e82e7'
            onClick={submitLogin}
          >
            Log in
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Login;
