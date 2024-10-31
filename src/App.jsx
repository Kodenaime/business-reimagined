import React from 'react'

import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Footer/Footer'
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Contact from '../src/Pages/Contact/Contact'
import Services from '../src/Pages/Services/Services'
import NotFound from '../src/Pages/NotFound/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='service' element={<Services/>} />
        {/* <Route path='workers' element={<Workers/>} /> */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>  
  )
}

export default App