import "./JamCard.css";
import { Link } from "react-router-dom";

export default function JamCard(props) {
  return (
    <>
      <div className="jam-card">
        <Link to={`/products/${props._id}`}>
          <img className="jam-card-image" src={props.imgURL} alt={props.name} />
        </Link>
        <h3>{props.name}</h3>
        <p>${props.price}</p>
      </div>

      {/* inactive */}

      {/* <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <img className="jam-card-image" src={props.imgURL} alt={props.name} />
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <p>${props.price}</p>
          <Link>View More</Link>
        </div> */}

      {/* </div> */}
    </>
  );
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
