import React from "react";

const RestroCards = (el) => {
  console.log("element inside restro card",el)
  return (
    <>
      <div className="card_Container">
        <div id="card">
          <div className="image">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + el.resData.info.cloudinaryImageId} alt="" /> 
          </div>
          <div className="resDetails">
            <h3>{el.resData.info.name}</h3>
            <h4>{el.resData.info.avgRating}</h4>
            {/* <p>{el.resData.info.  }</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroCards;
