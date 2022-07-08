import React, { createContext, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Errorpage from './components/Errorpage';
import Footer from './components/Footer';
import Logout from './components/Logout';
import { initialState, reducer } from "../src/reducer/UserReducer";

export const UserContext = createContext();

const Routing = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<Logout />} />



      <Route path="*" element={<Errorpage />} />

    </Routes>
  )

}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <>

      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
        <Footer />
      </UserContext.Provider>

    </>
  )
}

export default App