import Jam from "../models/jam.js"

export const getJams = async (req, res) => {
  try {
    const jams = await Jam.find()
    res.json(jams)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
