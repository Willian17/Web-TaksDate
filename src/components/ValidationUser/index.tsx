import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

import { getCookie} from "../../utils/cookie"

const ValidationUser: React.FC = ({children}) => {
    const [verify , setIsVerify] = useState(false)
    const state: any = useSelector(state => state)


    const dispatch = useDispatch()

    useEffect(()=> {
        const user = getCookie('user')
        const token = getCookie('token')


        if(user && token){ // estão autenticados no cookie
            if(!state.authentication.user || !state.authentication.token){
                dispatch(actions.reauthenticate(token, user))
            }
            if(Router.pathname == '/signin' || Router.pathname == '/signup'  ){
                Router.push('/')
            }
            setIsVerify(true)
        } else {
            if(Router.pathname != '/signin' && Router.pathname != '/signup'){
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