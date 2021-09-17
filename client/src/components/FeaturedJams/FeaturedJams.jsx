import { useState, useEffect } from "react";
import { getFeaturedJams } from "../../services/jams";
import JamCard from "../JamCard/JamCard";
import "./FeaturedJams.css";

export default function FeaturedJams(props) {
  const [featuredJams, setFeaturedJams] = useState([]);

  useEffect(() => {
    const fetchFeaturedJams = async () => {
      const featuredJams = await getFeaturedJams();
      setFeaturedJams(featuredJams);
    };
    fetchFeaturedJams();
  }, []);

  return (
    <div className="featured-jams-container">
      {featuredJams.map((jam, index) => {
        return (
          <JamCard
            imgURL={"https://i.imgur.com/m2o9NB9.png"}
            jam={jam}
            key={index}
            user={props.user}
          />
        );
      })}
    </div>
  );
}
