import React, { useEffect, useState } from 'react'
import RestroCards from './RestroCards'

const Body = () => {
  let [resList,setResList]=useState([]);

  useEffect(()=>{
    fetchData();    
  },[])

  const fetchData=async()=>{
    let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460");
    let res=await data.json();
    // console.log("fetch data",res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
   setResList(res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
   if(resList.length===0){
    console.log("Loading...")
  }
  return (
    <>
        <div className="filter">
            <button style={{marginLeft:"16%"}}>Top Rated Restaurants</button>
        </div>
        <div className="ResCard">
         { resList.map((el)=>(
            <RestroCards key={el.info.id} resData={el}/>
          ))}
            {/* <RestroCards/> */}
        
        </div>
    </>
  )
}

export default Body