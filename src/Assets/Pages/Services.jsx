import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../img/1.jpg';
import two from '../img/2.jpg';
import three from '../img/3.jpg';
import four from '../img/4.jpg';
import '../Styles/Style.css';
import { FaClock, FaShieldVirus } from "react-icons/fa";
import "../Styles/Style.css";


function Services() {
  return (
    <div>
      <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Uukow Cargo waxa uu ku suntanyahay Adeeg iyo amaano taasi oo aan dheernahay cargo-ada kale ee dhigeena ah sidoo kale alaabtaada waxay kugu tagaysaa waqtigii aan ku balanay ayada oo aan balan dhaca aan aynaan astaan ku ahayn hadaba ka dhigo wehelkaaga Uukow Cargo markasta iyo Meelkasta Oo Aad ka Joogtid Somalia ama Africa</p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <img src={one} className='ser-img'></img>
              <h4>TURKEY TO SOMALIA</h4>
              <p>At Uukow Cargo – Somalia we have a dedicated professional team who will collect from any location UK mainland and Ireland. We also collect from the following cities London, Southampton, Aberdeen, Edinburgh, Glasgow,</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
            <img src={two} className='ser-img'></img>
              <h4><a href="">COLLECTION SERVICE TO SOMALIA</a></h4>
              <p>At Uukow Cargo – Somalia we have a dedicated professional team who will collect from any location UK mainland and Ireland. We also collect from the following cities London, Southampton, Aberdeen, Edinburgh, Glasgow,</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
            <img src={three} className='ser-img'></img>
              <h4><a href="">CUSTOMS CLEARANCE</a></h4>
              <p>At Uukow Cargo – Somalia we believe our customers should not have to be concerned with complicated customs clearance paper work. We have a team of professionals dedicated to make sure all you customs clearance paper work</p>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
            <img src={four} className='ser-img'></img>
              <h4><a href="">SHIPPING TO SOMALIA</a></h4>
              <p>We at Uukow Cargo – Somalia can help you with cargo shipment on any amount of weight. Whether you have a large weekly shipment from the UK to Somalia or looking to start up a business to import to Somalia.</p>
            </div>
          </div>

        </div>

      </div>
      <br />
      <br />
      <br />

      <div className='container'>
        <div className='row gx-5'>
          <div className='col-4'>
            <div className='row'>
              <div className='col'>
              <div className='Icon'>
              <i class="fa-solid fa-clock-nine"><FaClock /> </i>
              </div>
                
              </div>
            </div>
            <br />
            <h2 className='tiitle'>FAST DELIVERY</h2>
            <p className='paragraph'>You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing.</p>
          </div>
          <div className='col-4'>
            <div className='row'>
              <div className='col'>
              <div className='Icon'>
              <i class="fa-regular fa-shield-check"> <FaShieldVirus /></i>
              </div>
                
              </div>
            </div>
            <br />
            <h2 className='tiitle'>SAFE & SECURE</h2>
            <p className='paragraph'>You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world’s biggest corporations.</p>
          </div>
          <div className='col-4'>
            <div className='row'>
              <div className='col'>
              <div className='Icon'>
              <i class="fa-solid fa-phone-volume"></i>
              </div>
                
              </div>
            </div>
            <br />
            <h2 className='tiitle'>24/7 SUPPORT</h2>
            <p className='paragraph'>All of which explains why you’ll find the team of outstanding support at TransCargo ready to apply their passion for solutions in support of your business.</p>
          </div>
        </div>
        <br />
        <br />

        {/* Counters */}
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-2'>
          <div class="icon icon-shape icon-shape-primary rounded-circle me-2 me-md-0 mb-2">
            <span className='far'><i class="fa-solid fa-globe"></i></span>
          </div>
            <span class="counter display-3 d-block">610</span>
            <span class="h5">Clients World</span>
          </div>
          <div className='col-2'>
          <div class="icon icon-shape icon-shape-primary rounded-circle me-2 me-md-0 mb-2">
          <span className='far'><i class="fa-solid fa-truck"></i></span>
          </div>
            <span class="counter display-3 d-block">25</span>
            <span class="h5">Owned Vehicles</span>
          </div>
          <div className='col-2'>
          <div class="icon icon-shape icon-shape-primary rounded-circle me-2 me-md-0 mb-2">
          <span className='far'><i class="fa-solid fa-users"></i></span>
          </div>
            <span class="counter display-3 d-block">5</span>
            <span class="h5">People in Team</span>
          </div>
          <div className='col-2'>
          <div class="icon icon-shape icon-shape-primary rounded-circle me-2 me-md-0 mb-2">
          <span className='far'><i class="fa-solid fa-dolly"></i></span>
          </div>
            <span class="counter display-3 d-block">1519</span>
            <span class="h5">Parcels Delivered</span>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services
