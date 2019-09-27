import React, { useState, useContext } from "react";

import './main-page.css';
import MovieCard from "../MovieCard/MovieCard";
import {AppContext} from "../../App";
import Header from "../../Header";
import NewMovie from "../NewMovie/NewMovie";

const MainPage = (props) => {
    const App = useContext(AppContext);
    const [showNewMovieComponent, setShowNewMovieComponent] = useState(false);

    let newMovieComponent;
    let newMovieButton;
    if(showNewMovieComponent){
        newMovieComponent = <NewMovie callback={setShowNewMovieComponent}/>
        newMovieButton = null;
    }else{
        newMovieButton = <button className={'btn add-new-movie-btn'} onClick={() => setShowNewMovieComponent(true)}>Add new Movie</button>
        newMovieComponent = null;
    }
    return (
        <div className="container">
            <div className="main-page">
                <h1>These are your movies:</h1>
                <div className="center-wrapper">
                    {newMovieButton}
                    {newMovieComponent}
                </div>
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