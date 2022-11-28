import { lazy } from 'react'

// layout 
import Layout from 'layout'

// pages 
const Home = lazy(() => import('pages/Home'))
const Services = lazy(()=> import('pages/Sevices'))
const Women = lazy(()=> import('pages/Women'))
const Pricing = lazy(()=> import('pages/Pricing'))
const AboutUs = lazy(()=> import('pages/AboutUs'))
const Team = lazy(()=> import('pages/Team'))
const Shop = lazy(()=> import('pages/Shop'))
const NotFound = lazy(()=> import('pages/NotFound'))

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
                },
                {
                    path: 'services',
                    element: <Services />
                },
                {
                    path: 'women',
                    element: <Women />
                },
                {
                    path: 'pricing',
                    element: <Pricing />
                },
                {
                    path: 'team',
                    element: <Team />
                },
                {
                    path: 'about-us',
                    element: <AboutUs />
                },
                {
                    path: 'shop',
                    element: <Shop />
                }
            ]     
        },
        {
            path: '*',
            element: <NotFound />
        }
    ] 
}

export default MainRoutes