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

export const updateJam = async (req, res) => {
  try {
    const { id } = req.params
    const jam = await Jam.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(jam)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteJam = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Jam.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Jam deleted")
    }
    throw new Error("Jam not found")
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getFeaturedJams = async (req, res) => {
  try {
    const featuredJams = await Jam.find({ restricted: true})
    res.json(featuredJams)
  } catch (error) {
    res.status(500).send(error.message)
  }
}