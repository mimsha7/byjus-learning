import Grid from '@mui/material/Grid';
import React from 'react';
import Card from './Cards';
import './BookStore.scss'

const BookStore = () => {
    return (
        <Grid item container spacing={2} sx={{paddingLeft:'120px', paddingRight: '20px', justify: 'center', borderRadius: '10px', marginBottom: '10px'}}>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
        </Grid>
    );
};

export default BookStore;