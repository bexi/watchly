import React, { useState, useContext } from "react";

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
    /*
    * .movie-list {
    color: white;
    background-color: rgba(0,0,0,0.2) !important;
    height: 80%;
    overflow:hidden;
    overflow-y:scroll;
    position:relative
}

ul {
    position: absolute;
    top:1%;
    list-style: none;
    padding: 0;
    line-height: 2rem;
}
*/
    return (
        <Container style={{
            width:'100%',
            height:'100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginTop:'1%'
        }}>
            <div style={{textAlign:'center', color:'white'}}>
                <h1>These are your movies:</h1>
                {newMovieButton}
                {newMovieComponent}
            </div>
            <div style={{
                color: 'white',
                height: '80%',
                overflow:'hidden',
                overflowY:'scroll',
                position:'relative'
            }}>
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