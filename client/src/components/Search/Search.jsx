import "./Search.css"

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        value={props.name}
        onChange={(e) => props.handleSearch(e)}
        name="Search"
        placeholder="Find your Jam"
        type="text"
        autoFocus
      />
    </form>
  )
}

export default Search
