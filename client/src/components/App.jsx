import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import {WeatherProvider} from "../contexts/WeatherContext";
import WeatherContainer from "./weather/WeatherContainer";

const App = () => {
    const [isLoading, setIsLoading] = useState('false');
    const weather = useSelector(data => data.weather);

    useEffect(() => {
        setIsLoading(weather.isLoading)
    }, [weather.isLoading]);

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