import ResList from "../utils/ResList";
import ResCard from "./ResCard";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(ResList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="fil-btn"
          onClick={() => {
            const listOfNewRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(listOfNewRes);
          }}
        >
          By AvgRating
        </button>
      </div>
      <div className="resContainer">
        {ResList.map((resData) => (
          <ResCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
