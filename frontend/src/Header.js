import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import AnimatedSection from './AnimatedSection';
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import './Header.css'; // Assuming you have your CSS here

const Header = () => {
  return (
    <header className="hero-wrap " style={{overflow: 'hidden'}}>
      <OwlCarousel
        className="home-slider owl-theme"
        items={1}
        loop
        autoplay
        autoplayTimeout={3000}
        smartSpeed={1000}
        animateOut="fadeOut"
        animateIn="fadeIn"
        nav={false}
        dots={true}
      >
        <div
          className="slider-item "
          style={{ backgroundImage: "url(assets/images/bg_1.jpg)" }}
        >
          <div className="overlay"></div>
          <div className="container ">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-12" data-animate-effect="fadeIn">
                <div className="text w-100 mt-5 text-center glass">
                  {/*<span className="subheading">
                    <h2>Culinarium Atmosphera</h2>
                  </span>*/}
                  <h1>Culinarium Atmosphera</h1>
                  {/*<span className="subheading-2">1958</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-item "
          style={{ backgroundImage: "url(assets/images/bg_2.jpg)" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text  align-items-center justify-content-center">
              <div className="col-md-12" data-animate-effect="fadeIn">
                <div className="text w-100 mt-5 text-center glass">
                  {/*<span className="subheading">
                    <h2>Culinarium Atmosphera</h2>
                  </span>*/}
                  <h1>Herzlich Willkommen!</h1>
                  {/*<span className="subheading-2 sub">Food</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </header>
  );
};

export default Header;
