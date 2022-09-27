import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CourseContext } from '../../App';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cards.scss'



const Cards = () => {
    const [, Books] = useContext(CourseContext);
    const [books, setBooks] = useState([]);

    useEffect(() => {
      setBooks(Books)
    }, [Books])

    return (
        <div style={{backgroundColor:'#e5e5e5f8',height:'775px', width:'1519px'}}>
          <div style={{ width: '1300px', margin:'0 auto', padding:'45px 0px'}}>
              <h1 style={{justifyContent: 'center', display: 'flex', marginBottom: '28px', color: '#EF5B81', fontWeight:'700'}}>একাডেমিক বইসমূহ</h1>
            <div style={{display: 'flex', flexWrap:'wrap', gap: '24px', justifyContent: 'center'}}>
              
              {
                  // eslint-disable-next-line array-callback-return
                  books.map( book => { 
                  if (book.ctgry === 'alike') {
                  return <MediaCard data={book} key={book.id} />
                  }
                
                })
              }
            </div>
              <div style={{display:'flex', justifyContent: 'center', marginTop:'20px'}}>
                <Link to={`/books`}><Button style={{ color:'#5E76D2', border: '1px solid #5E76D2', background:'transparent', fontWeight: '600'}}>Take a tour</Button></Link>
              </div>
          </div>
        </div>
    );
};



export function MediaCard({data}) {
  const {img, title, price} = data;
  return (
    
    <Card sx={{ maxWidth: 345,  borderRadius: 3}}>
      <CardMedia
        component="img"
        height="455"
        image={img}
        alt="books"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-evenly', background: 'rgb(238, 236, 236)'}}>
        <Button size="medium">Tk. {price}</Button>
        <Button size="medium">Buy Now</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;