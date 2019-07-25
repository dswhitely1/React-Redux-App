import {createReducer} from "../../helpers/createReducer";
import {FETCH_FAIL, FETCH_START, FETCH_SUCCESS} from "./types";

const initialState = {
    alerts: [],
    isLoading: false,
    errors: null
};

const fetchStart = (state, payload) => ({...state, isLoading: true, errors: null});

const fetchSuccess = (state, payload) => ({...state, isLoading: false, errors: null, alerts: payload});

const fetchErrors = (state, payload) => ({...state, isLoading: false, alerts: [], errors: payload});

export default createReducer(initialState, {
    [FETCH_START]: fetchStart,
    [FETCH_SUCCESS]: fetchSuccess,
    [FETCH_FAIL]: fetchErrors
})

