import React from 'react';
import './Footer.css';
import facebook from '../../../images/facebook.png';
import youtube from '../../../images/youtube.png';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div class="footer-clean">
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li>Crossfit Training</li>
                                <li>Cardio Training</li>
                                <li>Endurance Training</li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li> Company </li>
                                <li> Team </li>
                                <li> exercise advice </li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Careers</h3>
                            <ul>
                                <li> Bodybuilding coach </li>
                                <li> Fitness apparel designer </li>
                                <li> Exercise physiologist. </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 social-item">
                            <img src={facebook} alt="" />
                            <img src={youtube} alt="" />
                            <p class="copyright">Big Gym Copyright © {year}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;