import "./JamCard.css";
import JamModal from "../JamModal/JamModal";
import { useState } from "react";

export default function JamCard(props) {
  const { name, price } = props.jam;
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          src={isShown ? props.jam.imgURL : props.jam.hoverImage}
          alt={name}
          onMouseEnter={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(true)}
        />
      </div>

      <div className="jam-info">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}
