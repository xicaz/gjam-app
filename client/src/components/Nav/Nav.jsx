import { NavLink } from "react-router-dom";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown} from 'react-bootstrap';

export default function NavMenu(props) {
  return (
    <Navbar sticky="top" collapseOnSelect expand="sm" className="navbar-dark justify-content-center">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <NavDropdown title="products" id="products-dropdown">
          <NavDropdown.Item><NavLink className="nav-link" to="/">premium</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink className="nav-link" to="/jams">jams list</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavLink className="nav-link" to="/jams/new">create</NavLink>
        <NavLink className="nav-link" to="/about">about</NavLink>
        <NavDropdown title="account" id="products-dropdown">
          {props.user
          ? <>
              <NavDropdown.Item><NavLink className="nav-link" to="/signout">sign out</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link" to="/jams">jams list</NavLink></NavDropdown.Item>
            </>
          : <>
              <NavDropdown.Item><NavLink className="nav-link" to="/signin">sign in</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link" to="/signup">sign up</NavLink></NavDropdown.Item>
            </>
          }
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}
