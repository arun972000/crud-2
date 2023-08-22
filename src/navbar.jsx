


// eslint-disable-next-line react/prop-types
const Navbar=({toggle,handling})=>{

    return(<nav className="navbar navbar-expand-lg shadow p-3 mb-4 bg-body-tertiary">
    <div className="container-fluid">
      <button className="btn btn-primary" onClick={handling}>{ toggle ? (<i className="fa-solid fa-angles-right" style={{color: "#ffffff"}}></i>) : (<i className="fa-solid fa-angles-left" style={{color: "#ffffff"}}></i>)}</button>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link tab active" aria-current="page" href="www.google.com">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tab" href="www.google.com">Link</a>
          </li>
          
          
        </ul>
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
      </div>
    </div>
  </nav>)
}

export default Navbar;