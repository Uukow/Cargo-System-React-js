import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img from '../img/about.jpg'
import Testimonial from './Testimonial';
import { FaCheck } from "react-icons/fa";
import "../Styles/Style.css"

function about() {
  return (
    <div>
    <br></br>
    <br></br>
    <div class="section-title">
          <h2>About</h2>
          <p></p>
        </div>
    
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={img} class="img-fluid" alt=""></img>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3 className='cinwaan'>WE ARE AIR CARGO GLOBAL (ACG) – SOMALIA!</h3>
            <p className='paragraphs'>At Air Cargo Global – Somalia we provide a leading freight service to Somalia which is cost effective and secure, we provide a door to door service to Somalia.</p>
<p className='paragraphs'>
Our company head office is based in London, United Kingdom and Kenya, Nairobi. We have a team of professionals who are dedicated to provide you with a first class freight service to all locations in Somalia.
</p>
<p className='paragraphs'>
Our rates are the cheapest in the UK, USA and Somalia and our prices are inclusive of all customs clearance.
</p>
<p className='paragraphs'>
Rugged and durable, Tomorrow’s Journey is about bringing home a part of the world today.
</p>
<p className='paragraphs'>
Our non-asset based Road network provides you with flexibility, improved service levels, accelerated delivery, reduced direct and indirect costs and much less complexity.</p>

          </div>
        </div>

      </div>
    </section>
    

    {/* <!-- ======= Testimonials Section ======= --> */}
   <Testimonial />
    
    </div>
  )
}

export default about