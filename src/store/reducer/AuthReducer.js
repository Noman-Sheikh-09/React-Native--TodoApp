import { LOGIN,LOGOUT,SIGNUP } from "../types/Types";
const initialState = {
    isUserLoggedIn: false,
    user: null,

  };

  export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN: {
        return {
          ...state,
          isUserLoggedIn: true,
          user: action.payload,
        };
      }
    }}