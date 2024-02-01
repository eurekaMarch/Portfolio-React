import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Home from './Components/home/Home'
import Portfolio from './Components/Portfolio'
import Pricing from './Components/Pricing'
import Resume from './Components/resume/Resume'
import Services from './Components/Services'
import Sidebar from './Components/Sidebar'
import Testimonials from './Components/Testimonials'


function App() {


  return (
    <>
      <Sidebar />
      <main className='app__main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

    </>
  )
}

export default App
