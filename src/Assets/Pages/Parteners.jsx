import React from 'react';
import '../Styles/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import par1 from '../img/clients/client-1.png';
import par2 from '../img/clients/client-2.png';
import par3 from '../img/clients/client-3.png';
import par4 from '../img/clients/client-4.png';
import par5 from '../img/clients/client-5.png';
import par6 from '../img/clients/client-6.png';


function Products() {
  return (
    <div>
      
      <section id="clients" class="clients section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Parteners</h2>
        </div>

        <div class="row" data-aos="zoom-in">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={par1}></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={par2}></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={par3}></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={par4}></img>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={par5}></img>
          </div>
          

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={par6}></img>
          </div>

        </div>

      </div>
    </section>

    </div>
  )
}

export default Products
