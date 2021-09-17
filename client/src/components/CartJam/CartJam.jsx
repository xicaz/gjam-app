import "./CartJam.css"
import JamModal from "../JamModal/JamModal"
import { useEffect, useState } from "react"
import { getJam } from "../../services/jams"

export default function JamCard(props) {
  const [fullJam, setFullJam] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchJam = async () => {
      console.log("props.jam", props.jam)
      //NOTE: props.jam is actually the id of the jam
      const jam = await getJam(props.jam.toString())
      setFullJam(jam)
      setIsLoaded(true)
    }
    fetchJam()
  }, [])

  if(!isLoaded) {
    return null
  }

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
          <h3>{fullJam.name}</h3>
          <p>${fullJam.price}</p>
        </div>
      </div>
    </>
  )
}
