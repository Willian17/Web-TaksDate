import React,{useState} from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

import InputForm from '../components/inputForm';
import Aside from '../components/Aside';

import {PageLogin} from '../styles/pages/signin'
import { useDispatch } from 'react-redux';
import actions from '../redux/actions'
import { toast, ToastContainer } from 'react-toastify';

const Signin: NextPage = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    async function handleAuthenticate(){
        try {
            dispatch(actions.authenticate({email, password}, 'login'))
        } catch (error) {
           console.log(error)
        }
    }

    return(
        <PageLogin>
            <Aside />
            <div className="login-form">
            <div className="title-container">
                <h2>Fazer login</h2>
            </div>
            <ToastContainer />
    
            <div className="inputs">
                <InputForm
                label="E-mail"
                name="email"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                />
                <InputForm
                label="Senha"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                />
            </div>
            <div className="buttons-container">
    
                <div className="second-line">
                <button onClick={handleAuthenticate} className="button"
                    type="button"
                >
                    Entrar
                </button>
                </div>
            </div>
  
            <div className="footer">
                <div className="signup-container">
                    <span>Não tem conta?</span>
                    <Link href="/signup">
                        <a className="sign-link">
                            Cadastre-se
                        </a>
                    </Link>
                </div>
                <span>
                    É de graça <img alt="Coração roxo" src='/icons/purple-heart.svg' />
                </span>
          </div>
        </div>
      </PageLogin>
    )
}


export default Signin