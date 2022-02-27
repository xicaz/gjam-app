import db from "../db/connection.js";
import Jam from "../models/jam.js";
// import faker from "faker";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    name: "Garrett",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
    cart: [],
  });
  await user1.save();

  const user2 = new User({
    name: "Jexica",
    email: "b.anca@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
    cart: [],
  });
  await user2.save();

  const user3 = new User({
    name: "Josh",
    email: "n.zo@super.gmail.com",
    password_digest: await bcrypt.hash("!$eller4Lif3", 11),
    cart: [],
  });
  await user3.save();

  const user4 = new User({
    name: "Casey",
    email: "kumi@super.gmail.com",
    password_digest: await bcrypt.hash("L0v32!p4int", 11),
    cart: [],
  });
  await user4.save();

  const jams = [
    {
      name: "Grateful Grape",
      creator: "g'jam",
      description:
        "With a delightful tang mixed with a sweet grape taste, you'll be grateful you went with Grateful Grape. A classic, guaranteed success whether in a restaurant or on the go. Make sure to stock up on this pantry staple!",
      imgURL: "https://i.imgur.com/Gz9bONX.png",
      hoverImage: "https://i.imgur.com/3615AT3.png",
      spiciness: "25%",
      sweetness: "75%",
      ingredients: ["Grape"],
      price: "15",
      restricted: true,
    },
    {
      name: "Peaches 'n Cream",
      creator: "g'jam",
      description:
        "Sit back and relax with Peaches 'n Cream. With this jam, everything is just peachy. Creamier than most jams, Peaches 'n Cream glides right on with a knife and pours beautifully onto anything else. And if you can't wait that long? Go ahead and eat it straight from the jar. We won't judge.",
      imgURL: "https://i.imgur.com/IekQS0C.png",
      hoverImage: "https://i.imgur.com/yKBPND3.png",
      spiciness: "25%",
      sweetness: "100%",
      ingredients: ["Peach"],
      price: "15",
      restricted: true,
    },
    {
      name: "Pear Jam",
      creator: "g'jam",
      description:
        "Looking for something to pair with your cheese or crumb cake? Our Pear Jam goes great with everything! With a distinctive but amicable taste, this jam is sure to complete your meal. We've found that pairing Pear Jam with itself also results in deliciousness, no extra groceries necessary.",
      imgURL: "https://i.imgur.com/T5u5sl1.png",
      hoverImage: "https://i.imgur.com/l3K2m6D.png",
      spiciness: "25%",
      sweetness: "50%",
      ingredients: ["Pear", "Blueberry"],
      price: "15",
      restricted: true,
    },
    {
      name: "Raspberry Beret",
      creator: "g'jam",
      description:
        "Perfect for an overcast day (or any day, really), Raspberry Beret is sure to spice up your afternoon. You'll feel like a movie star with this exciting flavor.",
      imgURL: "https://i.imgur.com/MKapHhh.png",
      hoverImage: "https://i.imgur.com/Rj2jIw3.png",
      spiciness: "75%",
      sweetness: "50%",
      ingredients: ["Raspberry"],
      price: "15",
      restricted: true,
    },
    {
      name: "Sublime Lime",
      creator: "g'jam",
      description:
        "You'll find what you never knew you needed in our Sublime Lime. This jam pushes the boundaries to go where no jam has gone before. Exquisite to the finest degree. Give it a try!",
      imgURL: "https://i.imgur.com/qC5iBf9.png",
      hoverImage: "https://i.imgur.com/16WRFbG.png",
      spiciness: "50%",
      sweetness: "50%",
      ingredients: ["Lime"],
      price: "15",
      restricted: true,
    },
    {
      name: "Tangerine Dream",
      creator: "g'jam",
      description:
        "Everything you dream about and more! A taste most jams only wish they could achieve, Tangerine Dream has it all. So let your worries drift away, because it's all gonna be okay.",
      imgURL: "https://i.imgur.com/A8THArn.png",
      hoverImage: "https://i.imgur.com/KyzUEzA.png",
      spiciness: "50%",
      sweetness: "75%",
      ingredients: ["Tangerine", "Lemon"],
      price: "15",
      restricted: true,
    },
    {
      name: "Pickledpiper  Jam",
      creator: "Peter",
      description:
        "Peter Piper picked a peck of pickled peppers, A peck of pickled peppers Peter Piper picked; If Peter Piper picked a peck of pickled peppers, Where's the peck of pickled peppers Peter Piper picked?",
      imgURL: "https://i.imgur.com/48ffGSy.png",
      hoverImage: "https://i.imgur.com/6wjmM3Y.png",
      spiciness: "0%",
      sweetness: "100%",
      ingredients: ["Pickle", "Nectarine", "Pear", "Cucumber", "Mango"],
      price: "19.95",
      restricted: false,
    },
  ];
  await Jam.insertMany(jams);
  console.log("Created jams!");
  const user3Jams = await Jam.find({ restricted: true });
  user3.cart = user3Jams.map((jam) => {
    return { jamId: jam._id, quantity: 1 };
  });
  await user3.save();

  // close database connection. done.
  db.close();
};

insertData();
