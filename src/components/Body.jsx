import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import RestroCards from "./RestroCards";
import RestroPromoted from "./RestroPromoted";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let [search, setSearch] = useState("");

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460"
    );
    let res = await data.json();
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
   
      <div className="flex bg-gray-100 py-2 px-1 m-1 gap-3">
        {/* top rated restro */}
        <div >
          <button className="align-middle border-2 rounded leading-none" style={{ marginLeft: "16%" }} onClick={()=>setFilterData(resList.filter((el)=>Number(el?.info?.avgRating)> 4.2))}>Top Rated Restaurants</button>
        </div>
        {/* search box */}
        <div className="flex gap-2 ">
          <input className="border-2 rounded p-1 " type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
          <button className="border-2 rounded-sm px-2" onClick={handleSearch}>Search</button>
        </div>
      </div>

       <div className="opacity-90 bg-[url(.\assets\texturedbg.jpg)] ">

      {/* restro card */}
      <h1 className="mx-20 my-4 text-4xl">Recomonded Resturants</h1>
      <div className="grid grid-cols-4 gap-6 p-4 mx-20 my-10 ">
         {/* {console.log("promoted data:", filterData)} */}
        {filterData.map((el) => (
          <Link to={"/restaurant/"+ el?.info.id} key={""}>
            {el.info.promoted?<RestroPromoted key={el.info.id} resData={el} />:<RestroCards key={el.info.id} resData={el} />}
          
          </Link>
        ))}
      </div>
      </div>
    </>
  );
};

export default Body;
