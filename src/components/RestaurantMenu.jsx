import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu"


const RestaurantMenu=()=>{

    const resId=useParams();
    console.log("restro id as obj: ",resId.id)
    
    const data=useRestrauntMenu(resId.id);
    // console.log("Restraunt menu data",data) 

    

    return(
        <>
        <div className="restroDetails">
            <h1>{"Restro name"}</h1>
            <h2>{"cousine"}</h2>
            <h3>{"Cost for two"}</h3>
        </div>        
        <div className="menulist">

            <ul>
                <li>{"data.map(()=>el.menu)"}</li>
            </ul>
        </div>
        </>
    )

}

export default RestaurantMenu
