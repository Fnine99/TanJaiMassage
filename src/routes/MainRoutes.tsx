import { lazy } from 'react'

// layout 
import Layout from 'layout'

// pages 
const Home = lazy(() => import('pages/Home'))

interface MainRoutes {
    path?: string,
    index?: boolean,
    element?: JSX.Element,
    children?: [
        MainRoutes
    ]
}

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]     
        }
    ] 
}

export default MainRoutes