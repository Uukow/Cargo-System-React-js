import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import team1 from '../img/team/team-1.jpg';
import team2 from '../img/team/team-2.jpg';
import team3 from '../img/team/team-3.jpg';
import team4 from '../img/team/team-4.jpg';
import team5 from '../img/team/team-5.jpg';
import { BsFacebook } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";


function Team() {
  return (
    <div>

    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Waxaan Projectgaan ku samaynay Team GROUP-4 Waxayna ku qabteen waqtigii loogu talo galay hadaba Halkaan Hoose kala soo xiriir</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"> 
              
              <img src={team1} class="img-fluid" alt=""></img>

              </div>
              <div class="member-info">
                <h4>Abdulkadir Uukow</h4>
                <span>Chief Executive Officer <span className='CEO'>( CEO )</span></span>
                <p>Maamulaha Guud ee Uukow Cargo sidoo kalena waa Front-End iyo Back-End Web Developer</p>
                <div class="social">
                <div className='AllIcons'><a href="https://www.facebook.com/Uukow2017"><FaFacebook /></a></div>
                <div className='AllIcons'><a href="https://twitter.com/AbdulkadirUukow"><FaTwitter /></a></div>
                <div className='AllIcons'><a href="https://www.instagram.com/uukow_media/"><FaInstagram /></a></div>
                <div className='AllIcons'><a href="https://github.com/uukow"><FaGithub /></a></div>
                <div className='AllIcons'><a href="https://wa.link/pyio3o"><FaWhatsapp /></a></div>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic">
              <img src={team2} class="img-fluid" alt="" style={{width: "80px"}}></img>

              </div>
              <div class="member-info">
                <h4>Farhan Daahir Ali</h4>
                <span>Product Manager <span className='CEO'>( PM )</span></span>
                <p>Waa Madaxa Productska Cargo waana Xubin Muhiim ah oo ka tirsan Uukow Cargo</p>
                <div class="social">
                <div className='AllIcons'><a href=""><FaFacebook /></a></div>
                <div className='AllIcons'><a href=""><FaTwitter /></a></div>
                <div className='AllIcons'><a href=""><FaInstagram /></a></div>
                <div className='AllIcons'><a href=""><FaWhatsapp /></a></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div class="pic">
              <img src={team3} class="img-fluid" alt=""></img>

              </div>
              <div class="member-info">
                <h4>Abdirahman Yusuf Esse</h4>
                <span>Cheif Of Marketing</span>
                <p>Waa Madaxa Suuq Gaynta Ee Uukow Cargo waana Xubin Aad Muhiim u ah</p>
                <div class="social">
                <div className='AllIcons'><a href=""><FaFacebook /></a></div>
                <div className='AllIcons'><a href=""><FaTwitter /></a></div>
                <div className='AllIcons'><a href=""><FaInstagram /></a></div>
                <div className='AllIcons'><a href=""><FaGithub /></a></div>
                <div className='AllIcons'><a href=""><FaWhatsapp /></a></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src={team4} class="img-fluid" alt="" width={"100px"}></img></div>
              <div class="member-info">

                <h4>Abdullahi Mascuud Abdullahi</h4>
                <span>Accountant</span>
                <p>Xisaabiyaha Guud Ee Uukow Cargo Waana Xubin aad muhiim u ah</p>
                <div class="social">
                <div className='AllIcons'><a href="https://www.facebook.com/Cabdullaahi.mascuudjr?mibextid=ZbWKwL "><FaFacebook /></a></div>
                <div className='AllIcons'><a href="https://instagram.com/niinii_nakupenda?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram /></a></div>
                <div className='AllIcons'><a href="https://github.com/EngAbdullaahiMascuud"><FaGithub /></a></div>
                <div className='AllIcons'><a href="http://Wa.me//252615268691"><FaWhatsapp /></a></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 mt-4"></div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div class="pic"><img src={team5} class="img-fluid" alt=""></img></div>
              <div class="member-info">
                <h4>Mohamed Ibrahim</h4>
                <span>Marketing</span>
                <p>Waa Suuq geeyaha Company-ga Wuxuu Qaabilsanyahay Dhankaa Digital Marketing-ka</p>
                <div class="social">
                <div className='AllIcons'><a href="https://www.facebook.com/Cabdullaahi.mascuudjr?mibextid=ZbWKwL "><FaFacebook /></a></div>
                <div className='AllIcons'><a href="https://instagram.com/niinii_nakupenda?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram /></a></div>
                <div className='AllIcons'><a href="https://github.com/EngAbdullaahiMascuud"><FaGithub /></a></div>
                <div className='AllIcons'><a href="http://Wa.me//252615268691"><FaWhatsapp /></a></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Team
