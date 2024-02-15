import React from 'react';
import '../Styles/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoCheckmarkSharp } from "react-icons/io5";

function Price() {
  return (
    <div>
      <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Pricing</h2>
          <p>Halkaan waxaad ka ogaan kartaa qiimayaasha aan uga talo galnay dhammaan cargo adeegyadiisa iyo qiimaha ugu macquulsan</p>
        </div>

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="box">
              <h3>Mogadishu Plan</h3>
              <h4><sup>$</sup>1<span>per KG</span></h4>
              <ul>
                <li><IoCheckmarkSharp/>  Wuxuu Ku Helayaa degdegsiimo</li>
                <li><IoCheckmarkSharp/>   Amaanada Allaabta ku heli karo waa Macquul</li>
                <li><IoCheckmarkSharp/>   Cabashooyinka waan qaadanaynaa</li>
                
              </ul>
              <a href="#" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="box featured">
              <h3>Our Country Plan</h3>
              <h4><sup>$</sup>3<span>per KG</span></h4>
              <ul>
              <li><IoCheckmarkSharp/>   Wuxuu Ku Helayaa degdegsiimo</li>
                <li><IoCheckmarkSharp/>   Amaanada Allaabta ku heli karo waa Macquul</li>
                <li><IoCheckmarkSharp/>   Cabashooyinka waan qaadanaynaa</li>
                
              </ul>
              <a href="#" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div class="box">
              <h3>Africa Plan</h3>
              <h4><sup>$</sup>6<span>per KG</span></h4>
              <ul>
              <li><IoCheckmarkSharp/>   Wuxuu Ku Helayaa degdegsiimo</li>
                <li><IoCheckmarkSharp/>   Amaanada Allaabta ku heli karo waa Macquul</li>
                <li><IoCheckmarkSharp/>   Cabashooyinka waan qaadanaynaa</li>
                
              </ul>
              <a href="#" class="buy-btn">Get Started</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Price
