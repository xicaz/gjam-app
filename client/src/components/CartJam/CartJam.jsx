import "./CartJam.css"
import JamModal from "../JamModal/JamModal"
import { useEffect, useState } from "react"
import { getJam } from "../../services/jams"
import { removeFromCart, addToCart } from "../../services/users"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function JamCard(props) {
  const [fullJam, setFullJam] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchJam = async () => {
      console.log("props.jam", props.jam)
      //NOTE: props.jam is actually the id of the jam
      let jam;
      try {
        jam = await getJam(props.jam.toString())
      } catch (error) {
        for (let i = 0; i < props.quantity; i++) {
          removeFromCart(props.user.id)
        }
      } finally {
        setFullJam(jam)
        setIsLoaded(true)
      }
    }
    fetchJam()
  }, [props.jam, props.quantity, props.user])

  if(!isLoaded || !fullJam) {
    return null
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRemove = async () => {
    await removeFromCart(props.user.id, fullJam._id);
    props.setToggleFetch(prevState => !prevState)
  }

  const handleAdd = async () => {
    await addToCart(props.user.id, fullJam._id)
    props.setToggleFetch(prevState => !prevState)
  }

  return (
    <>
      <div className="jam-card cart">
        <JamModal
          jam={fullJam}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <div className="card-image">
          <img
            onClick={handleOpen}
            className="jam-card-image"
            src={fullJam.imgURL}
            alt={fullJam.name}
          />
        </div>
        <div className="jam-info">
          <h3 className="cart-name">{fullJam.name}</h3>
          <div className="quantity">
            <p className="cart-p">Quantity: {props.quantity}</p>
            <div className="counters">
              <FontAwesomeIcon icon={faPlus} onClick={handleAdd} className="fa-2x"/>
              <FontAwesomeIcon icon={faMinus} onClick={handleRemove} className="fa-2x"/>
            </div>
          </div>
          <p className="cart-p">Total Price: ${(Number(props.quantity) * Number(fullJam.price)).toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}
