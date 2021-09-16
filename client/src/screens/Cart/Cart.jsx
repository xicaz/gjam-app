import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { getCart } from "../../services/users";
import JamCard from "../../components/JamCard/JamCard";

export default function Cart(props) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchCart = async () => {
      const cart = await getCart(props.user.id)
      setCart(cart)
      setIsLoaded(true)
    }
    if (props.user) {
      fetchCart()
    }
  }, [props.user])

  if(!isLoaded) {
    return(
      <Layout>
        <h1>issue</h1>
      </Layout>
    )
  }

  return(
    <Layout user={props.user}>
      <div className="cart-jams">
        {cart.map((item, index) => <JamCard jam={item} key={index}/>)}
      </div>
    </Layout>
  )
}