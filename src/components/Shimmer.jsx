import React from "react"
import {ShimmerSimpleGallery} from "react-shimmer-effects"
const Shimmer=()=>{
    return(
        <>
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