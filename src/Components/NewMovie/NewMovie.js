import React, { useState, useContext } from "react";
import {AppContext} from "../../App";

import './new-movie.css';


const NewMovie = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    //const [watchDate, setWatchDate] = useState(""); // implement later
    //const [movieImage, setMovieImage] = useState(""); // implement later

    const handleForm = e => {
        e.preventDefault();
        const newMovies = [...App.movies, {title: title, rating: rating}];
        App.setMovies(newMovies);
        console.log("MOVIES")
        props.history.push('/mainpage');
    };
    return (
        <div className="container-new-movie">
            <div className="d-flex justify-content-center h-100">
            <form onSubmit={e => handleForm(e)} className="card-new-movie">
                <div className="">
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        name="title"
                        type="text"
                        placeholder="movie title"
                    />
                    <input
                        onChange={e => setRating(e.target.value)}
                        name="rating"
                        value={rating}
                        type="text"
                        placeholder="your movie rating"
                    />
                </div>
                <div className="">
                    <button type="submit" className="btn form_btn">Add</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default NewMovie;
