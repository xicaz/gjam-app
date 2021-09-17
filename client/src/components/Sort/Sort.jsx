import "./Sort.css";

const Sort = (props) => {
  const handleSort = (e) => {
    props.handleSort(e.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">Sort by:</label>
      <select className="sort" onChange={handleSort}>
        <option className="option" value="name-ascending">
          &nbsp; A-Z &nbsp;
        </option>
        <option value="name-descending">&nbsp; Z-A &nbsp;</option>
        <option value="price-ascending">&nbsp; low-high &nbsp;</option>
        <option value="price-descending">&nbsp; high-low &nbsp;</option>
      </select>
    </form>
  );
};

export default Sort;
