import React from 'react'
const HomePage  = React.lazy(() => import('./HomePage'))

export const HomePageRoute = [
    {path: '/', element: <HomePage/>, exact: true}
]