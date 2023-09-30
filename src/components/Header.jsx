import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row justify-around p-4 mb-6 " >
      
        <Link className="hover:italic" to="/login">
          <div>Login</div>
        </Link>
        <Link className="hover:italic" to="/signup">
          <div>SignUp</div>
        </Link>
        <Link className="hover:italic" to="/">
          <div>Cars Maintainance App Home </div>
        </Link>
      
        <button className="bd-red" onClick={() => navigate("/logout")}>
        Logout
      </button>
      </nav>
  )
}

export default Header