import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../App';
import './CourseDetails.scss';

const CourseDetails = () => {
    const [CourseData] = useContext(CourseContext);
    const [course, setCourse] = useState([]);

    useEffect(() => {
        setCourse(CourseData);
    }, [CourseData]);

    return (
        <div className="course_info">
            <div className="course_info-body">
                <h1 className="course_title">জনপ্রিয় কোর্সসমূহ</h1>

                <div className="info_body-main">
                    {
                        // eslint-disable-next-line array-callback-return
                        course.map(courses => {
                        if (courses.ctgry === 'alike') {
                            return <CourseInfoDetails info={courses} key={courses.id} />
                        }
                     })
                    }
                </div>
                <Link to={`/courses`}><button className='course_btn'>Explore Courses</button></Link>
            </div>
        </div>
    );
};

export const CourseInfoDetails = ({info}) => {
    
    const { id, img, title, subDetails} = info;
    return (
        <div className="course_card">
            <img className="card_img" src={img} alt="" />

            <div className="card_firstPart">
                <h2 className="title">{title}</h2>
                <p className="about">{subDetails}</p>
            </div>

            <div className="card_secondPart">
                <Link className="price" to={`/courses/${id}`}><button className="btn" target="_blank">See Details</button> </Link>
            </div>
        </div>
    )
}

export default CourseDetails;