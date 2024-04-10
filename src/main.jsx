import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Services from './components/services/Services.jsx'
import Gallery from './components/gallery/Gallery.jsx'
import Contact from './components/contact/Contact.jsx'
import Sonu_ravi from './components/project/Sonu_ravi.jsx'
import Neelu_piyush from './components/project/Neelu_piyush.jsx'
import Preety_Hemant from './components/project/Prity_Hemant.jsx'
import Tina_anil from './components/project/Tina_anil.jsx'
import Payal_pawan from './components/project/Payal_pavan.jsx'
import Arpita_ashu from './components/project/Arpita_ashu.jsx'
import Sonu_ashish from './components/wedding_projects/Sonu_ashish.jsx'
import Sanchi_gopal from './components/wedding_projects/Sanchi_gopal.jsx'
import Jyoti_manoj from './components/wedding_projects/Jyoti_manoj.jsx'
import Ritu_abhi from './components/wedding_projects/Ritu_abhi.jsx'
import Monika_sandeep from './components/wedding_projects/Monika_sandeep.jsx'
import Anjali_vinay from './components/wedding_projects/Anjali_vinay.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='contact' element={<Contact />} />
      <Route path='project'> 
      <Route path='sonu-ravi' element={<Sonu_ravi/>} />
      <Route path='neelu-piyush' element={<Neelu_piyush/>} />
      <Route path='preety-hemant' element={<Preety_Hemant/>} />
      <Route path='tina-anil' element={<Tina_anil/>} />
      <Route path='payal-pawan' element={<Payal_pawan/>} />
      <Route path='arpita-ashutosh' element={<Arpita_ashu/>} />
      </Route>
      <Route path='projects/wedding'> 
      <Route path='sonu-ashish' element={<Sonu_ashish/>} />
      <Route path='sanchi-gopal' element={<Sanchi_gopal/>} />
      <Route path='jyoti-manoj' element={<Jyoti_manoj/>} />
      <Route path='ritu-abhishek' element={<Ritu_abhi/>} />
      <Route path='monika-sandeep' element={<Monika_sandeep/>} />
      <Route path='anjali-vinay' element={<Anjali_vinay/>} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
