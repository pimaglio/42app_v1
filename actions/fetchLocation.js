import { FETCH_MYPROFILE_SUCCESS, FETCH_MYPROFILE_FAILURE, FETCHING_MYPROFILE } from '../constants';

export default function fetchAllLocation(token) {

    return (dispatch) => {
        dispatch(fetchMyProfile());

        return(fetch('https://api.intra.42.fr/v2/locations',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }))
            .then(res => res.json())
            .then(json => {
                return(dispatch(fetchMyProfileSuccess(json)))
            })
            .catch(err => dispatch(fetchMyProfileFailure(err)))
    }
}

function fetchMyProfile() {

    return {
        type: FETCHING_MYPROFILE
    }
}

function fetchMyProfileSuccess(data) {

    return {
        type: FETCH_MYPROFILE_SUCCESS,
        data
    }
}

function fetchMyProfileFailure() {
    return {
        type: FETCH_MYPROFILE_FAILURE
    }
}