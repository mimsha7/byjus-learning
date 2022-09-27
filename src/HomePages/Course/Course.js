import React, { useContext, useEffect, useState } from 'react';
import { CourseContext } from '../../App';
import { CourseInfoDetails } from '../CourseDetails/CourseDetails';
import banner from '../../Resources/images/Courses/header_image_2x.png';
import './Course.scss';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const [CourseData] = useContext(CourseContext);
    const [course, setCourse] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        setCourse(CourseData);
    }, [CourseData]);

    return (
    <div className="course">
        <div className="course_intro">
            <div className="course_intro_first">
                <h1 className="title">We have everything </h1> 
                <h1 className="title">You need to learn anything!</h1> <br />
                <p className="subTitle">পছন্দের ক্যারিয়ার ট্র্যাক প্রোগ্রাম বাছাই করে অর্ডার প্লেস করুন, এরপর আপনার ড্যাশবোর্ডে অর্ডারকৃত কোর্সগুলো দেখতে পারবেন।</p>
            </div>
            <div className="course_second">
                <img className="banner" src={banner} alt="" />
            </div>
        </div>
        <div className="course_main">
            <h2 className="courseTitle">জনপ্রিয় কোর্সসমূহ</h2>
            <div className="course_details">
                {
                    course.map(courses => <CourseInfoDetails info={courses} key={courses.id} />)
                }
            </div>
            <div className="home-btn">
                <button className="back" onClick={() => navigate(-1)}><i className="fa-solid fa-angles-left"></i> Go back</button>
            </div>
        </div>
    </div>
  );

};

export default Course;