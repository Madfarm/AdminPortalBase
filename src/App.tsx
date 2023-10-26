import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/Register'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
      </Routes>
    </AuthProvider>
    
  )
}

export default App
