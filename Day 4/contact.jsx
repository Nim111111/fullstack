import '../../assets/css/contact.css'; // Import the CSS file for styling
import homepageImage from '../../assets/images/contact.jpg'; // Import the image for the homepage
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/img4.jpg';

function Contact() {
    
    return (
        <>
         <div className="home">
            <div >
                <img className="homepage-image" src={homepageImage} alt="Homepage" />
            </div>
        </div>
       <div  className="outsider"  style={{width:"80%",background:"white",marginLeft:"8%",marginBottom:"10%",marginTop:"10%"}}>
        <div style={{width:"100%",background:"#bead96",height:"40px",marginBottom:"3%"}}><p style={{position:"relative",top:"8px"}}>FOR INQUIRIES</p></div>
       <div className='insider' style={{width:"90%",marginLeft:"4%", display:"flex",position:"relative",alignContent:"space-between"}}>
        <div className='fi'>
           <input  type="text" placeholder='NAME *' />
           <hr />
           <input type="text" placeholder='EVENT TYPE *' />
           <hr />
           <input type="text" placeholder='ESTIMATED HEADCOUNT *' />
           <hr />
        </div>
        <div className='fi'>
        <input type="text" placeholder='EMAIL *' />
           <hr />
           <input type="text" placeholder='EVENT DATE *' />
           <hr />
           <input type="text" placeholder='WHERE DO YOU RESIDE *' />
           <hr />
        </div>
        <div className='fi'>
        <input type="text" placeholder='PHONE *' />
           <hr />
        <input type="text" placeholder='VENUE LOCATION *' />
           <hr />
        <input type="text" placeholder='HAVE A BUDGET IN MIND *' />
           <hr />
        </div>
        
       </div>
       <div className='review'style={{border:"none",outline:"none",margin:"0px"}}>
        <input type="text" placeholder='HOW DID YOU HEAR ABOUT US?'/>
        <hr  style={{marginLeft:"4%",marginRight:"7.5%"}}/>
       </div>
       <p style={{textAlign:"left" ,marginLeft:"4%"}}>PLEASE SHARE ANY INFORMATION OR INSPIRATION YOU HAVE FOR YOUR DREAM EVENT! *</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button style={{background:"black",color:"white",borderRadius:"0px",marginBottom:"2%",marginTop:"2%",width:"15%"}}>SUBMIT</button>
       </div>

        
        
        

        </>
    );
}

export default Contact;