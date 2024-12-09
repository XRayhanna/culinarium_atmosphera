import React from 'react';

const Chefs = () => {
  return (
    <section id='chefs' className="ftco-section ftco-no-pt ftco-no-pb">
    <div className="container"  style={{marginTop: '100px'}}>
      <div className="row d-flex">
        <div className="col-md-6 d-flex">
          <div 
            className="img img-2 w-100 mr-md-2" 
            style={{ backgroundImage: 'url(./assets/images/ercument.jpg)', maxWidth:'auto', 
            }}
            alt="Ercümert"
          ></div>
        </div>
        <div className="col-md-6 makereservation p-4 p-md-5 glass" data-animate-effect="fadeIn">
          <div className="heading-section mb-5">
            <span className="subheading">Ercümert Alkoyun</span>
            <h2 className="mb-4">Motto: Immer eine Idee voraus, immer einen Geschmack besser</h2>
            <p style={{ color: 'white' }}>Herzlich willkommen im Restaurant „Culinarium Atmosphera“! Atmosphera ist mittlerweile ein fester Name in der Gastronomie für mediterrane Küche in unserer Region und darüber hinaus. Unser neu eingerichtetes Lokal liegt in Steinbach am Wald, umgeben von einer wunderschönen Naturkulisse und ist der Ausgangspunkt vieler Wanderwege durch die Rennsteigregion. Wir bieten unseren Gästen ein ansprechendes, modernes und zeitgemäßes Ambiente. Bei uns soll „Essen“ Freude bereiten. Aus frischen Produkten mit großer Vielfalt der Natur, bester Qualität und schonender Zubereitung kreieren wir mit viel Liebe zum Detail eine abwechslungsreiche mediterrane und fränkische Küche auf gehobenem Niveau. Unter meiner Leitung hat unsere Küche einen Anspruch: Die Leidenschaft für hochwertige regionale und mediterrane Produkte sowie das kulinarische Glück unserer Gäste. Mit meinem Team freue ich mich weiterhin auf Ihren Besuch und heiße alle ganz herzlich Willkommen bei Freunden.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="container" style={{marginTop: '100px'}}>
      <div className="row d-flex d-flex-reverse">
        <div className="col-md-6 makereservation p-4 p-md-5 glass" data-animate-effect="fadeIn">
          <div className="heading-section mb-5">
            <span className="subheading">Kerstin Rentsch</span>
            <h2 className="mb-4">Motto: Traditionen und Brauchtum pflegen, Heimatrezepte mit regionalen Zutaten frisch zubereiten und Gesundes genießen.</h2>
            <p style={{ color: 'white' }}>… bin ich eng mit ihren Rezepten, Bräuchen und Traditionen verbunden. In den letzten 15 Jahren habe ich mich als Kochbuchautorin im Eigenverlag betätigt, bin eine ausgebildete Genussbotschafterin der Genussregion Oberfranken und habe als Dozentin für Koch- und Backkurse in der kulmbacher Kochschule gearbeitet. Bereits vor 36 Jahren habe ich meine Ausbildung am Gasthof-Pension-Metzgerei Söllner in Kleintettau abgeschlossen und dabei erkannt, dass mir die Gastronomie und das Bewirten von Gästen ebenso faszinieren wie meine Leidenschaft für das Kochen mit hochwertigen Zutaten und die Liebe zur Heimatküche mit all ihren alten Rezepten und Traditionen. Seit 14 Jahren habe ich die Ehre, meine Heimat Oberfranken und ihre kulinarischen Besonderheiten zu repräsentieren und allen Besuchern, Gästen und Genießern schmackhaft zu machen. Diese Tätigkeit übe ich bis heute mit unvermindertem Enthusiasmus und Leidenschaft aus, stets nach meinem Motto: „Traditionen und Brauchtum pflegen, Heimatrezepte mit regionalen Zutaten frisch zubereiten und Gesundes genießen“.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div 
            className="img img-2 w-100 mr-md-2" 
            style={{ backgroundImage: 'url(./assets/images/kerstin.jpg)', maxWidth:'auto', }}
            alt="Kerstin"
          ></div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Chefs;
