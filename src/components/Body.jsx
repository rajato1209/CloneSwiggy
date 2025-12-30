import React, { useEffect, useState } from "react";
import RestroCards from "./RestroCards";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let [search, setSearch] = useState("");

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460"
    );
    let res = await data.json();
    console.log(res);
    setResList(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterData(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (resList.length === 0) {
    return <h1>Loading... </h1>;
  }

  const handleSearch = () => {
    let data = resList.filter((el) => el.info.name.toLowerCase().includes(search.toLowerCase()));
    // console.log("search data:",data)
    setFilterData(data)
  };

  return (
    <>
      <div className="Sfbutton">
        <div>
          <button style={{ marginLeft: "16%" }}>Top Rated Restaurants</button>
        </div>
        <div className="search-box">
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* restro card */}
      <div className="ResCard">
        {filterData.map((el) => (
          <RestroCards key={el.info.id} resData={el} />
        ))}
      </div>
    </>
  );
};

export default Body;
