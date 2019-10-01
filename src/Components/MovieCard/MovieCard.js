import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Rating from 'react-rating';

// Internal components
import './movie-card.css';
import {AppContext} from "../../App";

// Icons
import star_empty from '../../icons/star_empty.svg'
import star_filled from '../../icons/star.svg'
import exampleMoviePicture from '../../icons/example_movie_picture.jpg'

import Grid from '@material-ui/core/Grid';

// TODO -- update fully to material design
const MovieCard = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState(props.title);
    const [viewDate, setViewDate] = useState(new Date());
    const [rating, setRating] = useState(0);

    return (
        <div className="movie-card">
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <div>Title: {title}</div>
                    <DatePicker
                        selected={viewDate}
                        onChange={(date) => {setViewDate(date)}}
                    />
                    <Rating
                        emptySymbol={<img src={star_empty} className="star-icon" />}
                        fullSymbol={<img src={star_filled} className="star-icon" />}
                        onChange={(value) => setRating(value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <img src={exampleMoviePicture} />
                </Grid>
            </Grid>
        </div>
    );
};

export default MovieCard;
