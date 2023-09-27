import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <h1 className=" bg-indigo-400 h-16 text-3xl font-bold flex items-center  ">
      Car Mantainance App
    </h1>
    <Header />  
    <Login />
    <Outlet />

   
    </div>
  );
}

export default App;
