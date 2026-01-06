import { useEffect, useState } from "react";

const useRestrauntMenu = (resId) => {
  const [resData, setResData] = useState(null);
  
  // fetch data
  useEffect(() => {
     fetchData();
  }, [resId]);

  const fetchData = async () => {
          console.log(resId)
          let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId);
          // console.log("response data",data)

          let res=await data.text();
          // console.log("text data of response: ",res);
    
    let ndata = await data.json();
    //  console.log("data with json: ",ndata)

    setResData(ndata);
  };
  // console.log(resData)
  return resData;
};

export default useRestrauntMenu;
