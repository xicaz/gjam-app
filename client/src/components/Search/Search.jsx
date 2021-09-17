import "./Search.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const Search = (props) => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          className="search-form search-input"
          value={props.name}
          onChange={(e) => props.handleSearch(e)}
          name="Search"
          placeholder="Find your Jam"
          type="text"
          autoFocus
        />
      </InputGroup>
    </>
  );
};

export default Search;

// onSubmit={(e) => props.onSubmit(e)}
