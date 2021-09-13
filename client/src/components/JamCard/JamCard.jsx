import "./JamCard.css";
import { Link } from "react-router-dom";
import JamModal from "../JamModal/JamModal";

export default function JamCard(props) {
  const { name, price, _id } = props.jam;
  return (
    <>
      <div className="jam-card">
        <JamModal jam={props.jam} />
        <Link to={`/jams/${_id}`}>
          <img className="jam-card-image" src={props.imgURL} alt={name} />
        </Link>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </>
  );
}
