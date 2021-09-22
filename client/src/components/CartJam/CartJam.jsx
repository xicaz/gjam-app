import "./CartJam.css"
import JamModal from "../JamModal/JamModal"
import { useEffect, useState } from "react"
import { getJam } from "../../services/jams"
import {
  removeFromCart,
  addToCart,
  removeAllFromCart,
} from "../../services/users"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

export default function JamCard(props) {
  const [open, setOpen] = useState(false)

  const { jam, quantity } = props;

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRemove = async () => {
    await removeFromCart(props.user.id, jam._id)
    props.setToggleFetch((prevState) => !prevState)
  }

  const handleAdd = async () => {
    await addToCart(props.user.id, jam._id)
    props.setToggleFetch((prevState) => !prevState)
  }

  return (
    <>
      <div className="jam-card cart">
        <JamModal
          jam={jam}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <div className="card-image">
          <img
            onClick={handleOpen}
            className="jam-card-image"
            src={jam.imgURL}
            alt={jam.name}
          />
        </div>
        <div className="jam-info">
          <h3 className="cart-name">{jam.name}</h3>
          <div className="quantity">
            <p className="cart-p">Quantity: {quantity}</p>
            <div className="counters">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={handleAdd}
                className="fa-2x"
              />
              <FontAwesomeIcon
                icon={faMinus}
                onClick={handleRemove}
                className="fa-2x"
              />
            </div>
          </div>
          <p className="cart-p">
            Total Price: $
            {(Number(props.quantity) * Number(jam.price)).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  )
}
