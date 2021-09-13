import Layout from "../../components/Layout/Layout";
import { useState } from "react";
// import './SignUp.css'
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";

export default function SignUp(props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const history = useHistory();

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const onSignUp = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  return (
    <Layout user={props.user}>
      <form onSubmit={onSignUp}>
        <input
          onChange={handleChange}
          required
          type="text"
          name="name"
          id="name"
          value={form.name}
          placeholder="Name"
        />
        <input
          onChange={handleChange}
          required
          type="text"
          name="email"
          id="email"
          value={form.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          required
          type="password"
          name="password"
          id="password"
          value={form.password}
          placeholder="Password"
        />
        <input
          onChange={handleChange}
          required
          type="password"
          name="passwordConfirmation"
          id="password-confirmation"
          value={form.passwordConfirmation}
          placeholder="Confirm Password"
        />
        <button type="submit">Sign up</button>
        {form.isError ? <p>{form.errorMsg}</p> : null}
      </form>
    </Layout>
  );
}
