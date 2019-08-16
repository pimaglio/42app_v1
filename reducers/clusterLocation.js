import { FETCH_LOCATION_z1_SUCCESS, FETCH_LOCATION_z2_SUCCESS, FETCH_LOCATION_z3_SUCCESS, FETCH_LOCATION_z4_SUCCESS , FETCH_LOCATION_FAILURE, FETCHING_LOCATION } from '../constants';

const initialState = {
    z1: [],
    z2: [],
    z3: [],
    z4: [],
    isFetching: false,
    error: false
};

export default function myProfileReducer(state = initialState, action) {

    switch(action.type) {
        case FETCHING_LOCATION:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_LOCATION_z1_SUCCESS:
            return {
                ...state,
                isFetching: true,
                z1: action.data
            };
        case FETCH_LOCATION_z2_SUCCESS:
            return {
                ...state,
                isFetching: true,
                z2: action.data
            };
        case FETCH_LOCATION_z3_SUCCESS:
            return {
                ...state,
                isFetching: true,
                z3: action.data
            };
        case FETCH_LOCATION_z4_SUCCESS:
            return {
                ...state,
                isFetching: false,
                z4: action.data
            };
        case FETCH_LOCATION_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}