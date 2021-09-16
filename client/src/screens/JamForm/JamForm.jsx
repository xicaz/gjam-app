import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createJam, getJam, updateJam } from "../../services/jams.js";
import { useHistory } from "react-router";
import { useParams, Link } from "react-router-dom";
import "./JamForm.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function JamForm(props) {
  const [jam, setJam] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
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

  let { id } = useParams();
  let history = useHistory();

  const ingredients = [
    "Banana",
    "Blueberry",
    "Grape",
    "Lemon",
    "Lime",
    "Nectarine",
    "Orange",
    "Peach",
    "Pear",
    "Plum",
    "Pluot",
    "Raspberry",
    "Strawberry",
    "Tangerine",
  ];

  const defaultPicture = "https://i.imgur.com/48ffGSy.png";

  useEffect(() => {
    if (id) {
      const fetchJam = async () => {
        const jam = await getJam(id);
        console.log(jam);
        setJam(jam);
        if (jam) {
          setInputs(jam);
        }
      };
      fetchJam();
    }
  }, [id]);

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
      imgURL: inputs.imgURL || defaultPicture,
    };
    if (jam) {
      const updated = await updateJam(id, newJam);
      if (updated) {
        history.push(`/jams/${id}`);
      }
    } else {
      const created = await createJam(newJam);
      if (created) {
        history.push(`/jams/${created._id}`);
      }
      setIsCompleted({ created });
    }
  };

  return (
    <Layout user={props.user}>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik101"
            className="position-relative"
          >
            <Form.Label>Jam Name</Form.Label>
            <Form.Control
              type="text"
              name="jamName"
              // value={values.firstName}
              onChange={handleChange}
              // isValid={touched.firstName && !errors.firstName}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Creator</Form.Label>
            <Form.Control
              type="text"
              name="creator"
              // value={values.lastName}
              onChange={handleChange}
              // isValid={touched.lastName && !errors.lastName}
            />

            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
            <Form.Label>Price</Form.Label>
            {/* <InputGroup hasValidation> */}
            {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="username"
              // value={values.username}
              onChange={handleChange}
              // isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.username} */}
            </Form.Control.Feedback>
            {/* </InputGroup> */}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="3"
            controlId="validationFormik103"
            className="position-relative"
          >
            <Form.Select aria-label="Default select example">
              <option>Select Fruit</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.city} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationFormik104"
            className="position-relative"
          >
            <Form.Select aria-label="Default select example">
              <option>Select Fruit</option>

              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.state} */}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Select aria-label="Default select example">
              <option>Select Fruit</option>

              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.zip} */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="3"
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Select aria-label="Default select example">
              <option>Select Fruit</option>

              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid" tooltip>
              {/* {errors.zip} */}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="position-relative mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            required
            name="file"
            onChange={handleChange}
            // isInvalid={!!errors.file}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {/* {errors.file} */}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="position-relative mb-3">
          <Form.Check
            required
            name="terms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            // isInvalid={!!errors.terms}
            // feedback={errors.terms}
            id="validationFormik106"
            feedbackTooltip
          />
        </Form.Group>
        <Button type="submit">Create Jam</Button>
      </Form>

      <div>below this is important</div>
      {/* <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          onChange={handleChange}
          value={inputs.name}
        />
        <input
          required
          type="text"
          name="creator"
          id="creator"
          placeholder="Creator"
          onChange={handleChange}
          value={inputs.creator}
        />
        <input
          required
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          onChange={handleChange}
          value={inputs.price}
        />
        <input
          required
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
          required
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
          required
          name="sweetness"
          id="sweetness"
          onChange={handleChange}
          value={inputs.sweetness}
        >
          <option value="" disabled hidden></option>
          <option value="50%">50%</option>
          <option value="75%">75%</option>
          <option value="100%">100%</option>
        </select>
        <label htmlFor="ingredients1">Ingredients</label>
        <select
          required
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
          required
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
        <button type="submit">{jam ? "Update" : "Create"}</button>
      </form>
      <Link to={"/jams"}>
        <button>Continue Shopping</button>
      </Link> */}
    </Layout>
  );
}
