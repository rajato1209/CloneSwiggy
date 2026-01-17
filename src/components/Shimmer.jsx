import React from "react"
import {ShimmerSimpleGallery} from "react-shimmer-effects"
const Shimmer=()=>{
    return(
        <>
        <div className="search" style={{backgroundColor:"#ccc",height:"50px"}}>

        </div>
        <div style={{marginLeft :"10%", marginTop:"2%", marginBottom:"2%" ,padding:"25px",display:"flex",flexWrap:"wrap", gap:"10%"}}>
            <div className="card" style={{width:"300px", height:"500px"}}>
                <img src="" alt="" height={300} width={300} style={{backgroundColor:"#ccc",borderRadius:"8px",}} />
                <p style={{backgroundColor:"#ccc",fontSize:"20px"}}></p>
            </div>
             <div className="card" style={{width:"300px", height:"500px"}}>
                <img src="" alt="" height={300} width={300} style={{backgroundColor:"#ccc",borderRadius:"8px",}} />
                <p style={{backgroundColor:"#ccc",fontSize:"20px"}}></p>
            </div>
             <div className="card" style={{width:"300px", height:"500px"}}>
                <img src="" alt="" height={300} width={300} style={{backgroundColor:"#ccc",borderRadius:"8px",}} />
                <p style={{backgroundColor:"#ccc",fontSize:"20px"}}></p>
            </div>
             <div className="card" style={{width:"300px", height:"500px"}}>
                <img src="" alt="" height={300} width={300} style={{backgroundColor:"#ccc",borderRadius:"8px",}} />
                <p style={{backgroundColor:"#ccc",fontSize:"20px"}}></p>
            </div>
             <div className="card" style={{width:"300px", height:"500px"}}>
                <img src="" alt="" height={300} width={300} style={{backgroundColor:"#ccc",borderRadius:"8px",}} />
                <p style={{backgroundColor:"#ccc",fontSize:"20px"}}></p>
            </div>
        </div>
        <ShimmerSimpleGallery card imageHeight={300}/>
        <ShimmerSimpleGallery card imageHeight={300} caption/>

        </>
    )
}

export default Shimmer


// import React from "react";
// import { ShimmerSimpleGallery } from "react-shimmer-effects";

// class Example extends Component {
//   render() {
//     return (
//       <>
//         <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
//         <ShimmerSimpleGallery card imageHeight={300} />
//         <ShimmerSimpleGallery card imageHeight={300} caption />
//       </>
//     );
//   }
// }