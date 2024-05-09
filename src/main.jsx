import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
// import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'
import Github , {githubInfoLoder} from './Components/Github/Github.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//           path : "home",
//           element : <Home />
//       },
//       {
//           path : "about",
//           element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       },
//       {
//         path : "github",
//         element : <Github />
//       },
//       {
//         path : "user/:userId",
//         element : <User />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='home' element={<Home />}> </Route>
      <Route path='about' element={<About />}> </Route>
      <Route path='contact' element={<Contact />}> </Route>
      {/* <Route path='github' element={<Github />}> </Route> */}
      <Route path='user/:userId' element={<User />}> </Route>
      <Route loader={githubInfoLoder} path='github' element={<Github />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
