import React, { useState, useContext } from "react";

// Internal components
import './movie-card.css';
import {AppContext} from "../../App";
import exampleMoviePicture from '../../icons/example_movie_picture.jpg'
import '../../App.scss';

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Slider from '@material-ui/core/Slider';
import Button from "@material-ui/core/Button";
//import {useTheme} from "@material-ui/styles";
import Divider from '@material-ui/core/Divider';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// TODO -- update fully to material design
const MovieCard = (props) => {
    const App = useContext(AppContext);

    const [title, setTitle] = useState(props.title);
    const [viewed, setViewed] = useState(false);
    // default image -- if no image is available
    const [imageUrl, setImageUrl] = useState('');
    const [viewDate, setViewDate] = useState(null);
    const [rating, setRating] = useState(0);

    //const MuiTheme = useTheme();

    const componentsWhenViewed = () => {
        const marks = [
            {
                value: 1,
                label: '1',
            },
            {
                value: 2,
                label: '2',
            },
            {
                value: 3,
                label: '3',
            },
            {
                value: 4,
                label: '4',
            },
            {
                value: 5,
                label: '5',
            }
        ];

        return viewed ? (
            <div>
                <Box style={{marginTop:'5%'}}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <p>When did you watch the movie? </p>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={viewDate}
                            onChange={(date) => setViewDate(date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Box>
                <Box style={{marginTop:'10%'}}>
                    <p>Your rating of the movie? </p>
                    <Slider
                        getAriaValueText={(value) => "" + value}
                        aria-labelledby="discrete-slider-always"
                        marks={marks}
                        step={1}
                        min={1}
                        max={5}
                        style={{width: '75%'}}
                        />
                </Box>
            </div>
        ) : null;
    }
    return (
        <div className="movie-card">
            <Grid container spacing={1}>
                <Grid item xs={2} >
                    <Checkbox
                        checked={viewed}
                        onChange={(e) => setViewed(e.target.checked)}
                        value="viewed"
                        inputProps={{
                            'aria-label': 'primary checkbox'
                        }}
                        color={"primary"}
                        style={{top: '25%'}}
                        icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                        checkedIcon={<CheckBoxIcon fontSize="large" />}
                    />
                </Grid>

                <Grid item xs={6}>
                    <p > {title} </p>
                    <p > imbd rating </p>

                </Grid>

                <Grid item xs={4}>
                        <img src={exampleMoviePicture} />
                </Grid>
            </Grid>
        </div>
    );
};

export default MovieCard;

/*
*   <div className="movie-card">
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Box style={{marginLeft: '3%'}}>
                        <Grid container>
                            <Grid item xs={10}>
                                <p > {title} </p>
                            </Grid>
                                <DeleteOutlineIcon/>
                        </Grid>
                        <Grid container>
                            <Grid item xs={10}>
                                <p>Have you seen this movie?</p>
                            </Grid>
                                <Checkbox
                                    checked={viewed}
                                    onChange={(e) => setViewed(e.target.checked)}
                                    value="viewed"
                                    inputProps={{
                                        'aria-label': 'primary checkbox',
                                    }}
                                    color={"primary"}
                                    style={{right:'2%'}}
                                />
                        </Grid>
                        {componentsWhenViewed()}
                    </Box>
                </Grid>
                <Grid item xs={4}>
                        <img src={exampleMoviePicture} />
                </Grid>
            </Grid>
            <Button variant="contained"
                    color="primary"
                    style={{
                        width: '100%',
                        bottom: '0',
                       }}
                    onClick={(e) => console.log("save to db")}
>Save
</Button>
</div>
*
* */