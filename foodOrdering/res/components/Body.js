import ResList from "../utils/ResList";
import ResCard from "../components/ResCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(ResList);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https://www.swiggy.com/mapi/homepage/getCards?lat=17.4671913&lng=78.64186959999999"
    );
    const json = await data.json();
    console.log(json);
    setListOfRes(
      json.data.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="fil-btn"
          onClick={() => {
            const listOfNewRes = ResList.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(listOfNewRes);
          }}
        >
          By AvgRating
        </button>
      </div>
      <div className="resContainer">
        {listOfRes.map((resData) => (
          <ResCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
