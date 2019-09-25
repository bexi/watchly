import React, { useState, useContext } from "react";

import './main-page.css';
import MovieCard from "../MovieCard/MovieCard";
import {AppContext} from "../../App";

const MainPage = (props) => {
    const App = useContext(AppContext);

    function handleKeyDown(e, i) {
        if (e.key === 'Enter') {
            //createMovieAtIndex(e, i);
        }
        if (e.key === 'Backspace' && App.movies[i].content === '') {
            e.preventDefault();
            //return removeMovieAtIndex(i);
        }
    }
    /*function createMovieAtIndex(e, i) {
        const newMovies = [...movies];
        newMovies.splice(i + 1, 0, {
            movie: '',
            isCompleted: false,
        });
        setMovies(newMovies);
        setTimeout(() => {
            document.forms[0].elements[i + 1].focus();
        }, 0);
    }

    function updateMovieAtIndex(e, i) {
        const newMovies = [...movies];
        newMovies[i].content = e.target.value;
        setMovies(newMovies);
    }

    function removeMovieAtIndex(i) {
        if (i === 0 && movies.length === 1) return;
        setMovies(movies => movies.slice(0, i).concat(movies.slice(i + 1, movies.length)));
        setTimeout(() => {
            document.forms[0].elements[i - 1].focus();
        }, 0);
    }*/
    return (
        <div className="container">
            <div className="main-page">
                <h1>These are your movies:</h1>
                <div className="center-wrapper">
                <button className={'btn add-new-movie-btn'} onClick={(e) => props.history.push({
                    pathname: '/newmovie',
                })}>Add new Movie</button></div>
                <div className="movie-list">
                    <ul>
                        {App.movies.map((movie, i) => (
                            <MovieCard title={movie.title} rating={movie.rating}/>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainPage;