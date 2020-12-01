const isPublicRoute = (currentRoute: string) => {
   return currentRoute != '/signin' && currentRoute != '/signup' ?
    false :
    true
}

export default isPublicRoute