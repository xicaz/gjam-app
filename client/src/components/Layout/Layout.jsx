import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"
import Banner from "../Banner/Banner"

export default function Layout(props) {
  return (
    <div className="layout">
      {props.banner ? <Banner /> : null}
      <Nav user={props.user}/>
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  )
}
