import React from "react";

const RestroCards = (el) => {
  // console.log("element inside restro card", el);
  return (
    <>
      <div className="">
        <div className="w-60 h-[340px] rounded-2xl overflow-hidden border-1 object-cover">
          <div className="">
            <img className="h-50 w-100"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                el.resData.info.cloudinaryImageId
              }
              alt=""
            />
          </div>
          <div className="p-2">
            <h3>{el.resData.info.name}</h3>
            <p>{el.resData.info.cuisines.join(" , ")}</p>

            <h4>{el.resData.info.avgRating}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroCards;
