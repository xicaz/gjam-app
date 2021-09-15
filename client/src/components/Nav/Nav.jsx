import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <NavLink className="link" to="/jams">
            jams
          </NavLink>
          <NavLink className="link" to="/jams/new">
            create
          </NavLink>
          <NavLink className="link" to="/about">
            about
          </NavLink>
          {props.user ? (
            <>
              <p>{props.user.name}</p>
              <NavLink className="link" to="/signout">
                sign out
              </NavLink>
            </>
          ) : (
            <NavLink className="link" to="/signin">
              sign in
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
