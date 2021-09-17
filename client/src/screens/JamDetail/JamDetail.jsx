import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getJam, deleteJam } from "../../services/jams";
import { useHistory } from "react-router";
import "./JamDetail.css";
import Button from "react-bootstrap/Button";

export default function JamDetail(props) {
  const [isLoaded, setLoaded] = useState(false);
  const [jam, setJam] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchJam = async () => {
      const jam = await getJam(id);
      setJam(jam);
      setLoaded(true);
    };
    fetchJam();
  }, [id]);

  const deleteAndPush = () => {
    deleteJam(jam._id);
    setTimeout(() => {
      history.push("/jams");
    }, 500);
  };

  if (!isLoaded) {
    return <h1>Loading Jam...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="jam-detail-pg">
        <div className="detail-image">
          <img src={jam.imgURL} alt={jam.name} />
        </div>
        <div className="jam-detail-info">
          <h1>{jam.name}</h1>
          <h1>${jam.price}</h1>
          <p>Ingredients: {jam.ingredients.join(", ")}</p>
          <p>Spiciness: {jam.spiciness}</p>
          <p>Sweetness: {jam.sweetness}</p>
          <p>{jam.description}</p>
          <p className="creator-tag">Creator: {jam.creator}</p>
          <div className="buttons">
            {props.user && !jam.restricted ? (
              <>
                <Button
                  variant="outline-dark"
                  id="anchor-btn"
                  className="detail-button"
                >
                  <a href={`/jams/${jam._id}/edit`}>Edit</a>
                </Button>
                <Button
                  variant="outline-dark"
                  className="detail-button"
                  onClick={deleteAndPush}
                >
                  Delete
                </Button>
              </>
            ) : null}
            <Button variant="outline-dark" type="submit">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
