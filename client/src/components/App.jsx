import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import {WeatherProvider} from "../contexts/WeatherContext";
import WeatherContainer from "./weather/WeatherContainer";
import {useActions} from "../store/weather/useActions";

const App = () => {
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
        <WeatherProvider value={weather}>
            <h1>App</h1>
            <Route exact path='/' component={WeatherContainer}/>
        </WeatherProvider>
    )
};

export default App;