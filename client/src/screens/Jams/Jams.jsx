import Layout from "../../components/Layout/Layout"
import JamCard from "../../components/JamCard/JamCard"
import "./Jams.css"
// import JamModal from "../../components/JamModal/JamModal"
import { useState, useEffect } from "react"
import { getJams } from "../../services/jams"

export default function Jams(props) {
  const [jams, setJams] = useState([])

  useEffect(() => {
    const fetchJams = async () => {
      const allJams = await getJams()
      setJams(allJams)
    }
    fetchJams()
  }, [])
  return (
    <Layout user={props.user}>
      <div className="jams-container">
        {jams.map((jam, index) => {
          return (
            <JamCard
              //imgURL={jam.imgURL}
              imgURL={"https://i.imgur.com/m2o9NB9.png"}
              jam={jam}
              key={index}
            />
          )
        })}
      </div>
    </Layout>
  )
}
