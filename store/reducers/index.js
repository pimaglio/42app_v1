import {combineReducers} from 'redux';
import {
    GET_PROFILE,
} from "../actions";

const state = {
    isLoading: true
};


function myProfile(state = [], action) {
    let nextState;
    switch (action.type) {
        case GET_PROFILE:
            return action.myProfile;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    myProfile,
});

export default rootReducer;
