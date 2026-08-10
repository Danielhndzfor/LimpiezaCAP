import { createBrowserRouter, Navigate } from 'react-router-dom'
import { isMaintenanceMode } from './config/env'
import MainLayout from './layouts/MainLayout'
import Construction from './pages/Construction/Construction'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import ServiceDetail from './pages/ServiceDetail/ServiceDetail'
import RecentWork from './pages/RecentWork/RecentWork'
import CareerDetail from './pages/CareerDetail/CareerDetail'
import Faq from './pages/Faq/Faq'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

const siteRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'nosotros', element: <About /> },
      { path: 'servicios', element: <Services /> },
      { path: 'servicios/:slug', element: <ServiceDetail /> },
      { path: 'trabajos-recientes', element: <RecentWork /> },
      { path: 'vacantes/:slug', element: <CareerDetail /> },
      { path: 'vacantes', element: <Navigate to="/nosotros#vacantes" replace /> },
      { path: 'faq', element: <Faq /> },
      { path: 'contacto', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

const maintenanceRoutes = [{ path: '*', element: <Construction /> }]

export const router = createBrowserRouter(
  isMaintenanceMode ? maintenanceRoutes : siteRoutes,
)
