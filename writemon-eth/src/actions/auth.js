import {
    USER_LOGIN_SUCCESS
} from './types';


export const setUser = (user) => async dispatch => {
    console.log(user);

    dispatchEvent({
        type: USER_LOGIN_SUCCESS,
        payload: user
    })
}