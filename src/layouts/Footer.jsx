import { Link } from "react-router-dom";

import facebook from "../images/social/facebook.png";
import instagram from "../images/social/instagram.png";
import twitter from "../images/social/twitter.png";
import payment from "../images/social/payment.png";

// css link
import "./layout.css"

const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <h4>Our Products</h4>
                    <Link>Domestic Hotels</Link>
                    <Link>International Hotels</Link>
                    <Link>Domestic Flights</Link>
                    <Link>International Flights</Link>
                    <Link>Multi-City Flights</Link>
                    <Link>Couple Friendly Hotels</Link>
                    <Link>Nearby Getaways</Link>
                    <Link>Bus Booking</Link>
                    <Link>Cab Booking</Link>
                    <Link>Airport Cabs Booking</Link>
                    <Link>Outstation Cabs Booking</Link>
                    <Link>Train Booking</Link>
                    <Link>Go Stays</Link>
                    <Link>Trip Money</Link>
                </article>
                <article>
                    <h4>About Us</h4>
                    <Link>About Us</Link>
                    <Link>Investor Relations</Link>
                    <Link>Management</Link>
                    <Link>Terms of Services</Link>
                    <Link>User Agreement</Link>
                    <Link>Privacy</Link>
                    <Link>Careers</Link>
                    <Link>YouTube Channel</Link>
                    <Link>Customer Support</Link>
                    <Link>Facebook Page</Link>
                    <Link>Twitter Handl</Link>
                </article>
                <article>
                    <h4>Travel Essentials</h4>
                    <Link>PNR Status</Link>
                    <Link>Offers</Link>
                    <Link>Airline Routes</Link>
                    <Link>Train Running Status</Link>
                </article>
                <article>
                    <h4>More Links</h4>
                    <Link>Cheap Flights</Link>
                    <Link>Hotels Near Me</Link>
                    <Link>My Bookings</Link>
                    <Link>Cancellation</Link>
                    <Link>My Account</Link>
                    <Link>Wallet</Link>
                    <Link>Advertise With Us</Link>
                </article>
                <article>
                    <h4>Follow Us</h4>
                    <div className="footer_socials">
                        <a href="#" target="_blank" rel="noreferrer noopener"><img src={facebook} alt="Social Media" /></a>
                        <a href="#" target="_blank" rel="noreferrer noopener"><img src={instagram} alt="Social Media" /></a>
                        <a href="#" target="_blank" rel="noreferrer noopener"><img src={twitter} alt="Social Media" /></a>
                    </div>
                    <Link className="payment">
                        <img src={payment} alt="Footer Payment" />
                    </Link>
                </article>
            </div>
            <article>
                <h4>The SkyTrails</h4>
            </article>
            <div className="footer_copyright">
                <small>2023 The SkyTrails &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer;