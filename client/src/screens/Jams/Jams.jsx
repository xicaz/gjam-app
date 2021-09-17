import Layout from "../../components/Layout/Layout";
import JamCard from "../../components/JamCard/JamCard";
import "./Jams.css";
import { useState, useEffect } from "react";
import { getJams } from "../../services/jams";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";

export default function Jams(props) {
  const [jams, setJams] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    const fetchJams = async () => {
      const allJams = await getJams();
      setJams(allJams);
      setSearchResult(AZ(allJams));
    };
    fetchJams();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (e) => {
    const results = jams.filter((jam) =>
      jam.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
      <div className="jams-container">
        {searchResult.map((jam, index) => {
          return <JamCard jam={jam} key={index} user={props.user}/>;
        })}
      </div>
    </Layout>
  );
}
