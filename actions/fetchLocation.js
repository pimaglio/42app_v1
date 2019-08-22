import {
    FETCH_LOCATION_z1_SUCCESS,
    FETCH_LOCATION_z2_SUCCESS,
    FETCH_LOCATION_z3_SUCCESS,
    FETCH_LOCATION_z4_SUCCESS,
    FETCH_LOCATION_FAILURE,
    FETCHING_LOCATION
} from '../constants';

export default function fetchAllLocation(token) {
    return (dispatch) => {
        fetchZone(dispatch, token, 'z1', 'z2');
        setInterval(
            () => {
                setTimeout(
                    () => {
                        fetchZone(dispatch, token, 'z2', 'z3');
                    },500
                );
                setTimeout(
                    () => {
                        fetchZone(dispatch, token, 'z3', 'z4');
                    },1500
                );
                setTimeout(
                    () => {
                        fetchZone(dispatch, token, 'z4', 'z5');
                    },2000
                );
            }, 10000
        );

    };
}

function fetchZone(dispatch, token, zA, zB) {
    dispatch(fetchLocation());
    return (fetch('https://api.intra.42.fr/v2/campus/9/locations?&filter[active]=true&sort=-host&page[size]=100&range[host]=' + zA + ',' + zB,
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
            return (dispatch(fetchLocationSuccess(json, zA)))
        })
        .catch(err => dispatch(fetchLocationFailure(err)))
}

function fetchLocation() {

    return {
        type: FETCHING_LOCATION
    }
}

function fetchLocationSuccess(data, zA) {

    let typeAction = 'FETCH_LOCATION_' + zA + '_SUCCESS';

    return {
        type: typeAction,
        data
    }
}

function fetchLocationFailure() {
    return {
        type: FETCH_LOCATION_FAILURE
    }
}