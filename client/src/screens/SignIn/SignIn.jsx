import { useState } from "react"
import Layout from "../../components/Layout/Layout"

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" id="email" placeholder="email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" id="password" placeholder="password" value={form.password} onChange={handleChange} />
        <button type="submit">Sign in</button>
      </form>
    </Layout>
  )
}
