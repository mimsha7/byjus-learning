import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseContext } from '../../App';
import './DetailsCourse.scss';

const DetailsCourse = () => {
    const [detailsCourse, setDetailsCourse] = useState([]);
    const [CourseData] = useContext(CourseContext);
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        setDetailsCourse(CourseData.find(crs => Number(crs.id) === Number(id)));
    },[CourseData, id])
    return (
        <div>
            <div className="course_details">
                <div className="course_details-main">
                    <div className="course_details-first">
                        <h2 className="course_details-title">{detailsCourse.title}</h2>
                        <p className="course_details-subDetails">{detailsCourse.subDetails}</p>
                        <ul className="course_details-bullet">
                            <li><i className="fa-solid fa-angles-right"></i> {detailsCourse.point1}</li>
                            <li><i className="fa-solid fa-angles-right"></i> {detailsCourse.point2}</li>
                            <li><i className="fa-solid fa-angles-right"></i> {detailsCourse.point3}</li>
                        </ul>
                        <h3 className="course_details-subTitle">About this course</h3>
                        <p className="course_details-about">{detailsCourse.about}</p>
                    </div>
                    <div className="course_details-last">
                        <img className="course_details-img" src={detailsCourse.img} alt="" />
                        <div className="course_details-price">
                             <button className="btn-1">Buy  ৳{detailsCourse.price}</button>
                             <button className="btn-2">Get this course <i className="fa-solid fa-angles-right"></i></button> 
                        </div>
                    </div>
                </div>
                <div className="home-btn">
                    <button className="back" onClick={() => navigate(-1)}><i className="fa-solid fa-angles-left"></i> Go back</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCourse;