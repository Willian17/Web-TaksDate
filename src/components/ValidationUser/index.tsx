import Router from 'next/router'
import {NextComponentType} from  'next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

import { getCookie, getToken} from "../../utils/cookie"

const ValidationUser: NextComponentType = ({children}) => {
    const [verify , setIsVerify] = useState(false)
    const state: any = useSelector(state => state)


    const dispatch = useDispatch()


    useEffect( ()=> {
        const user =  getCookie('user')
        const token = getToken()


        if(token){ // estão autenticados pelo token
            if(!state.authentication.user || !state.authentication.token){ // não tiver no estado global
                dispatch(actions.reauthenticate(token, user))
            }
            if(Router.pathname == '/signin' || Router.pathname == '/signup'  ){ // autenticado querendo fazer login
                Router.push('/')
            }
            setIsVerify(true)
            } else { // não está autenticado
            if(Router.pathname != '/signin' && Router.pathname != '/signup'){ // página não permitida
                setIsVerify(true) 
                Router.push('/signin')
            } else {
                setIsVerify(true) 
            }
        }
    }, [])

    return(
        <>
            {verify && children}
        </>
    )
}


export default ValidationUser