import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"

export default function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  )
}
