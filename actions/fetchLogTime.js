import { FETCH_LOGTIME_SUCCESS, FETCH_LOGTIME_FAILURE, FETCHING_LOGTIME } from '../constants';

export default function fetchlogTime(id, token) {

    return (dispatch) => {
        dispatch(fetchLogTime());

        return(fetch('https://api.intra.42.fr/v2/users/' + id + '/locations',
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
                return(dispatch(fetchLogTimeSuccess(json)))
            })
            .catch(err => dispatch(fetchLogTimeFailure(err)))
    }
}

function fetchLogTime() {

    return {
        type: FETCHING_LOGTIME
    }
}

function fetchLogTimeSuccess(data) {

    return {
        type: FETCH_LOGTIME_SUCCESS,
        data
    }
}

function fetchLogTimeFailure() {
    return {
        type: FETCH_LOGTIME_FAILURE
    }
}