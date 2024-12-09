import React, { useState, useEffect } from 'react';
import './Menu.css'; // Importiere die CSS-Datei für die Slideshow

const slides = [
  {
    image: 'assets/images/vorspeisen.png',
    text: 'Ohne landestypische Vorspeisen kann man sich die mediterrane Küche nicht vorstellen. Auch wir sind dieser Einstellung und kreieren für Sie eine Vielfalt an typischen Antipastigerichten.',
  },
  {
    image: 'assets/images/salat.png',
    text: 'Für jeden Geschmack und alle Jahreszeiten - bei uns werden Sie auf der Suche nach klassischen und neuen Kreationen gleichermaßen fündig. Ob als erfrischende Beilage oder als sättigende Hauptmahlzeit - frisch und knackig mit hausgemachten Dressingvariationen.',
  },
  {
    image: 'assets/images/Steak.png',
    text: 'Wer auf Steaks besonderer Art steht - nachhaltig, qualitativ hochwertig produziert - ist bei uns richtig. Die perfekte Reifung für Geschmack und Zartheit - eine tolle Kruste, saftig und zart. So sollte ein Steak sein. ',
  },
  {
    image: 'assets/images/nachspeisen.png',
    text: 'Abgerundet wird die mediterrane Küche mit einer Vielfalt an Desserts. Die Nachspeisen entnehmen Sie unserem aktuellen Angebot vor Ort.',
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 30000); // Wechsel alle 30 Sekunden

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="ftco-section" id="menu">
      <div className='container'>
        <div className="slideshow">
          <div
            className="slide"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <a
              href="./assets/speisekarte/Speisekarte.pdf" /* Pfad zur Speisekarte PDF */
              className="menu-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Speisekarte
            </a>
            <div className="slide-text">
              {slides[currentSlide].text}
            </div>
            <div className="slide-controls">
              <button className="control prev" onClick={prevSlide}>‹</button>
              <button className="control next" onClick={nextSlide}>›</button>
            </div>
          </div>
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;



/*

import React from 'react';
import AnimatedSection from './AnimatedSection';

const Menu = () => {
  return (
    <section id='menu' id='' className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section ">
            <span className="subheading">Specialties</span>
            <h2 className="mb-4">Our Menu</h2>
          </div>
        </div>
        <div className="row">
          {/* Breakfast Section 
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Vorspeisen</h3>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/breakfast-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>CARPACCIO DI FILETTO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">16,80€</span>
                    </div>
                  </div>
                  <p>
                    <span>dünne Rinderfiletstreifen</span>, <span>mit Olivenöl-Balsamico</span>, <span>an Kirschtomaten-Rucola und Parmesan</span>, <span>dazu Baguette</span>
                  </p>
                </div>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/breakfast-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>CAPRESE TRADITIONALE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">15,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>original Büffelmozarella</span>, <span>mit frischen Tomaten</span>, <span>Basilikum</span>, <span>dazu Pizzabrot</span>
                  </p>
                </div>
              </div>
              <div className="menus border-bottom-0 d-flex ">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/breakfast-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>BRUSCHETTA POMODORE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">8,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>drei Baguettescheiben</span>, <span>belegt mit Würfeltomaten</span>, <span>in Zwiebel-Knoblauch-Basilikum</span>, <span>zubereitet</span>
                  </p>
                </div>
              </div>
              <span className="flat flaticon-bread" style={{ left: 0 }}></span>
              <span className="flat flaticon-breakfast" style={{ right: 0 }}></span>
            </div>
          </div>

          {/* Lunch Section *
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Vorspeisen</h3>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/lunch-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>VERDURA MEDITERRANE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">8,70€</span>
                    </div>
                  </div>
                  <p>
                    <span>gebratenes</span>, <span>mediterranes</span>, <span>Gemüse</span>, <span>auf Aioli</span>
                  </p>
                </div>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/lunch-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SIGARA BÖREGI</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">8,90€</span>
                    </div>
                  </div>
                  <p>
                    <span>Teigröllchen</span>, <span>gefüllt mit</span>, <span>Schafskäse</span>, <span>an Knoblauchdip</span>
                  </p>
                </div>
              </div>
              <div className="menus border-bottom-0 d-flex ">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/lunch-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>ATMOSPHERA SINFONIA</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">19,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Eine Auswahl</span>, <span>von allen</span>, <span>Vorspeisen</span>, <span>für zwei Personen</span>
                  </p>
                </div>
              </div>
              <span className="flat flaticon-pizza" style={{ left: 0 }}></span>
              <span className="flat flaticon-chicken" style={{ right: 0 }}></span>
            </div>
          </div>

          {/* Dinner Section *
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Pizzen aus dem Steinofen</h3>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>TONNO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Thunfisch</span>, <span>Zwiebeln</span>
                  </p>
                </div>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>PROSCIUTTO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">12€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Vorderschinken</span>
                  </p>
                </div>
              </div>
              <div className="menus border-bottom-0 d-flex ">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>DIAVOLO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>scharfe Salami</span>, <span>Pepperoni</span>, <span>Knoblauch</span>, <span>scharfes Öl</span>
                  </p>
                </div>
              </div>
              <span className="flat flaticon-omelette" style={{ left: 0 }}></span>
              <span className="flat flaticon-burger" style={{ right: 0 }}></span>
            </div>
          </div>

          {/* Desserts Section
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Pasta Speciale</h3>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dessert-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SPAGHETTI AGLIO PEPERONCINO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$15</span>
                    </div>
                  </div>
                  <p>
                    <span>Cocoa</span>, <span>Sugar</span>, <span>Butter</span>, <span>Flour</span>
                  </p>
                </div>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dessert-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Fruit Tart</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$12</span>
                    </div>
                  </div>
                  <p>
                    <span>Fruit</span>, <span>Cream</span>, <span>Pastry</span>
                  </p>
                </div>
              </div>
              <div className="menus border-bottom-0 d-flex ">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dessert-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Cheesecake</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$18</span>
                    </div>
                  </div>
                  <p>
                    <span>Cream Cheese</span>, <span>Sugar</span>, <span>Graham Cracker</span>
                  </p>
                </div>
              </div>
              <span className="flat flaticon-cake" style={{ left: 0 }}></span>
              <span className="flat flaticon-ice-cream" style={{ right: 0 }}></span>
            </div>
          </div>

          {/* Wine Card Section *
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Wine Card</h3>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/wine-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Red Wine</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$45</span>
                    </div>
                  </div>
                  <p>
                    <span>Cabernet</span>, <span>Merlot</span>
                  </p>
                </div>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/wine-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>White Wine</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$40</span>
                    </div>
                  </div>
                  <p>
                    <span>Chardonnay</span>, <span>Sauvignon Blanc</span>
                  </p>
                </div>
              </div>
              <div className="menus border-bottom-0 d-flex ">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/wine-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Rosé Wine</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$35</span>
                    </div>
                  </div>
                  <p>
                    <span>Grenache</span>, <span>Syrah</span>
                  </p>
                </div>
              </div>
              <span className="flat flaticon-wine" style={{ left: 0 }}></span>
              <span className="flat flaticon-wine-glass" style={{ right: 0 }}></span>
            </div>
          </div>

          {/* Drinks & Tea Section 
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Drinks & Tea</h3>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/drink-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Herbal Tea</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$8</span>
                    </div>
                  </div>
                  <p>
                    <span>Herbs</span>, <span>Water</span>
                  </p>
                </div>
              </div>
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/drink-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Coffee</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$5</span>
                    </div>
                  </div>
                  <p>
                    <span>Coffee Beans</span>, <span>Water</span>
                  </p>
                </div>
              </div>
              <div className="menus border-bottom-0 d-flex ">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/drink-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>Fresh Juice</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">$10</span>
                    </div>
                  </div>
                  <p>
                    <span>Fruits</span>, <span>Water</span>
                  </p>
                </div>
              </div>
              <span className="flat flaticon-tea" style={{ left: 0 }}></span>
              <span className="flat flaticon-coffee" style={{ right: 0 }}></span>
            </div>
          </div>*
          {/* Hauptspeisen *
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center ">
                <h3>Pizzen aus dem Steinofen</h3>
              </div>
              {/* TONNO 
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>TONNO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Thunfisch</span>, <span>Zwiebeln</span>
                  </p>
                </div>
              </div>
              {/* PROSCIUTTO 
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>PROSCIUTTO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">12€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Vorderschinken</span>
                  </p>
                </div>
              </div>*
              {/* Weitere Speisen 
              {/* MARGHERITA 
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>MARGHERITA</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">11€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>
                  </p>
                </div>
              </div>*
              {/* SALAMI *
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-4.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SALAMI</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">12€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Salami</span>
                  </p>
                </div>
              </div>
              {/* DEL CONTADINO *
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-5.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>DEL CONTADINO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">14€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>frisches Gemüse</span>, <span>Rucola</span>
                  </p>
                </div>
              </div>
              {/* SOLE *
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-6.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SOLE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Vorderschinken</span>, <span>Ei</span>, <span>Zwiebel</span>
                  </p>
                </div>
              </div>
              {/* QUATTRO FORMAGGI 
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-7.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>QUATTRO FORMAGGI</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>4 Käsesorten</span> (Edamer, Gorgonzola, Mozzarella, Parmesan)
                  </p>
                </div>
              </div>
              {/* FRUTTI DI MARE 
              <div className="menus d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-8.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>FRUTTI DI MARE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">14,90€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Meeresfrüchte</span>, <span>Knoblauch</span>, <span>Zwiebeln</span>
                  </p>
                </div>
              </div>*
              {/* DIAVOLO 
              <div className="menus border-bottom-0 d-flex " data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/dinner-9.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>DIAVOLO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Tomatensoße</span>, <span>Käse</span>, <span>Scharfe Salami</span>, <span>Pépperoni</span>, <span>Knoblauch</span>, <span>scharfes Öl</span>
                  </p>
                </div>
              </div>*
              <span className="flat flaticon-omelette" style={{ left: 0 }}></span>
              <span className="flat flaticon-burger" style={{ right: 0 }}></span>
            </div>
          </div>

          {/* Pasta Section *
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center">
                <h3>PASTA SPECIALE</h3>
              </div>

              {/* SPAGHETTI AGLIO E PEPERONCINO *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SPAGHETTI AGLIO E PEPERONCINO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">11,90€</span>
                    </div>
                  </div>
                  <p>
                    Spaghetti mit <span>Kirschtomaten</span> und <span>Olivenscheiben</span> in <span>Knoblauch-Olivenöl</span> geschwenkt. Auf Wunsch scharf mit <span>Peperoncino</span>.
                  </p>
                </div>
              </div>

              {/* SPAGHETTI MARINARA *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SPAGHETTI MARINARA</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">16,50€</span>
                    </div>
                  </div>
                  <p>
                    Spaghetti mit <span>Meeresfrüchten</span> und <span>Knoblauch</span> in <span>Tomatensauce</span>.
                  </p>
                </div>
              </div>

              {/* SPAGHETTI GAMBERETTI
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>SPAGHETTI GAMBERETTI</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">16,50€</span>
                    </div>
                  </div>
                  <p>
                    Spaghetti mit <span>Garnelen</span>, <span>Kirschtomaten</span> und <span>Knoblauch</span> in <span>Olivenöl</span> geschwenkt im Parmesan-Nest.
                  </p>
                </div>
              </div>*

              {/* TAGLIATELLE SALMONE *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-4.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>TAGLIATELLE SALMONE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">16,50€</span>
                    </div>
                  </div>
                  <p>
                    Frische Bandnudeln mit <span>Lachsstücken</span> und <span>Kirschtomaten</span> in <span>Rosésoße</span>.
                  </p>
                </div>
              </div>

              {/* TAGLIATELLE DUETT (VEGETARISCH) 
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-5.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>TAGLIATELLE DUETT (VEGETARISCH)</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">16,90€</span>
                    </div>
                  </div>
                  <p>
                    Ein Duett aus <span>grünen</span> und <span>weißen Bandnudeln</span> mit <span>Gemüse</span> in <span>Olivenöl</span> geschwenkt, garniert mit <span>Rucola</span> und <span>Parmesan</span>.
                  </p>
                </div>
              </div>*

              {/* PAPPARDELLA SCAMPI
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-6.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>PAPPARDELLA SCAMPI</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">17,50€</span>
                    </div>
                  </div>
                  <p>
                    Breite Bandnudeln mit <span>Garnelen</span> und <span>Kirschtomaten</span> in <span>Weißwein-Tomatensauce</span>.
                  </p>
                </div>
              </div>*

              {/* FAGOTTE PERA 
                <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-7.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>FAGOTTE PERA</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">16,50€</span>
                    </div>
                  </div>
                  <p>
                    Nudeltaschen in Bon-Bon-Form gefüllt mit <span>Birnen-Ricotta</span> in <span>Gorgonzolasoße</span>.
                  </p>
                </div>
              </div>*

              {/* PENNE ALL ARRABIATA 
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-8.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>PENNE ALL ARRABIATA</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">11,90€</span>
                    </div>
                  </div>
                  <p>
                    Rohrnudeln mit <span>Kirschtomaten</span>, <span>Olivenscheiben</span> und <span>Knoblauch</span> in einer pikanten <span>Tomatensauce</span>.
                  </p>
                </div>
              </div>*

              {/* PENNE PASTICCIATI 
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-9.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>PENNE PASTICCIATI</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">12,90€</span>
                    </div>
                  </div>
                  <p>
                    Rohrnudeln mit <span>Schinken</span> und <span>Champignons</span> in <span>Hackfleisch-Sahnesauce</span>.
                  </p>
                </div>
              </div>*

              <div className="heading-menu text-center">
                <h3>AL FORNO (ÜBERBACKEN)</h3>
              </div>

              {/* LASAGNE *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/pasta-10.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>LASAGNE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">13,50€</span>
                    </div>
                  </div>
                  <p>
                    Traditionelle <span>Lasagne</span> mit <span>Hackfleisch</span>, <span>Tomatensauce</span> und <span>Bechamelsauce</span>, überbacken mit <span>Käse</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Salad Section *
          <div className="col-md-6 col-lg-4">
            <div className="menu-wrap">
              <div className="heading-menu text-center">
                <h3>SALATE</h3>
              </div>
              {/* INSALATA PECORINO *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/salad-1.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>INSALATA PECORINO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">11,80€</span>
                    </div>
                  </div>
                  <p>
                    <span>Blattsalate</span>, <span>Tomaten</span>, <span>Gurken</span>, <span>Zwiebeln</span>, <span>Paprika</span>, <span>Oliven</span> und <span>Schafskäse</span>.
                  </p>
                </div>
              </div>
              {/* INSALATA MARE *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/salad-2.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>INSALATA MARE</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">15,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Meeresfrüchte</span> auf <span>Salatbett</span> an <span>Olivenöl-Balsamico-crema</span>.
                  </p>
                </div>
              </div>
              {/* INSALATA CHEF *
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/salad-3.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>INSALATA CHEF</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">12,50€</span>
                    </div>
                  </div>
                  <p>
                    <span>Blattsalat</span>, <span>Tomaten</span>, <span>Gurken</span>, <span>Zwiebeln</span>, <span>Paprika</span>, <span>Oliven</span>, <span>Ei</span>, <span>Vorderschinken</span>, <span>Thunfisch</span> und <span>Käse</span>.
                  </p>
                </div>
              </div>
              {/* INSALATA TONNO 
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/salad-4.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>INSALATA TONNO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">12,00€</span>
                    </div>
                  </div>
                  <p>
                    <span>Blattsalat</span>, <span>Tomaten</span>, <span>Gurken</span>, <span>Zwiebeln</span>, <span>Paprika</span>, <span>Oliven</span> und <span>Thunfisch</span>.
                  </p>
                </div>
              </div>*

              {/* INSALATA POLLO 
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/salad-5.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>INSALATA POLLO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">14,00€</span>
                    </div>
                  </div>
                  <p>
                    Gemischter Salat mit <span>Hähnchenbruststreifen</span>.
                  </p>
                </div>
              </div>*

              {/* INSALATA DI MANZO 
              <div className="menus d-flex" data-animate-effect="fadeIn">
                <div
                  className="menu-img img"
                  style={{ backgroundImage: 'url(assets/images/salad-6.jpg)' }}
                ></div>
                <div className="text">
                  <div className="d-flex">
                    <div className="one-half">
                      <h3>INSALATA DI MANZO</h3>
                    </div>
                    <div className="one-forth">
                      <span className="price">15,50€</span>
                    </div>
                  </div>
                  <p>
                    Gemischter Salat mit <span>Rinderstreifen</span>.
                  </p>
                </div>
              </div>*
              <div className="text-center mt-3">
                <p>Zu allen Salaten bieten wir <span>Senf-</span>, <span>Joghurt-</span> oder <span>Süß-sauer Balsamico-dressing</span> an.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Menu;

*/