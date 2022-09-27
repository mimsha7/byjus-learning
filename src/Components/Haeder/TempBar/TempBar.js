import React from 'react';
import './Tempbar.scss';
import temp1 from '../../../Resources/images/Navbar/fifa_logo_mob.png';
import temp2 from '../../../Resources/images/Navbar/elements.png';
import temp3 from '../../../Resources/images/Navbar/text_web.png';
import close from '../../../Resources/images/Navbar/close.png';

const TempBar = () => {
    return (
        <div className="topbar mx-auto">
            <div className="max-w items-alignment p-1">
                <div className="bar-alignment">
                    <div>
                        <img className="topbar-img1" src={temp1} alt="" />
                    </div>
                    <div>
                        <img className='topbar-img2' src={temp2} alt="" />
                    </div>
                    <div>
                        <img className='topbar-img3' src={temp3} alt="" />
                    </div>
                </div>
                <div className="cursor">
                    <span className="close-btn"><img className='close' src={close} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default TempBar;