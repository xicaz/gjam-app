import db from "../db/connection.js"
import Jam from "../models/jam.js"
import faker from "faker"

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const jams = [...Array(10)].map((item) => {
    return {
      name: faker.lorem.sentence(),
      creator: faker.name.findName(),
      description: faker.lorem.paragraph(),
      imgURL: faker.internet.url(),
      spiciness: "50%",
      sweetness: "25%",
      ingredients: ["Strawberry", "Blueberry", "Lime", "Mango", "Pear"],
      price: "$15",
    }
  })
  await Jam.insertMany(jams)
  console.log("Created jams!")

  // close database connection. done.
  db.close()
}

insertData()
