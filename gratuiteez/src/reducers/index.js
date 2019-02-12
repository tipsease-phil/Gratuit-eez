
import {
    GET_PROFILE,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,

    CREATE_PROFILE,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE
} from '../actions';

const initialState = {
    users: [],
    fetchingUser: false,
    userData: {},
    error: ''
};

function userReducer(state = initialState, action) {
    console.log('userReducer', action);
    switch(action.type) {
        case GET_PROFILE:
            return {
                ...state,
                fetchingUser: true,
                error: ''
            };
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                fetchingUser: false,
                userData: action.payload
            };
        case GET_PROFILE_FAILURE:
            return {
                ...state,
                fetchingUser: false,
                error: action.payload
            };

        case CREATE_PROFILE:
            return {
                ...state,
                creatingProfile: true,
                error: ''
            };
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                creatingProfile: false,
                error: action.payload
            };
        case CREATE_PROFILE_FAILURE:
            return {
                ...state,
                creatingProfile: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer