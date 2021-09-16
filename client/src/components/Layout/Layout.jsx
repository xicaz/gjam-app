import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="layout">
      <header>
        {props.banner ? <Banner /> : null}
        <Nav user={props.user} />
      </header>
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
