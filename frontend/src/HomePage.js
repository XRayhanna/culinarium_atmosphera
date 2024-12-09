import React from 'react';
import Header from './Header';
import './HomePage.css'; // Importiere dein Stylesheet
import NavSidebar from './NavSidebar';
import Menu from './Menu';
import ReservationForm from './ReservationForm';
import Chefs from './Chefs';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <NavSidebar />
      <Header />
      <Menu />
      <ReservationForm />
      <Chefs />
      <Footer />
    </div>
  );
};

export default HomePage;
