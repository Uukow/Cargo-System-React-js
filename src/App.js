// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './Assets/Pages/Home';
import Navbar from './Assets/Pages/Navbar';
import Testimonials from './Assets/Pages/Testimonial';
import Services from './Assets/Pages/Services';
import Price from './Assets/Pages/Price';
import Team from './Assets/Pages/Team';
import Products from './Assets/Pages/Parteners';
import Forms from './Assets/Pages/Form';
import Footer from './Assets/Pages/footer';
import Register from './Assets/Pages/Register';
// import Dashboard from './Dashboard';
import Form from './Assets/Form/Login';
import About from './Assets/Pages/about';
import RegistrationForm from './Assets/Pages/regisrationFormHandle';
import Employees from './Assets/Pages/Employees';
import Dashboar from './Assets/Pages/Dashboar';

// import Form from './Assets/Form/Login';
// import Testimonial from './Assets/Testimonial';
// import { Link } from 'react-router';


function App() {
  return (

    
    <div className="App">
    {/* <Testimonial /> */}
      {/* <Form /> */}
      <Navbar />
      


      

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services'  element={<Services/>}/>
        <Route path='/Price'  element={<Price/>}/>
        <Route path='/Team'  element={<Team/>}/>
        <Route path='/Parteners'  element={<Products/>}/>
        <Route path='/Testimonials'  element={<Testimonials/>}/>
        <Route path='/Form'  element={<Form/>}/>
        <Route path='/Forms'  element={<Forms/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Forms' element={<Forms/>}/>
        <Route path='/RegistrationForm' element={<RegistrationForm/>}/>
        <Route path='/Employees' element={<Employees/>}/>
        <Route path='/Dashboar' element={<Dashboar/>}/>
        
      </Routes>
      {/* <HeroSection />
      <Services />
      <Price />
      <Team />
      <Products />
      <Forms /> */}
      <Footer />
    
    
    
      
    </div>
  );
}

export default App;
