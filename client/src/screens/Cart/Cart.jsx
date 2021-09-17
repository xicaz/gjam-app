import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getCart } from "../../services/users";
import CartJam from "../../components/CartJam/CartJam";
import Button from "react-bootstrap/Button";
import { removeFromCart } from "../../services/users";

export default function Cart(props) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cart, setCart] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchCart = async () => {
      const cart = await getCart(props.user.id)
      setCart(cart)
      setIsLoaded(true)
    }
    if (props.user) {
      fetchCart()
    }
  }, [props.user, toggleFetch])

  if(!isLoaded) {
    return(
      <Layout>
        <h1>issue</h1>
      </Layout>
    )
  }

  const handleDelete = async e => {
    const deleted = await removeFromCart(props.user.id, e.target.value);
    if (deleted) {
      setToggleFetch(!toggleFetch)
    }
  }

  return(
    <Layout user={props.user}>
      <div className="cart-jams">
        {cart.length === 0 ? <h1>Cart is empty!</h1> : null}
        {cart.map((cartItem, index) => <>
          <CartJam jam={cartItem.jamId} key={index}/>
          <Button variant="outline-danger" value={cartItem.jamId} type="submit" onClick={handleDelete} key={`BUTTON${index}`}>
            Remove
          </Button>
        </>
        )}
      </div>
    </Layout>
  )
}