import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';
import logoAxa from '../images/logoAxa.png';

const InsurancePage = () => (
  <div>
    <Helmet title="Garanties" />
    <Banner>
      <h1 className="h4 font-weight-light mb-4">
        Votre assurance incluse à chaque location
      </h1>
      <div className="d-flex justify-content-center justify-content-md-start align-items-end">
        <p className="small mb-2 mr-2">en partenariat avec </p>
        <img src={logoAxa} alt="Axa" className="w-6r" />
      </div>
    </Banner>
    <div className="bg-primary text-white">
      <div className="container">
        <p className="text-center pt-4 font-weight-bold">
          Vous êtes immédiatement assuré
        </p>

        <div className="row py-3">
          <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
            <div className="row text-center">
              <div className="col-sm">
                <i
                  className="co co-reversed-cleaning fa-3x"
                  aria-hidden="true"
                />
                <p className="mt-2">Un verre de vin renversé ?</p>
              </div>

              <div className="col-sm">
                <i
                  className="co co-reversed-cleaning fa-3x"
                  aria-hidden="true"
                />
                <p className="mt-2">Une porte de placard endommagée ?</p>
              </div>

              <div className="col-sm">
                <i
                  className="co co-reversed-cleaning fa-3x"
                  aria-hidden="true"
                />
                <p className="mt-2">Un incendit ou un dégat des eaux ?</p>
              </div>

              <div className="col-sm">
                <i
                  className="co co-reversed-cleaning fa-3x"
                  aria-hidden="true"
                />
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

    <div className="container py-4">Questions fréquentes</div>

    <div className="bg-white py-5">
      <div className="container d-flex align-items-center">
        <i className="co co-check fa-3x text-primary mx-3" aria-hidden="true" />
        <p className="mb-0">
          Les informations ci-dessus sont non contractuelles, pour toute
          information supplémentaire, merci de consulter les{' '}
          <a href="#" target="_blank" rel="noreferrer noopener">
            conditions générales
          </a>{' '}
          et les{' '}
          <a href="#" target="_blank" rel="noreferrer noopener">
            conditions particulières
          </a>{' '}
          des garanties offertes par Cookoon.
        </p>
      </div>
    </div>
  </div>
);

export default InsurancePage;
