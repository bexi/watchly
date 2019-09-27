import React, { useState, useContext } from "react";
import {AppContext} from "../../App";

import './movie-card.css';
import star_empty from '../../icons/star_empty.svg'
import star_filled from '../../icons/star.svg' // <img src={star_filled} />
import exampleMoviePicture from '../../icons/example_movie_picture.jpg'

const MovieCard = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState(props.title);
    const [rating, setRating] = useState(props.rating);
    //const [watchDate, setWatchDate] = useState(""); // implement later
    //const [movieImage, setMovieImage] = useState(""); // implement later

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
                    <img src={exampleMoviePicture} /></div>
            </div></div>
        </div>
    );
};

export default MovieCard;
//  <img className="movie-image" src={exampleMoviePicture} />