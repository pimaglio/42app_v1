import { FETCH_LOGTIME_SUCCESS, FETCH_LOGTIME_FAILURE, FETCHING_LOGTIME } from '../constants';

const initialState = {
    logTime: [],
    isFetching: false,
    error: false
};

export default function myProfileReducer(state = initialState, action) {

    switch(action.type) {
        case FETCHING_LOGTIME:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_LOGTIME_SUCCESS:
            return {
                ...state,
                isFetching: false,
                logTime: action.data
            };
        case FETCH_LOGTIME_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}