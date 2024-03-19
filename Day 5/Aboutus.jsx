import '../../assets/css/Home.css'; // Import the CSS file for styling
import homepageImage from '../../assets/images/about.jpg'; // Import the image for the homepage
import React, { useState } from 'react';
import img from '../../assets/images/img4.jpg';
import img1 from '../../assets/images/girls.jpg';
const Aboutus=()=> {
    return (
        <>
        <div className="home">
            <div className="homepage-image">
                <img src={homepageImage} alt="Homepage" />
            </div>
        </div>
        <div style={{background:"#a39f74",padding:"1%",marginTop:"5%",width:"400px",left:"18%",position:"relative"}}>
            <img src={img1} style={{width:"170%"}} alt="" />
        </div>
        <div className='text' >
            <p style={{fontSize:"44px", fontFamily:"Times New Roman",color:'rgb(163, 159, 116)',fontWeight:'300'}}>We're passionate about pushing the envelope,</p>
            <p style={{fontSize:"25px", fontFamily:"Times New Roman",color:'rgb(163, 159, 116)',fontWeight:'300',marginTop:"-30px"}}>and discovering what excites you so we can pour that into every tiny,</p>
            <p style={{fontSize:"25px", fontFamily:"Times New Roman",color:'rgb(163, 159, 116)',fontWeight:'300',marginTop:"-30px"}}> yet impactful detail – making sure your day is yours.</p>
            <hr style={{width:"100px", color:"black",marginTop:"5%",marginBottom:"5%"}}/>
            <p>We are deeply committed to pushing creative boundaries, infusing our designs with bursts of color,</p>
            <p style={{lineHeight:"1.5px"}}>unexpected textures, bold patterns, and innovative lighting solutions. Recognized for our distinctive</p>
            <p >approach in seamlessly blending Southern sophistication with a modern design aesthetic, we consistently</p>
            <p style={{lineHeight:"1.5px"}}>strive to integrate our clients values, brand identity, and mottos into the overarching design concept.</p>
        </div>
       
        <div style={{paddingTop:"80px",height:"600px",paddingBottom:"80px",alignItems:"center",alignContent:"center",width:"100%",backgroundColor:"",display:"flex"}}>
            <div style={{height:"100%",marginLeft:"10%", background:"white",width:"40%"}}>
                <p style={{fontSize:"18px",marginTop:"20%"}}>CONNECT</p>
                <p style={{fontSize:"44px", fontFamily:"Times New Roman",color:'rgb(163, 159, 116)',fontWeight:'300'}}>Let us help you</p>
                <p style={{fontSize:"44px",marginTop:"-10%", fontFamily:"Times New Roman",color:'rgb(163, 159, 116)',fontWeight:'300'}}>plan your perfect event!</p>
                <button style={{backgroundColor:"black",color:"white"}}>GET IN TOUCH</button>
            </div>
            <div style={{height:"100%",width:"40%", background:"black"}}><img src={img} style={{height:"100%",width:"100%"}}alt="" /></div>

        </div>

        </>
    );
}

export default Aboutus