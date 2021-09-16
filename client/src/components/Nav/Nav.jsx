import { NavLink } from "react-router-dom";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

export default function NavMenu(props) {
  return (
    <Nav>
      <Navbar className="justify-content-end">
        <NavDropdown title="products" id="products-dropdown">
          <NavDropdown.Item><NavLink className="nav-link" to="/">premium</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink className="nav-link" to="/jams">jams list</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavLink className="nav-link" to="/jams/new">create</NavLink>
        <NavLink className="nav-link" to="/about">about</NavLink>
        <NavDropdown title="account" id="products-dropdown">
          {props.user
          ? <>
              <NavDropdown.Item><NavLink className="nav-link" to="/">sign out</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link" to="/jams">jams list</NavLink></NavDropdown.Item>
            </>
          : <>
              <NavDropdown.Item><NavLink className="nav-link" to="/signin">sign in</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink className="nav-link" to="/signup">sign up</NavLink></NavDropdown.Item>
            </>
          }
        </NavDropdown>
      </Navbar>
    </Nav>
  );
}
