import { useState, useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import { useParams, Link } from "react-router-dom"
import { getJam } from "../../services/jams"

export default function JamDetail(props) {
  const [isLoaded, setLoaded] = useState(false)
  const [jam, setJam] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchJam = async () => {
      const jam = await getJam(id)
      setJam(jam)
      setLoaded(true)
    }
    fetchJam()
  }, [id])

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
          <h1>{jam.price}</h1>
          <p>{jam.ingredients}</p>
          <p>{jam.spiciness}</p>
          <p>{jam.sweetness}</p>
          <p>{jam.description}</p>
          <p>{jam.creator}</p>
        </div>
        <Link to={`/jams/${jam._id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </Layout>
  )
}
