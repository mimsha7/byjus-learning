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
        <div className="book_info">
          <div className="book_info-body">
              <h1 className="book_title">একাডেমিক বইসমূহ</h1>
            <div className="book_info-body-main">
              
              {
                  // eslint-disable-next-line array-callback-return
                  books.map( book => { 
                  if (book.ctgry === 'alike') {
                  return <MediaCard data={book} key={book.id} />
                  }
                
                })
              }
            </div>
              <div className="book_btn">
                <Link to={`/books`}><Button className="btn">Take a tour</Button></Link>
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