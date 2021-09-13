import Layout from "../../components/Layout/Layout"

export default function JamForm(props) {
  const ingredients = ["Strawberry", "Raspberry", "Peach"]
  return (
    <Layout user={props.user}>
      <form>
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <input type="text" name="creator" id="creator" placeholder="Creator" />
        <input type="text" name="price" id="price" placeholder="Price" />
        <input
          type="text"
          name="description"
          id="description"
          placeholder="description..."
        />
        <input
          type="text"
          name="imageURL"
          id="imgURL"
          placeholder="Image URL"
        />
        <label htmlFor="spiciness">Spice level</label>
        <select name="spiciness" id="spiciness">
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="sweetness">Sweetness</label>
        <select name="sweetness" id="sweetness">
          <option value="0%">0%</option>
          <option value="25%">25%</option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="ingredients1">Ingredients</label>
        <select name="ingredients1" id="ingredients1">
          <option value="" disabled selected hidden>
            Ingredients
          </option>
          {ingredients.map((ing) => (
            <option value={ing}>{ing}</option>
          ))}
        </select>
        <select name="ingredients2" id="ingredients2">
          {/* <option value="" disabled selected hidden>
            Ingredients
          </option> */}
          {ingredients.map((ing) => (
            <option value={ing}>{ing}</option>
          ))}
        </select>
        <select name="ingredients3" id="ingredients3">
          <option value="" disabled selected hidden>
            Ingredients
          </option>
          {ingredients.map((ing) => (
            <option value={ing}>{ing}</option>
          ))}
        </select>
        <select name="ingredients4" id="ingredients4">
          <option value="" disabled selected hidden>
            Ingredients
          </option>
          {ingredients.map((ing) => (
            <option value={ing}>{ing}</option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
    </Layout>
  )
}
