import React, { useState, useContext } from "react";
import {AppContext} from "../../App";

const MovieCard = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState(props.title);
    const [rating, setRating] = useState(props.rating);
    //const [watchDate, setWatchDate] = useState(""); // implement later
    //const [movieImage, setMovieImage] = useState(""); // implement later

    return (
        <div className='row'>
            <div className='col-5 float-left'>
                <div>Title: {title}</div>
                <div>Rating: {rating}</div>
                <div>Watch date: TODO </div>
            </div>
            <div className='col float-right movie-image'>TODO IMAGE</div>
        </div>
    );
};

export default MovieCard;
