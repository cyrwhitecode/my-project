import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './Header.jsx'
import {Footer}  from './Footer.jsx'
import { Home } from './Home/Home.jsx'
import Shop from './Shop/Shop.jsx'
import { Categories } from './Categories/Categories'
import { About } from './About/About.jsx'
import { LogIn } from './Form/LogIn.jsx'

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  const Return = () => {
    return (
      <div >
          <Header openForm={openForm} setIsFormOpen={setIsFormOpen} />
          <main className='w-ful flex flex-col items-center'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />}/>
              <Route path='/categories' element={<Categories />} />
              <Route path='/about' element={<About />}/>
            </Routes>
          </main>
          <Footer />
        </div>
    )
  }

  return (
    <Router>
      
      <Return />
      
    </Router>
  )
}

export default App
