import { useEffect } from "react";

const useRestrauntMenu = (resId) => {
  const [resData, setResData] = useState(null);
  // fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("url" + resId);
    let json = await data.json();

    setResData(json);
  };

  return resData;
};

export default useRestrauntMenu;
