import { useEffect } from "react"

const Restaurant=()=>{


    const  resData=async()=>{
        let data= await fetch("url");
        console.log(data)
    }
    useEffect(()=>{
        resData();
    },[])

    
    return(
        <>
        <h1>Welcome to our Restaurant</h1>
        </>
    )
}

export default Restaurant