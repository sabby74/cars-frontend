// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://carsapp-pgj8.onrender.com/user/login', {
        username,
        password,
      },
      { withCredentials: true }
      );

      // Handle the token received in the response (store it, set authentication state, etc.)
      
      console.log(response.data);
      if (response.data == true ) {
        navigate('/');
        // console.log(await axios.get('http://localhost:7070/test' ,{ withCredentials: true }))
      }else{
        alert("Wrong Username or Password")
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='bg-green-700 flex flex-row justify-around p-10 m-6 rounded-lg text-slate-700 t '>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="rounded bg-green-400 p-2 hover:italic" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
