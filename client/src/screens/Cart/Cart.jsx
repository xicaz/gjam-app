import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { clearCart, getCart } from "../../services/users";
import CartJam from "../../components/CartJam/CartJam";
import Button from "react-bootstrap/Button";
import "./Cart.css"
import { useHistory } from "react-router";

export default function Cart(props) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cart, setCart] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const fetchUser = async () => {
      const cart = await getCart(props.user.id)
      setCart(cart);
      setIsLoaded(true);
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
      {cart.length === 0 ? (
        <h1>Cart is empty!</h1>
      ) : 
        <>
          <p>Subtotal: ${(cart.reduce((prev, current) => {
            const currentPrice = Number(current.jam.price) * Number(current.quantity)
            return prev + currentPrice;
          }, 0)).toFixed(2)}</p>
          <div className="clear-btn-container">
            <Button variant="outline-danger" id="clear-btn" className="clear-cart" onClick={handleClear}>
              Clear Cart
            </Button>
          </div>
        </>
      }
      <div className="cart-jams">
        <div className="jams-container">
          {cart.map((cartItem, index) => <>
            <CartJam jam={cartItem.jam} quantity={cartItem.quantity} key={index} user={props.user} setToggleFetch={setToggleFetch}/>
          </>
          )}
        </div>
      </div>
    </Layout>
  )
}