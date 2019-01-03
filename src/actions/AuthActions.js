import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PHONENUMBER_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const phoneNumberChanged = (text) => {
  return {
    type: PHONENUMBER_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, phoneNumber, navigation }) => {
  return (dispatch) => {
      dispatch({ type: LOGIN_USER });

      return(fetch(`https://iron.platform.atro1.com:1235/api/noauth/signup`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ email, password, phone:phoneNumber })
      }))
      // .then(res => res.json())
      .then(user => {
        console.log(user);
        loginUserSuccess(dispatch, user, navigation)})
      .catch(err => loginUserFail(dispatch))
  };
  // return (dispatch) => {
  //   dispatch({ type: LOGIN_USER });
  //
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(user => loginUserSuccess(dispatch, user))
  //     .catch((error) => {
  //       console.log(error);
  //
  //       firebase.auth().createUserWithEmailAndPassword(email, password)
  //         .then(user => loginUserSuccess(dispatch, user))
  //         .catch(() => loginUserFail(dispatch));
  //       });
  // };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user, navigation) => {
  navigation.navigate("Main");
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  // Actions.main();
};
