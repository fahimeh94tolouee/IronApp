import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AdvertismentReducer from './AdvertismentReducer';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
  auth: AuthReducer,
  advertise: AdvertismentReducer,
  nav: NavigationReducer
});
