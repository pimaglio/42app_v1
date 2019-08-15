import { FETCH_MYPROFILE_SUCCESS, FETCH_MYPROFILE_FAILURE, FETCHING_MYPROFILE } from '../constants';

const initialState = {
    myProfile: [],
    isFetching: false,
    error: false
};

export default function myProfileReducer(state = initialState, action) {

    switch(action.type) {
        case FETCHING_MYPROFILE:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MYPROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                myProfile: action.data
            };
        case FETCH_MYPROFILE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        default:
            return state
    }
}