import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './pages/Home'
import About from './pages/About'
import logo from "./assets/profile.jpg"

function Navbar() {
  const navigate = useNavigate();

  const handleNavClick = (path:string) => {
    navigate(path);
    const bsCollapse = document.getElementById('navbarNav');
    if (bsCollapse && bsCollapse.classList.contains('show')) {
      new window.bootstrap.Collapse(bsCollapse).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light px-4 mb-4 shadow-sm">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <span className="fw-bold">Expense Tracker</span>
        </Link>

        {/* Links for md and larger screens */}
        <ul className="navbar-nav d-none d-md-flex mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>

        {/* Hamburger toggle for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsed menu for small screens */}
        <div className="collapse navbar-collapse bg-light p-3 rounded" id="navbarNav">
          <ul className="navbar-nav text-center d-md-none">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('/')}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('/about')}>
                About
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="bg-light text-center py-3 mt-5 border-top">
        <p className="mb-0 small text-muted">
          © {new Date().getFullYear()} | Surafel Mengist
        </p>
      </footer>
    </BrowserRouter>
  )
}


