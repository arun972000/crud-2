import { Link } from "react-router-dom";
import "./sidebar.css";
// eslint-disable-next-line react/prop-types
function Sidebar({ toggle }) {


  return (<ul className={`nav sidebar flex-column ${toggle ? 'show' : ''}`}>
    <Link to="/" className="navbar-brand text-center my-2 mt-3"><h1 style={{ fontSize: "18px", color: "white" }}><i className="fa-solid fa-face-smile-wink fa-2x" style={{ color: "#ffffff" }}></i>{"       "}SB ADMIN</h1></Link>
    <hr className="my-2"></hr>
    <li className="nav-item">
      <Link to="/" className="nav-link Active"><i className="fas fa-fw fa-tachometer-alt"></i><span style={{ marginLeft: 8 }}>Dashboard</span></Link>
    </li>
    <hr className="my-2"></hr>
    <li className="nav-item">
      <span className="nav-link" href="www.google.com"><b>CRUD</b></span>
    </li>
    <li className="nav-item my-2">
     <Link to="/teacher/home" className="nav-link Active"><i className="fa-solid fa-chalkboard-user" style={{ color: "#ffffff" }}></i><span style={{ marginLeft: 8 }}>Teacher</span></Link>
    </li>
    <li className="nav-item my-2">
      <Link className="nav-link Active" to="/student/home"><i className="fa-solid fa-graduation-cap" style={{ color: "#ffffff" }}></i><span style={{ marginLeft: 8 }}>Student</span></Link>
    </li>
    <hr className="my-2"></hr>



  </ul>);
}

export default Sidebar;