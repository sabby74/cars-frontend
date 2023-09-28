// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    console.log("log coming from Login.js");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://carsapp-pgj8.onrender.com/user', {
        username,
        password,
      });

      // Handle the token received in the response (store it, set authentication state, etc.)
      console.log(response.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='bg-orange-500'>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
