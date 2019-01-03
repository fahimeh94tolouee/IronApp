// import data from './fakeData/advertise.json';
//
// export default () => data;
import{
  FETCH_ADS_SUCCESS,
  FETCH_ADS_FAILURE,
  FETCHING_ADS,
} from '../actions/types';

const initialState = {
    ads: [],
    isFetching: false,
    error: false,
}

export default function adsReducer(state = initialState, action) {

    switch(action.type) {
        case FETCHING_ADS:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_ADS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ads: action.payload
            }
        case FETCH_ADS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
