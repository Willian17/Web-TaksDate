import Router from 'next/router'
import {AUTHENTICATE, DEAUTHENTICATE, USER} from '../types'
import api from "../../services/api"
import { removeCookie, setCookie } from '../../utils/cookie'
import { toast } from 'react-toastify'

const authenticate = ({email, password}, type) => {
    if(type !== 'login'){
        throw new Error('Chamada de API errada!')
    }

    return (dispatch) => {
        api.post('/students/signin', {email, password})
        .then( ( response ) => {
            const { token, user } = response.data
            setCookie('user', user)
            setCookie('token', token)

            dispatch({type: AUTHENTICATE, payload: token})
            dispatch({type: USER, payload: user }  )
            Router.push('/');
        }).catch( ( error )=> {
            if(error.response.data.error){
                toast.error((error.response.data.error))
            } else {
                toast.error('Ocorreu um erro inesperado, tente novamente mais tarde!')
            }
        } )
    }

}

const reauthenticate = (token, user) => {
    return (dispatch) => {
      setCookie('user', user)
      setCookie('token', token)
      dispatch({type: AUTHENTICATE, payload: token});
      dispatch({type: USER, payload: user});
    };
  };

const deauthenticate = () => {
    return (dispatch) => {
        removeCookie('user')
        removeCookie('token')
        Router.push('/signin');
        dispatch({type: DEAUTHENTICATE});
    };
  }; 


export default {
    authenticate,
    reauthenticate,
    deauthenticate
}