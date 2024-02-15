import React from 'react'
import "../Styles/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp ,FaGoogle} from "react-icons/fa";

function footer() {
  return (
    <div>

<footer class="text-center text-lg-start ">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>


    {/* <!-- Right --> */}
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab "><FaFacebook /></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab "><FaTwitter /></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab "><FaWhatsapp /></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab "><FaInstagram /></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedins"><FaLinkedin /></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-githubs"><FaGithub /></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Uukow Cargo
          </h6>
          <p>
            Uukow Cargo waa cargoga ugu tayada iyo ammaanada wanaagsan Gayigeena somalia ugu imow Adeeg iyo ammaaano sareysa
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!">Dry storage container</a>
          </p>
          <p>
            <a href="#!">Flat rack container</a>
          </p>
          <p>
            <a href="#!">Open top container</a>
          </p>
          <p>
            <a href="#!">Tunnel container</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" >Home</a>
          </p>
          <p>
            <a href="#!">Services</a>
          </p>
          <p>
            <a href="#!">Price</a>
          </p>
          <p>
            <a href="#!">Team</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Wadajir, Mogadishu, Somalia</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@Uukow.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 252 615 031623</p>
          <p><i class="fas fa-print me-3"></i> + 252 617 119990</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  <hr></hr>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className='Copyrgiht' class="text-center p-4" >
    © 2023 Copyright:
    <a class="uukow fw-bold" href="https://uukow.com/"> Uukow Cargo</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
    
    
    </div>
  )
}

export default footer