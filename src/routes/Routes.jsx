import { createBrowserRouter } from 'react-router-dom'
import Main from '../layoutes/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import UserProfile from '../pages/UserProfile/UserProfile'
import PrivateRoute from './PrivateRoute'
import SignUp from '../pages/SignUp/SignUp'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import College from '../pages/College/College'
import Admission from '../pages/Admission/Admission'
import CollegeDetails from '../pages/CollegeDetails/CollegeDetails'

export const router = createBrowserRouter([

    {
     path: "/",
     element: <Main />,
     errorElement: <ErrorPage />,
     children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/colleges",
            element: <College />
        },
        {
            path: "/view-details/:id",
            element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
            loader: ({params}) => fetch(`${import.meta.env.VITE_url}colleges/${params.id}`)
        },
        {
            path: "/admission",
            element: <Admission />
        },
        {
            path: "/user-profile",
            element: <PrivateRoute><UserProfile /></PrivateRoute>
        }
     ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    }
    
  ])