import React, { useState } from 'react';
import styles from './Signup.module.css';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Button,
  Link,
  Select
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [Password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const postdata = async () => {
    setload(true);

    setError('');

    // Basic validation
    if (!name || !email || !Password) {
      setError('All fields are required.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address.');
      return;
    }

    // Password validation
    if (Password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          Password,
          isAdmin: false
        })
      });
      let data = await res.json();
      // console.log(data);
      setload(false);
      alert('Signup Successfull!');
      navigate('/login');
    } catch (error) {
      setload(false);
      console.log(error);
    }

    setname('');
    setemail('');
    setPassword('');
  };

  return (
    <div>
      <div className={styles.mainDiv}>
        <Heading fontFamily='cursive' textAlign='center' color='#4e82e7  '>
          Sign up
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder='Your Name'
            value={name}
            onChange={(e) => setname(e.target.value)}
            type='text'
          />

          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type='email'
            placeholder='Your Email Address'
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder='Your Password'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />

          {error && (
            <div className='error'>
              {'* '}
              {error}
            </div>
          )}

          <FormHelperText>
            If have an account click{' '}
            <Link color='rgb(252,39,121)' href='/login'>
              Login
            </Link>
          </FormHelperText>
          {load ? (
            <Button
              isLoading
              w='100px'
              marginLeft='42%'
              marginTop='30px'
              color='white'
              background='rgb(252,39,121)'
              colorScheme='teal'
              variant='solid'
            >
              Email
            </Button>
          ) : (
            <Button
              onClick={postdata}
              loadingText='Submitting'
              w='100px'
              marginLeft='42%'
              marginTop='30px'
              color='white'
              background='#4e82e7'
              _hover={{
                bg: 'blue.500'
              }}
            >
              Sign up
            </Button>
          )}
        </FormControl>
      </div>
    </div>
  );
}

export default Signup;
