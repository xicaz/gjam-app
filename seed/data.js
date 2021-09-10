import db from "../db/connection.js"
import Jam from "../models/jam.js"
import faker from "faker"
import User from "../models/user.js"
import bcrypt from "bcrypt"

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    name: "Garrett",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
  })
  await user1.save()

  const user2 = new User({
    name: "Jexica",
    email: "b.anca@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
  })
  await user2.save()

  const user3 = new User({
    name: "Josh",
    email: "n.zo@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
  })
  await user3.save()

  const user4 = new User({
    name: "Casey",
    email: "kumi@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 11),
  })
  await user4.save()

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
      restricted: true,
    }
  })
  await Jam.insertMany(jams)
  console.log("Created jams!")

  // close database connection. done.
  db.close()
}

insertData()
