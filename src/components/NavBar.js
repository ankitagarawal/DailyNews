import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

      <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Daily<span style={{ color: "red" }}>News</span></Link>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{ marginLeft: "700px" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              {/* <li className="nav-item"><Link className="nav-link active" to="/">About</Link></li> */}
              <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/General">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link></li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
