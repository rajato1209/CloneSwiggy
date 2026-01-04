import { useEffect, useState } from "react";

const useRestrauntMenu = (resId) => {
  const [resData, setResData] = useState(null);
  
  // fetch data
  useEffect(() => {
    if(resId) fetchData();
  }, [resId]);

  const fetchData = async () => {
    
          let data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + resId);
          console.log(data)
    
    // let ndata = await data.json();
     console.log("data with json: ",ndata)

    setResData(ndata);
  };
  // console.log(resData)
  return resData;
};

export default useRestrauntMenu;
