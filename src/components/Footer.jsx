import React from "react";

const Footer = ()=>{
    return(
        <>
        <div className="fContainer" style={{display:"flex",justifyContent:'space-between',padding:'0px 20px'}}>
            <div className="socialMedia" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h2> <b>Contect with us on Social Media</b></h2>
                <icon>facebook</icon>
                <icon>Instagram</icon>
                <icon>Twitter</icon>
            </div>
            <div className="hearingPartner" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h2><b>We are Requre Full Stack Developer Check on below platforms </b></h2>
                <a href="" style={{ textDecoration:'none'}}>LinkedIn</a>
                <a href="" style={{ textDecoration:'none'}}>Nokari.com</a>
                <a href="" style={{ textDecoration:'none'}}>Jobs</a>
            </div>
            <div className="Our_Partner" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h2><b>Our Partners </b></h2>
                <a href="" style={{ textDecoration:'none'}}>Apple.inc</a>
                <a href="" style={{ textDecoration:'none'}}>Micro-Soft</a>
                <a href="" style={{ textDecoration:'none'}}>Google</a>
                <a href="" style={{ textDecoration:'none'}}>Paypal</a>
            </div>

        </div>
        </>
    )
}

export default Footer