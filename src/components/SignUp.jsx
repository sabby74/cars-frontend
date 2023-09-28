// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [name, setname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    console.log(handleSignup);
    try {
      const response = await axios.post('https://carsapp-pgj8.onrender.com/user/signup', {
        username,
        password,
      });

      // Handle the response (e.g., show a success message, redirect to login page)
      console.log(response.data);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div className='bg-red-300 '>
      <input type="text" placeholder="name" onChange={(e) => setname(e.target.value)} />
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignUp;
