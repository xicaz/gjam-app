import { useState } from "react";
import Layout from "../../components/Layout/Layout"
import { createJam } from "../../services/jams.js"
import { Redirect } from "react-router";

export default function JamForm(props) {
  const [isCreated, setIsCreated] = useState(false)
  const [inputs, setInputs] = useState({
    name: "",
    creator: "",
    price: "",
    description: "",
    imgURL: "",
    spiciness: "",
    sweetness: "",
    ingredients: ["", "", "", ""]
  })

  const ingredients = ["Strawberry", "Raspberry", "Peach"]

  const handleChange = e => {
    const { name, value } = e.target
    if (name.includes("ingredients")) {
      const newIngredients = inputs.ingredients;
      const ind = name.slice(-1) - 1
      newIngredients[ind] = value
      setInputs({
        ...inputs,
        ingredients: newIngredients
      })
    } else {
      setInputs({
        ...inputs,
        [name]: value
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const jam = {
      ...inputs,
      restricted: false
    }
    const created = await createJam(jam)
    setIsCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/jams`} />
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
        />
        <input 
          type="text" 
          name="creator" 
          id="creator" 
          placeholder="Creator"
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="price" 
          id="price" 
          placeholder="Price"
          onChange={handleChange} 
        />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="imgURL"
          id="imgURL"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <label htmlFor="spiciness">Spice level</label>
        <select name="spiciness" id="spiciness" onChange={handleChange}>
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="sweetness">Sweetness</label>
        <select name="sweetness" id="sweetness" onChange={handleChange}>
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="ingredients1">Ingredients</label>
        <select name="ingredients1" id="ingredients1" onChange={handleChange} defaultValue="">
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>{ing}</option>
          ))}
        </select>
        <select name="ingredients2" id="ingredients2" onChange={handleChange} defaultValue="">
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>{ing}</option>
          ))}
        </select>
        <select name="ingredients3" id="ingredients3" onChange={handleChange} defaultValue="">
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>{ing}</option>
          ))}
        </select>
        <select name="ingredients4" id="ingredients4" onChange={handleChange} defaultValue="">
          <option value="" disabled hidden>
            Ingredients
          </option>
          {ingredients.map((ing, index) => (
            <option value={ing} key={index}>{ing}</option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </Layout>
  )
}
