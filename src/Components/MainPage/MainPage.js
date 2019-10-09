import React, { useState, useContext } from "react";
import './main-page.css';

// material ui
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

// internal components
import MovieCard from "../MovieCard/MovieCard";
import {AppContext} from "../../App";
import AddNewMovie from "../AddNewMovie/AddNewMovie";
import {Box, Container} from "@material-ui/core";

const MainPage = (props) => {
    const App = useContext(AppContext);
    const [showNewMovieComponent, setShowNewMovieComponent] = useState(false);

    let newMovieComponent;
    let newMovieButton;
    if(showNewMovieComponent){
        newMovieComponent = <AddNewMovie callback={setShowNewMovieComponent}/>
        newMovieButton = null;
    }else{
        newMovieButton =
            (<Fab color="primary" aria-label="add" onClick={() => setShowNewMovieComponent(true)} >
                <AddIcon />
            </Fab>);
        newMovieComponent = null;
    }
    return (
        <Container style={{width:'100%',height:'100%'}}>
            <div style={{textAlign:'center', color:'white'}}>
                <h1>These are your movies:</h1>
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
        </Container>
    );
};

export default MainPage;