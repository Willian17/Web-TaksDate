import { AUTHENTICATE, DEAUTHENTICATE, USER } from '../types'

const initialState = {
    user: null,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case AUTHENTICATE:
            return Object.assign({}, state, {token: action.payload})
        case USER:
            return Object.assign({}, state, {user: action.payload})
        case DEAUTHENTICATE: 
            return {token: null, user: null}
        default:
            return state 
    }
}

export default authReducer