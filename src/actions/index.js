import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PHONENUMBER_CHANGED,
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

export const loginUser = ({ email, password, navigation }) => {
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
  navigation.navigate("Main");
  return{
    type: LOGIN_USER_SUCCESS
  };
};

// const loginUserFail = (dispatch) => {
//   dispatch({ type: LOGIN_USER_FAIL });
// };
//
// const loginUserSuccess = (dispatch, user) => {
//   dispatch({
//     type: LOGIN_USER_SUCCESS,
//     payload: user
//   });
//
//   Actions.main();
// };
