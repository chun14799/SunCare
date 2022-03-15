import React from 'react'
const HomePage  = React.lazy(() => import('./HomePage'))
const RegisterAndSignInPage = React.lazy(() => import('../components/Register/RegisterAndSignIn'))

export const HomePageRoute = [
    {path: '/', element: <HomePage/>, exact: true},
    {path: '/register-signin', element: <RegisterAndSignInPage/>, exact: true}
]