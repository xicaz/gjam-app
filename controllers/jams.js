import Jam from "../models/jam.js"

export const getJams = async (req, res) => {
  try {
    const jams = await Jam.find()
    res.json(jams)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getJam = async (req, res) => {
  try {
    const jam = await Jam.findById(req.params.id)
    res.json(jam)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const createJam = async (req, res) => {
  try {
    const jam = new Jam(req.body)
    await jam.save()
    res.status(201).json(jam)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
