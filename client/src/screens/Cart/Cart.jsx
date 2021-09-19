import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getUser, clearCart } from "../../services/users";
import CartJam from "../../components/CartJam/CartJam";
import Button from "react-bootstrap/Button";
import "./Cart.css"
import { useHistory } from "react-router";
import { getJam } from "../../services/jams";

export default function Cart(props) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [userObj, setUserObj] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(props.user.id)
      console.log("user", user)
      setUserObj(user)
      setIsLoaded(true)
      console.log("subtotal in frontend", user.subtotal)
    }
    fetchUser()
  }, [props.user, toggleFetch])

  if(!isLoaded) {
    return(
      <Layout>
        <h1>issue</h1>
      </Layout>
    )
  }

  const handleClear = async () => {
    const clear = await clearCart(props.user.id);
    if (clear) {
      alert("cart cleared")
      history.push("/")
    }
  }

  return(
    <Layout user={props.user}>
      {/* <p>Subtotal: {userObj.subtotal}</p> */}
      <div className="clear-btn-container">
        <Button variant="outline-danger" id="clear-btn" className="clear-cart" onClick={handleClear}>
          Clear Cart
        </Button>
      </div>
      <div className="cart-jams">
        {userObj.cart.length === 0 ? <h1>Cart is empty!</h1> : null}
        <div className="jams-container">
          {userObj.cart.map((cartItem, index) => <>
            <CartJam jam={cartItem.jamId} quantity={cartItem.quantity} key={index} user={props.user} setToggleFetch={setToggleFetch}/>
          </>
          )}
        </div>
      </div>
    </Layout>
  )
}