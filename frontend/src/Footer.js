import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer id='contact' className="ftco-footer ftco-no-pb ftco-section" style={{marginTop: '100px'}}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Anschrift</h2>
                <p>Edwin-Trebes Straße 2</p>
                <p>96361 Steinbach am Wald</p>
                <p>Telefon: +49 9263 992 86 99</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                  <li className=""> <a href="#"><FaFacebook size={40} color="#3b5998" /></a></li>
                  <li className=""> <a href="#"><FaInstagram size={40} color="#E4405F" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Öffnungszeiten</h2>
                <ul className="list-unstyled open-hours">
                  <li className="d-flex"><span>Montag</span><span>Ruhetag</span></li>
                  <li className="d-flex"><span>Dienstag</span><span>11:00 - 13:00 Mittagstisch</span> <span>17:00 - 21:30 Abendkarte</span></li>
                  <li className="d-flex"><span>Mittwoch</span><span>11:00 - 13:00 Mittagstisch</span> <span>17:00 - 21:30 Abendkarte</span></li>
                  <li className="d-flex"><span>Donnerstag</span><span>11:00 - 13:00 Mittagstisch</span> <span>17:00 - 21:30 Abendkarte</span></li>
                  <li className="d-flex"><span>Freitag</span><span>11:00 - 13:00 Mittagstisch</span> <span>17:00 - 21:30 Abendkarte</span></li>
                  <li className="d-flex"><span>Samstag</span><span>11:00 - 13:00 Mittagstisch</span> <span>17:00 - 21:30 Abendkarte</span></li>
                  <li className="d-flex"><span>Sonntag</span><span>11:00 - 13:00 Mittagstisch</span> <span>17:00 - 21:30 Abendkarte</span></li>
                  <li className="d-flex"><span>Samstag + Sonntag + Feiertage ab 14:00 Uhr Kaffee und hausgebackene Kuchen</span></li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Anfahrtskarte</h2>
                <div className="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.0669615799648!2d11.37043507751863!3d50.43985338812543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a160969e2aa391%3A0x24c5baf3f18e3769!2sEdwin-Trebes-Stra%C3%9Fe%202%2C%2096361%20Steinbach%20am%20Wald!5e0!3m2!1sde!2sde!4v1724831107990!5m2!1sde!2sde"
                    width="100%" height="200" allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Closing the container div */}
        <div className="container-fluid px-0 bg-primary py-3">
          <div className="row no-gutters">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                Impressum<br></br>
                © <script>document.write(new Date().getFullYear());</script> Culinarium Atmosphera
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
