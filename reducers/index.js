import { combineReducers } from 'redux';
import myProfile from './myProfile';
import allLocation from './clusterLocation';
import logTime from './logTime';

const rootReducer = combineReducers({
    myProfile,
    allLocation,
    logTime
});

export default rootReducer