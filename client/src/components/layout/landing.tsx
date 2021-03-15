import React from 'react'
import { Link } from 'react-router-dom';
import { AllRoutes } from '../../enum/allroutes.enum';

const Landing: React.FC<{}> = () => {
    return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to={AllRoutes.REGISTER} className="btn btn-primary">Sign Up</Link>
            <Link to={AllRoutes.LOGIN} className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Landing;