import React from 'react';
import Footer from '../../Components/Footer/Footer';
import MiddleTab from '../../Components/Haeder/MiddleTab/MiddleTab';
import homeImg from '../../Resources/images/Home/header_image_1.png'
import BookStore from '../BookStore/BookStore';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <div className="home_container-left">
                    <h1>Welcome to the</h1>
                    <h2>future of learning</h2>
                    <p>BYJU'S makes learning engaging & effective by leveraging deep pedagogy & cutting edge technology. With offerings ranging from adaptive self-learning courses on apps & web to personalised 1-on-1 classes with expert teachers for ages 4-18+, we have programs for every learner.</p>
                    <button className="home_container-btn">
                        <a href="/">Explore Learning Programs</a>
                    </button>
                </div>
                <div className="home_container-right">
                    <img className="home_container-img" src={homeImg} alt="header_image_1" />
                </div>
            </div>

                {/* ------------placement------------ */}
                
                        <MiddleTab />

                    <CourseDetails />

                <BookStore />
            
            <Footer />
        </div>
        
    );
};

export default Home;