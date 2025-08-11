
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import logo from "./assets/profile.jpg"
export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light px-4 mb-4">
        <Link className="navbar-brand" to="/">
         <img src={logo} alt="Logo" style={{ height: '40px' ,borderRadius:"50%"}} />
          Expense Tracker 
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="bg-light text-center py-3 mt-5 border-top">
        <p className="mb-0 small text-muted">
          © {new Date().getFullYear()}| surafel  Expense Tracker. Built with  using React, TypeScript, Tailwind, Bootstrap, and Sass.
        </p>
      </footer>
    </BrowserRouter>
  )
}
