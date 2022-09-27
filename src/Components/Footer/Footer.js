import React from 'react';
import './Footer.scss';
import logo from '../../Resources/images/Navbar/byju_logo_header.svg';
import fb from '../../Resources/images/Footer/fb.svg';
import twt from '../../Resources/images/Footer/twitter.svg';
import yt from '../../Resources/images/Footer/yt.svg';
import lnd from '../../Resources/images/Footer/li.svg';
import inst from '../../Resources/images/Footer/inst.svg';

const Footer = () => {
    return (
        <footer className="footer_container-main">
            <div className="footer_container-main-p1">
                <div className="footer_container-main-p2">
                    <div className="footer_container-main-p3">
                        <div className="footer_container-main-colspan">
                            <div className="footer_container-main-colspanEx">
                                <div className="footer_container-main-colspanEx1">
                                    <span className="footer_container-main-colspanExsp"> <img src={logo} className="img-footer" alt="" /></span>
                                </div>
                            </div> 
                        </div>
                        <div className="footer_container-main-colspan">
                            <h3 className="text-white font-bold">LINKS</h3>
                                <ul className="footer_container-main-colspanEx2" style={{color: 'white'}}>
                                    <li className="footer_container-main-colspan"><a href="https://byjus.com/global/about/" target="_blank" rel="noopener noreferrer">About us</a></li>
                                    <li className="footer_container-main-colspan"><a href="https://byjus.com/global/press/" target="_blank" rel="noopener noreferrer">Press</a></li>
                                    <li className="footer_container-main-colspan"><a href="https://byjus.com/global/careers/" target="_blank" rel="noopener noreferrer">Careers</a></li>
                                    <li className="footer_container-main-colspan"><a href="https://byjus.com/global/term/" target="_blank" rel="noopener noreferrer">Terms of use</a></li>
                                </ul>
                                <a href="mailto:queries@byjus.com" target="_blank" rel="noopener noreferrer"><br/> <span id="contact">Contact Us: queries@byjus.com</span></a>
                        </div>
                       <div className="footer_container-main-colspan">
                        <h2 className="text-white font-bold uppercase">Follow us on</h2>
                        <ul className="flex">
                            <li className="s-width"> <a href="https://www.facebook.com"> <span className="li-span1"> <span className="li-span2"><img src={fb} alt="" /></span></span></a></li>
                            <li className="s-width"> <a href="https://www.twitter.com"> <span className="li-span1"> <span className="li-span2"><img src={twt} alt="" /></span></span></a></li>
                            <li className="s-width"> <a href="https://linkedin.in"> <span className="li-span1"> <span className="li-span2"><img src={lnd} alt="" /></span></span></a></li>
                            <li className="s-width"> <a href="https://www.youtube.com"> <span className="li-span1"> <span className="li-span2"><img src={yt} alt="" /></span></span></a></li>
                            <li className="s-width"> <a href="https://www.instagram.com"> <span className="li-span1"> <span className="li-span2"><img src={inst} alt="" /></span></span></a></li>
                        </ul>
                       </div> 
                    </div>
                    <div className="footer_container-main-bottom flex">
                        <div className="footer_container-main-bottom2 flex">
                        <i className="i-style bg-bottom1"></i> 
                        <i className="i-style bg-bottom2"></i>
                        </div>
                    </div>
                    <div className="flex items-center "><span className="text-w text-sm"> &#169;2022, BYJU'S. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;