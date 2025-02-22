import React from 'react'


function Navbar(props) {
  return (


    <div>
      <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" style={props.style} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
              </li> */}
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
              <label className="form-check-label" style={props.style} htmlFor="flexSwitchCheckChecked">{`${props.mode === "light" ? "Dark" : "Light"} Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
