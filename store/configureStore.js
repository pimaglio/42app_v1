import { createStore } from 'redux';
import toggleProfile from './reducers/profileReducer';

export default createStore(toggleProfile)
