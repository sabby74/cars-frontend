import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer';

export default function App() {
  return (
    <h1 className="bg-gray-400 h-14 m-3 pb-4 font-extrabold rounded-lg text-slate-600 items-center">
      <Header />
      <Outlet />
      <Footer />
    </h1>
  )
}