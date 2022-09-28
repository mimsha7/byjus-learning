import React from 'react';
import './About.scss';
import banner from '../../Resources/images/Home/about-baby.png';

const About = () => {
    return (
    <div>
        <div className="about">
            <div className="about_container">
                <div className="about_container-left">
                    <h1>Enhancing human potential</h1>
                    <h2>one learner at a time</h2> <br />
                    <p>Having started from one classroom in the city of Dhaka, today, BYJU'S is present in 100+ countries across the world. The trusted learning partner of 150+ million students, we bring the future of education to the present through technology-enabled, personalised and engaging learning journeys. With the companies under the BYJU'S Group, we cater to a wide range of learners - from children at the start of their education to adults who are looking to upgrade their professional skills.</p>
                </div>

                <div className="about_container-right">
                    <img src={banner} className="banner-img" alt="about-img" />
                </div>
            </div>
        </div>

   <div className="tab">
        <div className="tab_body">
            <div className="tab_content">
                <h2>Our Mission</h2>
                <p className="p1">To create value - each day, evesry day- as we build an equal and accessible learning environment for all.</p> 
                <p className="p2">Through relentless effort and innovation, the BYJU’S mission is to redefine how the world learns, break the barriers to quality education, and help build a learning ecosystem that will create leaders of tomorrow.</p>
            </div>
        </div>
    </div>
</div>
    );
};



export default About;