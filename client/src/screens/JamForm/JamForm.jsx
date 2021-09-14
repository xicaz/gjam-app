import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createJam, getJam, updateJam } from "../../services/jams.js";
import { Redirect } from "react-router";
import { useParams } from "react-router-dom";

export default function JamForm(props) {
  const [jam, setJam] = useState(null);
  const [isCreated, setIsCreated] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    creator: "",
    price: "",
    description: "",
    imgURL: "",
    spiciness: "",
    sweetness: "",
    ingredients: ["", "", "", ""],
  });


  const params = useParams();

  const ingredients = ["Strawberry", "Raspberry", "Peach", "Blueberry"];

  useEffect(() => {
    if (params.id) {
      const fetchJam = async () => {
        const jam = await getJam(params.id)
        setJam(jam)
        const { name, creator, price, description, imgURL, spiciness, sweetness, ingredients } = jam
        setInputs({ 
          name, 
          creator, 
          price, 
          description, 
          imgURL, 
          spiciness, 
          sweetness, 
          ingredients
        })
      }
      fetchJam()
    }
  }, [jam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("ingredients")) {
      const newIngredients = inputs.ingredients;
      const ind = name.slice(-1) - 1;
      newIngredients[ind] = value;
      setInputs({
        ...inputs,
        ingredients: newIngredients,
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJam = {
      ...inputs,
      restricted: false,
    };
    if (jam) {
      const updated = await updateJam(newJam);
    } else {
      const created = await createJam(newJam);
      setIsCreated({ created });
    }
  };

  if (isCreated) {
    return <Redirect to={`/jams/${jam._id}`} />;
  }

  return (
    <Layout user={props.user}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          onChange={handleChange}
          value={inputs.name}
        />
        <input
          type="text"
          name="creator"
          id="creator"
          placeholder="Creator"
          onChange={handleChange}
          value={inputs.creator}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price"
          onChange={handleChange}
          value={inputs.price}
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description..."
          onChange={handleChange}
          value={inputs.description}
        />
        <input
          type="text"
          name="imgURL"
          id="imgURL"
          placeholder="Image URL"
          onChange={handleChange}
          value={inputs.imgURL}
        />
        <label htmlFor="spiciness">Spice level</label>
        <select
          name="spiciness"
          id="spiciness"
          onChange={handleChange}
          value={inputs.spiciness}
        >
          <option value="" disabled hidden></option>
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="sweetness">Sweetness</label>
        <select
          name="sweetness"
          id="sweetness"
          onChange={handleChange}
          value={inputs.sweetness}
        >
          <option value="" disabled hidden></option>
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="ingredients1">Ingredients</label>
        <select
          name="ingredients1"
          id="ingredients1"
          onChange={handleChange}
          value={inputs.ingredients[0]}
        >
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>
              {ing}
            </option>
          ))}
        </select>
        <select
          name="ingredients2"
          id="ingredients2"
          onChange={handleChange}
          value={inputs.ingredients[1]}
        >
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>
              {ing}
            </option>
          ))}
        </select>
        <select
          name="ingredients3"
          id="ingredients3"
          onChange={handleChange}
          value={inputs.ingredients[2]}
        >
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>
              {ing}
            </option>
          ))}
        </select>
        <select
          name="ingredients4"
          id="ingredients4"
          onChange={handleChange}
          value={inputs.ingredients[3]}
        >
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>
              {ing}
            </option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </Layout>
  );
}
