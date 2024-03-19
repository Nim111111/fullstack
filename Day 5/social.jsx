import '../../assets/css/weddings.css'; // Import the CSS file for styling
import weddingpageImage from '../../assets/images/wedding.jpg'; // Import the image for the homepage
import React, { useState } from 'react';
import img from '../../assets/images/img4.jpg';
import img1 from '../../assets/images/girls.jpg';
import wed1 from '../../assets/images/wed1.jpg';
import wed2 from '../../assets/images/wed2.jpg';
const Social=()=> {
    return (
        <>
        <p style={{marginTop:"10%",height:"5px"}}>SERVICES</p>
        <h1 style={{fontFamily:"Times New Roman",fontWeight:"100"}}>Weddings</h1>
        <div className="home">
            <div className="weddingpage-image">
                <img src={weddingpageImage} alt="Homepage" />
            </div>
        </div>
        <div className='wed-text' style={{width:"60%",marginLeft:"20%",textAlign:"left"}}>
            <h2 style={{fontSize:"30px",marginBottom:"10%",color:"rgb(70, 72, 78)"}}>IT’S NOT A RAFANELLI WEDDING. IT’S YOUR WEDDING. YOUR STORY.</h2>
            <p style={{fontSize:"20.5px",color:"rgb(70, 72, 78)"}}>Our passion lies in crafting an experience that becomes uniquely yours, etched into your memory, and shared with your loved ones forever. We have been building our reputation for years, perfecting the art of incomparable weddings. Working with only the best partners, we are collaborative, creative, and cool in those moments that require experience. We know the months and weeks before the wedding – for you – should be as special as the day itself.</p>
            <p style={{fontSize:"20.5px",color:"rgb(70, 72, 78)"}}>And that day? Well, at some time during the wedding, time will stop. Wonder will light up the faces of everyone. All at once, there’s no line between dreaming and a dream. Between storybook and story. Between magic and magical. The day is everything you ever dreamed of. And more.</p>

        </div>

        <div className='wed-img' style={{width:"100%" ,display:"flex",flexDirection:"row",marginTop:"10%"}} >
            <div style={{width:"45%",marginLeft:"3%"}}><img style={{width:"100%",height:"48%"}} src={wed1} alt="" /></div>
            <div style={{width:"45%",marginLeft:"3%"}}><img style={{width:"100%",height:"48%"}} src={wed2} alt="" /></div>
        </div>
        <div className='list-outbox1'>
            <p style={{fontFamily:"Times New Roman",fontSize:"40px",fontWeight:"100",textAlign:"left",marginBottom:"-1%"}}>Our Services</p>
            <div className='inlist'>
                <div style={{marginRight:"20%"}}>
                <ul>
                    <li>Arrival Gifts</li>
                    <li>Bridal Salon Selection</li>
                    <li>Budget Planning</li>
                    <li>Catering Consultation</li>
                    <li>Engagement Parties</li>
                    <li>Entertainment</li>
                    <li>Etiquetter Advice</li>
                    <li>Favors</li>
                    <li>Floral</li>
                    <li>Hair and Makeup</li>
                    <li>Hotel Room Blocks</li>
                    <li>Invitations</li>
                </ul>
                </div>
                <div>
                <ul>
                    <li>Arrival Gifts</li>
                    <li>Bridal Salon Selection</li>
                    <li>Budget Planning</li>
                    <li>Catering Consultation</li>
                    <li>Engagement Parties</li>
                    <li>Entertainment</li>
                    <li>Etiquetter Advice</li>
                    <li>Favors</li>
                    <li>Floral</li>
                    <li>Hair and Makeup</li>
                    <li>Hotel Room Blocks</li>
                    <li>Invitations</li>
                </ul>
                </div>
            </div>
            <div></div>
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

export default Social