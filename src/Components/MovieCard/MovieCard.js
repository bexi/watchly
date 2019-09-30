import React, { useState, useContext } from "react";
import {AppContext} from "../../App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Rating from 'react-rating';

import './movie-card.css';
import star_empty from '../../icons/star_empty.svg'
import star_filled from '../../icons/star.svg' // <img src={star_filled} />
import exampleMoviePicture from '../../icons/example_movie_picture.jpg'

const MovieCard = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState(props.title);
    const [viewDate, setViewDate] = useState(new Date());
    const [rating, setRating] = useState(0);

    console.log('rating: ' + rating);

    return (
        <div className="container">
            <div className='movie-card'>
                <div className="row">
                    <div className='col float-left'>
                        <div>Title: {title}</div>
                        <div>Rating: {rating}</div>
                        <div>Watch date: TODO </div>
                    </div>
                    <div className='col float-left'>
                        <img src={exampleMoviePicture} />
                    </div>
                    <DatePicker
                        selected={viewDate}
                        onChange={(date) => {setViewDate(date)}}
                    />
                    <Rating
                        emptySymbol={<img src={star_empty} className="star-icon" />}
                        fullSymbol={<img src={star_filled} className="star-icon" />}
                        onChange={(value) => setRating(value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
//  <img className="movie-image" src={exampleMoviePicture} />