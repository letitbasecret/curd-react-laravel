// import React from 'react'
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const Navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);
  function logout() {
    localStorage.clear();
    alert("are you sure ?");
    Navigate("/");
  }

  return (
    <div>
      <nav
        className=" navbar bg-primary navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/update">Update</Link>
            <Link to="/show">Show</Link>
            <Link to="/Search">Search</Link>
            <Link to="/signIn">SignIn</Link>
            <Link to="/signUp">SignUp</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout} className="btn btn-danger">
              <Link to="/logout">Logout</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
