import { useState } from "react"
import { useHistory } from "react-router"
import Layout from "../../components/Layout/Layout"
import { signIn } from "../../services/users"

export default function SignIn(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: ""
  })

  const history = useHistory()

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSignIn = async (e) => {
    e.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push("/")
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }

  }

  return (
    <Layout user={props.user}>
      <form onSubmit={onSignIn}>
        <input type="text" name="email" id="email" placeholder="email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" id="password" placeholder="password" value={form.password} onChange={handleChange} />
        <button type="submit">Sign in</button>
        {form.isError ? <p>{form.errorMsg}</p> : null}
      </form>
    </Layout>
  )
}
