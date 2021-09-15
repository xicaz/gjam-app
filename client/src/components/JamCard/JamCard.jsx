import "./JamCard.css"
import JamModal from "../JamModal/JamModal"
import { useState } from "react"

export default function JamCard(props) {
  const { name, price } = props.jam
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="jam-card">
        <JamModal
          jam={props.jam}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <div className="card-image">
          <img
            onClick={handleOpen}
            className="jam-card-image"
            src={props.imgURL}
            alt={name}
          />
        </div>
        <div className="jam-info">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>
      </div>
    </>
  )
}
