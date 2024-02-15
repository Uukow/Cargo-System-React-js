import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import '../Styles/Style.css';
// import { Link } from 'react-router-dom';
import himg from '../img/Container ship-rafiki.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  const [scrollableModal, setScrollableModal] = useState(false);
  return (
    <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Uukow Cargo is the Best Cargo For Somalia</h1>
          <h2>We are team of talented Cargo Safity and Praise In Somalia and Also africa</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
          <MDBBtn onClick={() => setScrollableModal(!scrollableModal)}>Get Started</MDBBtn>
            <a href="https://youtu.be/3WN-2evP_w0" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
        <img src={himg} className='img-fluid animated' alt=''></img>
        </div>
      </div>
    </div>

    
    <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>WELCOME TO UUKOW CARGO</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>At Uukow we provide a leading freight service to Somalia which is cost effective and secure. We pride ourselves in providing door to door shipping to Somalia, whether you require air cargo or sea freight for your personnel effects, online shopping, excess baggage, or commercial cargo.</p>
              <p>Our company head office is based in London, United Kingdom and Kenya, Nairobi. We have a team of professionals who are dedicated to provide you with a first class air freight & shipping service to all locations in Somalia.</p>
              <p>Our rates are the cheapest in the UK, USA and Somalia and our prices are inclusive of all customs clearance.</p>
              <p>Rugged and durable, Tomorrow’s Journey is about bringing home a part of the world today.</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    

    
  </section>
  
  );
}

export default HeroSection;