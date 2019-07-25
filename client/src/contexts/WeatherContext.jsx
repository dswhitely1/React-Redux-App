import {createContext} from 'react';

const WeatherContext = createContext({});

const WeatherProvider = WeatherContext.Provider;

export {WeatherContext, WeatherProvider}