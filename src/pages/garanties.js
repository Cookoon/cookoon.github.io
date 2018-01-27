import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';
import Faq from '../components/Faq';
import logoAxa from '../images/logoAxa.png';

const InsurancePage = () => (
  <div>
    <Helmet title="Garanties" />
    <Banner>
      <div className="row">
        <div className="col-md-9 d-flex align-items-center">
          <h1 className="h4 font-weight-light mb-4 mb-md-0">
            Votre assurance incluse
            <br />à chaque location grâce à notre partenaire
          </h1>
        </div>
        <div className="col-md-3 d-flex justify-content-center justify-content-md-start align-items-center">
          <img src={logoAxa} alt="Axa" className="w-6r" />
        </div>
      </div>
    </Banner>
    <div className="bg-primary text-white">
      <div className="container">
        <h2 className="h3 text-center pt-5 mb-5">
          Vous êtes immédiatement assuré
        </h2>

        <div className="row pb-3">
          <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
            <div className="row text-center">
              <div className="col-sm">
                <i className="co co-stain fa-3x" aria-hidden="true" />
                <p className="mt-2">Un verre de vin renversé ?</p>
              </div>

              <div className="col-sm">
                <i className="co co-broken-door fa-3x" aria-hidden="true" />
                <p className="mt-2">Une porte de placard endommagée ?</p>
              </div>

              <div className="col-sm">
                <i className="co co-fire fa-3x" aria-hidden="true" />
                <p className="mt-2">Un incendit ou un dégât des eaux ?</p>
              </div>

              <div className="col-sm">
                <i className="co co-lost fa-3x" aria-hidden="true" />
                <p className="mt-2">Un objet qui disparaît ?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md p-4">
            Même lorsque l'on est précautionneux, des accidents peuvent arriver.
            Afin de protéger et de rassurer les hôtes, Cookoon et AXA ont mis en
            place une solution d'assurance dédiée qui couvre les biens
            immobiliers et mobiliers durant les occupations.
          </div>

          <div className="col-md p-4">
            Cookoon et AXA proposent donc cette solution d'assurance
            automatiquement incluse, valable pour toutes les réservations
            réalisées via la plateforme, dans la limite des conditions prévues
            au contrat. Les membres de la communauté éviteront ainsi une
            situation embarrassante ou coûteuse.
          </div>
        </div>
      </div>
    </div>
    <div className="container faq-container">
      <h2 className="h3 text-center pt-5 mb-5">Questions fréquentes</h2>
      <Faq />
    </div>
    <div className="bg-white py-5">
      <div className="container d-flex align-items-center">
        <i className="co co-check fa-3x text-primary mx-3" aria-hidden="true" />
        <p className="mb-0">
          Les informations ci-dessus sont non contractuelles, pour toute
          information supplémentaire, merci de consulter les{' '}
          <a
            href="https://drive.google.com/open?id=1YSDLo0SK3z9Yf0lLvoSO7KCp6Jv7OGnO"
            target="_blank"
          >
            conditions générales
          </a>{' '}
          et les{' '}
          <a
            href="https://drive.google.com/open?id=1HxostqQkQs0FxH9a4-aXeey9oHTiD4Sa"
            target="_blank"
          >
            conditions particulières
          </a>{' '}
          des garanties offertes par Cookoon.
        </p>
      </div>
    </div>
  </div>
);

export default InsurancePage;
