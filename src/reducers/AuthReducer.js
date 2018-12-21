import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PHONENUMBER_CHANGED,
  LOGIN_USER_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
  email: '',
  password: '',
  phoneNumber: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; //make a new object and update email
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case PHONENUMBER_CHANGED:
      return { ...state, phoneNumber: action.payload};
    case LOGIN_USER_SUCCESS:
      return state;
    default:
      return state;

  }
};
