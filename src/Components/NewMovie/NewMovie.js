import React, { useState, useContext } from "react";
import {AppContext} from "../../App";

import './new-movie.css';
import '../../App.css';

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
                <div className="card-new-movie">
                    <div className="card-header"><h3 className="text-center">Add a New Movie</h3></div>
                    <form onSubmit={e => handleForm(e)}>
                        <div className="new-movie-input">
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
                            <button type="submit" className="btn new-movie-btn">Add Me!</button>
                        </div>
                    </form>
                    <button className="btn cancel-btn" onClick={()=> props.history.push('/mainpage')}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewMovie;
