import React from 'react'
import { Link } from 'react-router-dom';
import { AllRoutes } from '../../enum/allroutes.enum';

const Navbar: React.FC<{}> = () => {
    return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Developers</Link>
        </li>
        <li>
          <Link to={AllRoutes.REGISTER}>Register</Link>
        </li>
        <li>
          <Link to={AllRoutes.LOGIN}>Login</Link>
        </li>
      </ul>
    </nav>
    )
}

export default Navbar;