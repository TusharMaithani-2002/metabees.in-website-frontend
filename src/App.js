import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Pricing from './pages/Pricing'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
