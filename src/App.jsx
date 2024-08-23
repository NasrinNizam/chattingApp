
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './Layouts/LayoutOne'
import { LoginPage } from './Pages/LoginPage'
import { SignUpPage } from './Pages/SignUpPage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { ToastContainer } from 'react-toastify'
import database from './firebase.config'
import ResetPassword from './components/LoginCompo/ResetPassword'
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
           <Route index element={<LoginPage/>}/>
           <Route path='/signuppage' element={<SignUpPage/>}/>
           <Route path='/resetPassword' element={<ResetPassword/>}/>
           <Route path='/notfoundpage' element={<NotFoundPage/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
      <ToastContainer />

    </>
  )
}

export default App
