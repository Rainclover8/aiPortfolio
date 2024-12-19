import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Admin from './pages/Admin'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
