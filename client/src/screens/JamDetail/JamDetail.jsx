import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import { useParams, Link } from "react-router-dom"
import { getJam, deleteJam } from "../../services/jams"
import { useHistory } from "react-router"
import "./JamDetail.css"

export default function JamDetail(props) {
  const [isLoaded, setLoaded] = useState(false)
  const [jam, setJam] = useState(null)
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchJam = async () => {
      const jam = await getJam(id)
      setJam(jam)
      setLoaded(true)
    }
    fetchJam()
  }, [id])

  const deleteAndPush = () => {
    deleteJam(jam._id)
    history.push("/jams")
  }

  if (!isLoaded) {
    return <h1>Loading Jam...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className="jam-detail">
        <div className="detail-image">
          <img src={jam.imgURL} alt={jam.name} />
        </div>
        <div className="jam-info">
          <h1>{jam.name}</h1>
          <h1>${jam.price}</h1>
          <p>Ingredients: {jam.ingredients.join(" ")}</p>
          <p>Spiciness: {jam.spiciness}</p>
          <p>Sweetness: {jam.sweetness}</p>
          <p>{jam.description}</p>
          <p className="creator-tag">Creator: {jam.creator}</p>
          <div className="buttons">
            {props.user && !jam.restricted ? (
              <>
                <Link to={`/jams/${jam._id}/edit`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button onClick={deleteAndPush}>Delete</button>
              </>
            ) : null}
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
