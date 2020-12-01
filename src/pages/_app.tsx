import React from 'react'
import { Provider } from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../redux'

import App from 'next/app'
import { ThemeProvider } from 'styled-components'


import GlobalStyle from '../styles/global'
import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme'
import ValidationUser from '../components/ValidationUser'
import { getToken } from '../utils/cookie'
import isPublicRoute from '../utils/isPublicRoute'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props 
    return(
    <ThemeProvider theme={theme}>

      <Provider store={store}>

        <ValidationUser>

          <Component {...pageProps} />

        </ValidationUser>

      </Provider>
      <GlobalStyle />

    </ThemeProvider>
    )
  }
}

const makestore = () => store
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)