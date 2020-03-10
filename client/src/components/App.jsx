import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import {WeatherProvider} from "../contexts/WeatherContext";
import WeatherContainer from "./weather/WeatherContainer";
import {useActions} from "../store/weather/useActions";
import Navigation from "./navigation/Navigation";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

const App = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState('false');
    const weather = useSelector(state => state.weather);
    const {fetchAlerts} = useActions();

    useEffect(() => {
        setIsLoading(weather.isLoading)
    }, [weather.isLoading]);

    useEffect(() => fetchAlerts(), []);

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <WeatherProvider value={weather}>
                <Navigation/>
                <Route exact path='/' component={WeatherContainer}/>
            </WeatherProvider>
        </div>
    )
};

export default App;