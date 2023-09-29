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
      const response = await axios.post('https://carsapp-pgj8.onrender.com', {
        name,
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
    <div className='bg-blue-600 flex flex-row justify-around p-10 m-6 rounded-lg '>
      <input type="text" placeholder="name" onChange={(e) => setname(e.target.value)} />
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="rounded bg-blue-300 p-2 hover:italic" onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignUp;
