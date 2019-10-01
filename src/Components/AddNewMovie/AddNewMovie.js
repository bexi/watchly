import React, { useState, useContext } from "react";

// Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Box, Container} from "@material-ui/core";

// Internal components
import './add-new-movie.css';
import {AppContext} from "../../App";

const AddNewMovie = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    //const [watchDate, setWatchDate] = useState(""); // implement later
    //const [movieImage, setMovieImage] = useState(""); // implement later

    const handleForm = e => {
        e.preventDefault();
        const newMovies = [...App.movies, {title: title, rating: rating}];
        App.setMovies(newMovies);
    };

    return (
        <div className="add-new-movie">
            <h3 className="text-center">Add a New Movie</h3>
            <form noValidate autoComplete="off" onSubmit={e => handleForm(e)}>
                <Box>
                    <TextField
                        style={ {margin: 8, width: '50%', color: "white"} }
                        className="form-input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        label="Movie Title"
                        variant="outlined"
                        InputLabelProps={ {className: {color: "white"}}}
                    />
                </Box>
                <Box>
                    <TextField
                        style={ {margin: 8, width: '50%'} }
                        className="form-input"
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        label="Your Rating"
                        variant="outlined"
                    />
                </Box>
                <Box>
                    <Button variant="contained" color="primary" type="submit" >Add Me!</Button>
                </Box>
            </form>
            <Button onClick={()=> props.callback(false)}>
                Cancel
            </Button>
        </div>
    );
};

export default AddNewMovie;
