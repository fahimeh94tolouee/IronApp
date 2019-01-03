import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AdvertismentReducer from './AdvertismentReducer';

export default combineReducers({
  auth: AuthReducer,
  advertise: AdvertismentReducer,
});
