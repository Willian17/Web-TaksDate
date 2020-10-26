import cookie from 'js-cookie'

export const setCookie = (key: string, value) =>{
    if(process.browser){
        cookie.set(key, value, {
            expires: 3,
            path: '/'
        })
    }
}

export const getCookie = (key: string) => {
    if(process.browser){
       return cookie.get(key)
    }
}

export const removeCookie = (key: string) => {
    if(process.browser){
        cookie.remove(key)
    }
}
