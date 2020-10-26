import React, { useEffect } from 'react';
import Link from 'next/link';


import  {PageHome} from '../styles/pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/actions';
import { getCookie } from '../utils/cookie';

const Landing: React.FC = () => {
  const dispatch = useDispatch()

  const user = getCookie('user') ? JSON.parse(getCookie('user')) : undefined

  function signOut(){
    dispatch(actions.deauthenticate())
  }

  return (
    <PageHome id="page-landing">
      <header>
        <div className="user-container">
          <div className="user-avatar">

            <img 
              src={
                user?.avatar || 
                'https://iupac.org/wp-content/uploads/2018/05/default-avatar-300x300.png'
              } 
                alt="Logo-Usuário" 
            />
            <h2>{`${user?.name} ${user?.surname}`}</h2>
          </div>
        </div>
        <div className="logout-container">
          <button className="logout-button" onClick={signOut}>
            <div className="logout">
              <img src='/icons/sign-out.svg' alt="Icon back" />
            </div>
          </button>
        </div>
      </header>
      <main id="page-landing-content" className="content-container">
        <div className="logo-container">
          <img src='logo.svg' alt="Proffy" />
          <h2>Sua plataforma de organização de estudos online.</h2>
        </div>

        <img
          src={'landing.svg'}
          alt="Plataforma de estudos"
          className="hero-image"
        />
      </main>
      <footer>
        <div className="footer-wrapper">
          <div className="welcome-container">
            <div className="title">
              <h1>Seja bem-vindo.</h1>
              <h3>O que deseja fazer?</h3>
            </div>
          </div>

          <div className="buttons-container">
            <Link href="/task-list" >
              <a className="study">
                <img src='/icons/list-task.svg' alt="Listar tasks" />
                Ver tasks
              </a>
            </Link>

            <Link href="/task-form" >
              <a className="give-classes">
                <img src='/icons/task-form.png' alt="Dar aulas" />
                Criar tasks
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </PageHome>
  );
};

export default Landing;