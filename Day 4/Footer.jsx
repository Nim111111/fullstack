
import '../../assets/css/Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section v3event">
                <h3>Upper East Side </h3>
                <p className='para'> As the preeminent purveyors of nuptial artistry and orchestrators of exquisite gatherings in the illustrious realm of New York City, our esteemed reputation is founded upon our unparalleled ability to craft indelible moments steeped in authenticity, destined to be treasured for an eternity.</p>
            </div>
            <div className="footer-section link-contactus">
                <h3>Link</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-section location">
                <h3>Location</h3>
                <p>3,Upper East Side,</p>
                <p>Manhattan, </p>
                <p>New York.</p>
            </div>
            <div className="footer-section contactus">
                <h3>Contact Us</h3>
                <p>Email: example@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
        </footer>
    );
}

export default Footer;
