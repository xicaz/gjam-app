import "./App.css"
import { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home"
import About from "./screens/About/About"
import JamDetail from "./screens/JamDetail/JamDetail"
import JamForm from "./screens/JamForm/JamForm"
import Jams from "./screens/Jams/Jams"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp"

function App() {
  // const [user, setUser] = useState()

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/jams" component={Jams} />
      <Route exact path="/jams/new" component={JamForm} />
      <Route exact path="/jams/:id" component={JamDetail} />
      <Route exact path="/jams/:id/edit" component={JamForm} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/about" component={About} />
    </Switch>
  )
}

export default App
