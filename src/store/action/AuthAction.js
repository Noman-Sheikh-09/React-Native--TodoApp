import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  GET_USER_ON_AUTH_STATE_CHANGE,
} from '../types/Types';
import { Alert } from 'react-native';
import {auth, db} from '../../config/Firebase';
export const doLogin = (userData, navigate, setLoginLoading) => async (dispatch) => {
  try {
    setLoginLoading(true)
    const userCredential = await auth.signInWithEmailAndPassword(
      userData?.email,
      userData?.password,
    );
    var user = userCredential.user;
   
    dispatch({
      type: LOGIN,
      payload: user,
    });
    navigate('Tasker')
  } catch (error) {
    Alert.alert(error.toString());
  }
  finally{
    setLoginLoading(false)
  }
};
