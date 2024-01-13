import ResList from "../utils/ResList";
import ResCard from "./ResCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        {ResList.map((resData) => (
          <ResCard key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
