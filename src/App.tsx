import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import News from './pages/news'
import Contact from './pages/contact'
import Blog1 from './pages/blog1'
import Blog2 from './pages/blog2'
import Blog3 from './pages/blog3'
import Blog4 from './pages/blog4'
import Blog5 from './pages/blog5'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />}></Route>
          <Route path='/news/Unlocking-Your-Company-s-Potential' element={<Blog1 />} />
          <Route path='/news/Aviation-Expertise-A-Key-to-Success' element={<Blog2 />} />
          <Route path='/news/Industry-Recognition-and-Awards' element={<Blog3 />} />
          <Route path='/news/SAATM' element={<Blog4 />} />
          <Route path='/news/medays-amadeus' element={<Blog5 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
