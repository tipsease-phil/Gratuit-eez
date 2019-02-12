import axios from 'axios';

export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export const CREATE_PROFILE = "CREATE_PROFILE";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILURE = "CREATE_PROFILE_FAILURE";


export const getProfile = () => {
    return(dispatch) => {
        dispatch ({ type: GET_PROFILE });
        axios
        .get('https://tipsease.insanechaos.com/')
        .then(res => dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: GET_PROFILE_FAILURE, payload: err }))
    }
};

export const createProfile = data => {
    return(dispatch) => {
        dispatch ({ CREATE_PROFILE });
        axios
        .post('https://tipsease.insanechaos.com/', data)
        .then(res => dispatch({ type: CREATE_PROFILE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: CREATE_PROFILE_FAILURE, payload: err}))
    }
};
