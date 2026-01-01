import { useEffect } from "react"

const RestaurantMenu=()=>{

    useEffect(()=>{
        fetchData();
    })

    const fetchData=async()=>{
        
    }

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