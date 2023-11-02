import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import LoginPage from './Pages/LoginPage/Login'
import RegisterPage from './Pages/Register'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className='mainSquare'>
        <Header />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
        </Routes>
      </div>
    </AuthProvider>
    
  )
}

export default App
