import axios from '../../helpers/axiosConfig';
import {useCallback} from 'react'
import {useDispatch} from 'react-redux';
import {FETCH_START, FETCH_SUCCESS} from "./types";

export const useActions = () => {
    const dispatch = useDispatch();
    const fetchAlerts = useCallback(() => {
        dispatch({type: FETCH_START});
        axios.get('/alerts').then(res => dispatch({
            type: FETCH_SUCCESS,
            payload: res.data.features
        })).catch(err => console.log(err.response));

    }, []);

    return {fetchAlerts};
};
