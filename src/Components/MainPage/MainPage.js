import React, { useState, useContext } from "react";
import styled from "styled-components";

// material ui
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

// internal components
import MovieCard from "../MovieCard/MovieCard";
import {AppContext} from "../../App";
import AddNewMovie from "../AddNewMovie/AddNewMovie";
import {CenterTextContainer, PaperDiv, ScrollableDiv} from "../StyledComponents";
import {useTheme} from "@material-ui/styles";

const MainPageContainer = styled(PaperDiv)`
    height: 90%;
    width: 75%;
    margin-top: 1%;
`;

const MovieList = styled(ScrollableDiv)`
    height: 80%;
    color: white;
`;

const MainPage = (props) => {
    const MuiTheme = useTheme();
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
        <MainPageContainer theme={MuiTheme} paperLight>
            <CenterTextContainer>
                <h1>These are your movies:</h1>
                {newMovieButton}
                {newMovieComponent}
            </CenterTextContainer>
            <MovieList >
                    <ul>
                        {App.movies.map((movie, i) => (
                            <MovieCard title={movie.title} rating={movie.rating}/>))
                        }
                    </ul>
            </MovieList>
        </MainPageContainer>
    );
};

export default MainPage;