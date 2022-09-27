import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseContext } from '../../App';
import { MediaCard } from '../BookStore/Cards';

const BookTab = () => {
    const [, Books] = useContext(CourseContext);
    const [book, setBookList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
      setBookList(Books);
    }, [Books]);

    return (
        <div style={{ width: '1285px', margin: '0 auto', padding: '45px 0', background: 'transparent'}}>
            <h1 style={{justifyContent: 'center', display: 'flex', marginBottom: '28px', color: '#EF5B81', fontWeight:'700'}}>Book Store</h1>
            <div style={{display: 'flex', flexWrap:'wrap', gap: '24px', justifyContent: 'center'}}>
                
                {
                // eslint-disable-next-line array-callback-return
                book.map( books =>  
                    <MediaCard data={books} key={books.id} />)
            }
            </div>
        <div style={{display:'flex', justifyContent: 'center', marginTop:'20px'}}>
          <Button style={{ color:'#3EC46D', border: '1px solid', background:'transparent', fontWeight: '600'}} onClick={() => navigate(-1)}><i className="fa-solid fa-angles-left"></i> Go Back</Button>
        </div>
  </div>
    );
};

export default BookTab;