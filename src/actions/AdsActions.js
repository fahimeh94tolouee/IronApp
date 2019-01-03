import {
  FETCH_ADS_SUCCESS,
  FETCH_ADS_FAILURE,
  FETCHING_ADS,
} from './types';

export function fetchAds(type){

    return (dispatch) => {
        dispatch(getAds())

        return(fetch(`https://iron.platform.atro1.com:1235/api/search/advertises?type=${type}&limit=12`, {
         method: 'GET'
        }))
        .then(res => res.json())
        .then(json => {
            return(dispatch(getAdsSuccess(json)))
        })
        .catch(err => dispatch(getAdsFailure(err)))
    };
};

function getAds() {

    return {
        type: FETCHING_ADS
    };
};

function getAdsSuccess(data) {

    return {
        type: FETCH_ADS_SUCCESS,
        payload: data.data
    };
};

function getAdsFailure() {
    return {
        type: FETCH_ADS_FAILURE
    };
};
