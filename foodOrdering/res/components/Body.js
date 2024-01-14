import ResList from "../utils/ResList";
import ResCard from "./ResCard";
import {useState} from "react";

const Body = () => {
  return (
    <div className="body">
      <button className="fil-btn">By AvgRating</button>
      <div className="resContainer">
        {ResList.map((resData) => (
          <ResCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
