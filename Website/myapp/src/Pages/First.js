import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style.css'
import { Helmet } from 'react-helmet'
import Swiper from 'swiper/bundle'
import total_lunar from '../img/total_lunar.png'
import total_solar from '../img/total_solar.png'
import v2 from '../img/v2.mp4'



function First() {
    

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // when window width is >=600px
        breakpoints: {
            600: {
                slidesPerView: 2,
            }
        }
    });
// change navbar styles on scroll
document.addEventListener("DOMContentLoaded", function () {
    // Your code here



// console.log(document.querySelector('nav')); // Debugging line
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})



// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } 
        else {
            icon.className = "uil uil-plus";
        }
    })
})



//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)
})

    return (
        <div>
            <Helmet>

{/* <!-- ICONSCOUT CDN--> */}
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"/>

    {/* <!-- GOOGLE FONTS (MONTSERRAT)--> */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

                {/* <!--SWIPER JS--> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

            </Helmet>
            
                            <nav>
                                <div className="container nav__container">

                                <NavLink to="/first"><h2>Eclipses: Perspective is Everything</h2></NavLink>

                                    <ul className="nav__menu" style={{justifyContent: 'end'}}>
                                        <li><NavLink to="/first">Home</NavLink></li>
                                        <li><NavLink to="/second">Types</NavLink></li>
                                        <li><NavLink to="/login">Login</NavLink></li>
                                        <li><NavLink to="/signup">Signup</NavLink></li>
                                    </ul>
                                    <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
                                    <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
                                </div>
                            </nav>
                            {/* <!-- ----------------------------------- END OF NAVBAR ----------------------------------------- --> */}










                            <header>
                                <div className="container header__container">
                                    <div className="header__left">
                                        <h1>Let's Explore Eclipse....!</h1>
                                        <p>
                                            An eclipse is a celestial event in which one astronomical object moves into the shadow of another object, causing a temporary reduction in the light received by an observer. There are two main types of eclipses: solar eclipses and lunar eclipses.
                                        </p>
                                        <NavLink to='/four' className="btn btn-primary">Get Started</NavLink>
                                    </div>

                                    <div className="header__right">
                                        <div className="header__right-image">
                                            <video controls>
                                                <source src={v2} type='video/mp4'/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            {/* <!-- ----------------------------------- END OF HEADER ----------------------------------------- --> */}










                            <section className="courses">
                                <h2>Types of Eclipses</h2>
                                <div className="container courses__container">
                                    <article className="course">
                                        <div className="course__image">
                                            <img src={total_solar} style={{height: '350px', width: '560px'}}/>
                                        </div><br></br>
                                            <div className="course_info">
                                                <h4>Solar Eclipse</h4><br></br>
                                                    <NavLink to='/second' className="btn btn-primary">Learn More</NavLink>
                                            </div>
                                    </article>

                                    <article className="course">
                                        <div className="course__image">
                                            <img src={total_lunar} style={{height: '350px', width: '560px;'}}/>
                                        </div><br></br>
                                            <div className="course_info">
                                                <h4>Lunar Eclipse</h4><br></br>
                                                <NavLink to='/second' className="btn btn-primary">Learn More</NavLink>
                                            </div>
                                    </article>


                                </div>
                            </section>
                            {/* <!-- ----------------------------------- END OF COURSES ----------------------------------------- --> */}







                            <section className="faqs">
                                <h2>Frequently Asked Quetions</h2>
                                <div className="container faqs__container">
                                    <article className="faq">
                                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                                        <div className="question__answer">
                                            <h4>How do eclipses occur?</h4>
                                            <p>
                                                Eclipses occur when one celestial body moves into the shadow of another celestial body. The specific conditions that lead to eclipses depend on whether it's a solar eclipse or a lunar eclipse.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="faq">
                                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                                        <div className="question__answer">
                                            <h4>Why only some people can see an eclipse at a time?</h4>
                                            <p>

                                                Not everyone on Earth sees an eclipse at a given time because eclipses are highly location-specific and dependent on the relative positions of the Earth, the Moon, and the Sun. Several factors contribute to why only certain regions or people can witness an eclipse:Alignment of Celestial Bodies, Umbra and Penumbra, Path of Totality, Lunar or Solar Elevation, Geographical Location, and Time of year.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="faq">
                                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                                        <div className="question__answer">
                                            <h4>What causes the Sun, Moon, and Earth to align?</h4>
                                            <p>
                                                The alignment of the Sun, Moon, and Earth in a straight line, known as a "syzygy," occurs primarily due to the gravitational interactions between these celestial bodies. When the Moon orbits the Earth, its position in the sky relative to the Sun and Earth can vary. During a new moon or full moon phase, the Sun, Earth, and Moon can align approximately in a straight line, causing phenomena like solar and lunar eclipses.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="faq">
                                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                                        <div className="question__answer">
                                            <h4>How often do eclipses occur?</h4>
                                            <p>
                                                Eclipses are not evenly distributed throughout the year, and their frequency depends on the type of eclipse (solar or lunar) and other factors.On average, there are between 2 to 5 solar eclipses visible from some part of the Earth each year and on average, there are 2 to 4 lunar eclipses each year, and they can be observed from anywhere on the night side of Earth where the Moon is above the horizon.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="faq">
                                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                                        <div className="question__answer">
                                            <h4>How scientist know when and where eclipse occur?</h4>
                                            <p>
                                                Scientists can predict when and where eclipses will occur through a combination of mathematical calculations, observations, and the understanding of the celestial mechanics of the Earth, Moon, and Sun.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="faq">
                                        <div className="faq__icon"><i className="uil uil-plus"></i></div>
                                        <div className="question__answer">
                                            <h4>What is difference between lunar and solar eclipse?</h4>
                                            <p>
                                                Lunar and solar eclipses are two distinct celestial events that differ in terms of what is being obscured, the positions of the Earth, Moon, and Sun, and the way they appear from Earth.
                                            </p>
                                        </div>
                                    </article>







                                </div>
                            </section>
                            {/* <!-- ----------------------------------- END OF FAQs ----------------------------------------- --> */}








                            <section className="container testimonials__container mySwiper">
                                <h2>Launched Rockets</h2>
                                <div className="swiper-wrapper">
                                    <article className="testimonial swiper-slide">
                                        <div className="avatar">
                                            <img src="gslv1.jpeg"/>
                                        </div>
                                        <div className="testimonials__info">
                                            <h4>GSLV</h4>
                                            <small>Geosynchronous Satellite Launch Vehicle</small>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>
                                                Geosynchronous Satellite Launch Vehicle (GSLV) is a space launch vehicle designed, developed, and operated by the Indian Space Research Organization (ISRO) to launch satellites and other space objects into Geosynchronous Transfer Orbits.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="testimonial swiper-slide">
                                        <div className="avatar">
                                            <img src="pslv.jpg"/>
                                        </div>
                                        <div className="testimonials__info">
                                            <h4>PSLV</h4>
                                            <small>Polar Satellite Launch Vehicle</small>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>
                                                Polar Satellite Launch Vehicle (PSLV) is an expendable medium-lift launch vehicle designed and operated by ISRO. It was developed to allow India to launch its Indian Remote Sensing satellites into sun-synchronous orbits, a service that was, only commercially available from Russia.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="testimonial swiper-slide">
                                        <div className="avatar">
                                            <img src="aslv.jpg"/>
                                        </div>
                                        <div className="testimonials__info">
                                            <h4>ASLV</h4>
                                            <small>Augmented Satellite Launch Vehicle</small>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>
                                                Augmented Satellite Launch Vehicle or Advanced Satellite Launch Vehicle, also known as ASLV, was a small-lift launch vehicle five-stage solid-fuel rocket developed by the Indian Space Research Organisation (ISRO) to place 150 kg satellites into LEO.
                                            </p>
                                        </div>
                                    </article>

                                    <article className="testimonial swiper-slide">
                                        <div className="avatar">
                                            <img src="atlast.jpg"/>
                                        </div>
                                        <div className="testimonials__info">
                                            <h4>ATLAST S</h4>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>
                                                Atlas is a family of US missiles and space launch vehicles that originated with the SM-65 Atlas. The Atlas intercontinental ballistic missile (ICBM) program was initiated in the late 1950s under the Convair Division of General Dynamics. Atlas was a liquid propellant rocket burning RP-1 fuel with liquid oxygen
                                            </p>
                                        </div>
                                    </article>

                                    <article className="testimonial swiper-slide">
                                        <div className="avatar">
                                            <img src="delta1.jpeg"/>
                                        </div>
                                        <div className="testimonials__info">
                                            <h4>DELTA IV</h4>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>
                                                Delta IV is a group of five expendable launch systems in the Delta rocket family introduced in the early 2000s. Originally designed by Boeing's Defense, Space and Security division for the Evolved Expendable Launch Vehicle program, the Delta IV became a United Launch Alliance (ULA) product in 2006.
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className="swiper-pagination"></div>
                            </section>
                            {/* <!-- ----------------------------------- END OF TESTIMONIALS ----------------------------------------- --> */}






                            <footer>
                                <div className="container footer__container">
                                    <div className="footer__1">
                                        <a href="index.html" className="footer__logo"><h4>GO TO Space</h4></a>
                                        <p>
                                            A-403, Shivalik Arcade
                                            <br></br>Satellite,Ahmedabad.
                                        </p>
                                    </div>

                                    <div className="footer__2">
                                        <h4>Permalinks</h4>
                                        <ul className="permalinks">
                                            <li><NavLink to='/first'>Home</NavLink></li>
                                            <li><NavLink to='/second'>Types</NavLink></li>
                                            <li><NavLink to='/third'>Game</NavLink></li>
                                            <li><NavLink to='/four'>Contact</NavLink></li>
                                        </ul>
                                    </div>

                                    <div className="footer__3">
                                        <h4>Privacy</h4>
                                        <ul className="privacy">
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms and Condition</a></li>
                                            <li><a href="#">Refund Policy</a></li>
                                        </ul>
                                    </div>

                                    <div className="footer__4">
                                        <h4>Contact Us</h4>
                                        <div>
                                            <p>+91 9884536521</p>
                                            <p>gotospace21@gmail.com</p>
                                        </div>

                                        <ul className="footer__socials">
                                            <li>
                                                <a href="#"><i className="uil uil-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="uil uil-instagram-alt"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="uil uil-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="uil uil-linkedin-alt"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="footer__copyright">
                                    <small>Copyright &copy; EGATOR YouTube Tutorial</small>
                                </div>
                            </footer>
                        </div>
                        )
}

                        export default First














