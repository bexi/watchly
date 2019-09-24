import React, { useState, useContext } from "react";
import {AppContext} from "../../App";

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
        <form onSubmit={e => handleForm(e)}>
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
                <button type="submit" className="btn form_btn">Add Movie</button>
            </div>
        </form>
    );
};

export default NewMovie;
