import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
