import '../../assets/css/Home.css'; // Import the CSS file for styling
import homepageImage from '../../assets/images/front.jpg'; // Import the image for the homepage
import React, { useState } from 'react';
import img from '../../assets/images/img4.jpg';

function Home() {
    
    return (
        <>
        <div className="home">
            <div className="homepage-image">
                <img src={homepageImage} alt="Homepage" />
            </div>
            <p className='ex'>"Bringing Your Vision to Life, 

</p>
            <p className='ex1'>Beyond Expectations"</p>
        </div>
        <div className='text' >
            <p style={{fontSize:"44px", fontFamily:"Times New Roman",color:'rgb(163, 159, 116)',fontWeight:'300'}}>Wedding & Event Planning</p>
            <hr style={{width:"100px", color:"black"}}/>
            <p>From made-to-measure weddings to elaborate corporate events that nurture </p>
            <p> company connections, Upper east side has a flair for transforming bespoke spaces </p>
            <p>into unforgettable experiences.</p>
        </div>
        <div style={{backgroundColor :"#a39f74",marginBottom:"-16px",paddingTop:"20px"}}>
            <h1 style={{textAlign:"center" , fontFamily:"Time New Roman",color:"white"}}>Our Services</h1>
            <h3 style={{color:"white"}}>Planning an event but no idea where to start? Take Heart!</h3>
            <p style={{color:"white"}}>We have you covered. Take Heart Events partners with local vendors to create fun, unique</p>
            <p style={{marginTop:"-15px",color:"white"}}>and innovative events tailored just for you or your organization. We have a variety of event</p>
            <p style={{marginTop:"-15px",color:"white"}}>planning experience; including weddings, social, corporate and non-profit events.</p>
        </div>
        <div className='list-outbox'>
            
            <div className='inside-box'>
                <h2>Corporate Events</h2>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>vProduct Launches</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Conferences</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Sales Events</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Trade Shows</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Customer Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Team Workshops</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>More!</p>
                </div>
            </div>
            <div className='inside-box'>
            <h2>Non-Profit Events</h2>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Galas</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Luncheons</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Award Dinners</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Walks & Runs</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Unique Fundaraisers</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Festivals & Expos</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>More!</p>
                </div>
            </div>
            <div className='inside-box'>
            <h2>Social Events</h2>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Birthday Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Seasonal Celebrations</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Anniversary Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Going Away Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Girls/Guys Night Out</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Retirement Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>More!</p>
                </div>
            </div>
            <div className='inside-box'>
            <h2 style={{color:"white"}}>Weddings</h2>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Ceremonies</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Receptions</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Engagement Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Bridal Showers</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Rehersal Dinners</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>Bachelor Parties</p>
                </div>
                <div style={{display:"flex"}}>
                <p><hr style={{width:'10px',height:'0px',marginLeft:"40px",marginRight:"20px",marginTop:"12px"}}/></p>
                <p style={{display:"flex"}}>More!</p>
                </div>
            </div>
            
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

export default Home;
