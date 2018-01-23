import React from 'react';
import Link from 'gatsby-link';

import Banner from '../components/Banner';
import appStoreBadge from '../images/appStoreBadge.png';
import googlePlayBadge from '../images/googlePlayBadge.png';

const IndexPage = () => (
  <div>
    <Banner>
      <h1 className="h4 font-weight-light mb-4">
        Une communauté exclusive pour
        <br />organiser vos événements chez les autres
      </h1>
      <div className="store-badge">
        <a
          href="https://itunes.apple.com/fr/app/cookoon-inside/id1291943406"
          target="_blank"
          rel="noreferrer noopener"
          className="d-inline-block mx-1 ml-md-0 mr-md-3 my-2"
        >
          <img alt="App Store" src={appStoreBadge} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=cookoon.cookoonandroid"
          target="_blank"
          rel="noreferrer noopener"
          className="d-inline-block mx-1 ml-md-0 mr-md-3 my-2"
        >
          <img alt="Google Play" src={googlePlayBadge} />
        </a>
      </div>
    </Banner>

    <div className="container text-center">
      <p className="mt-4">
        <span className="font-weight-bold">En toute simplicité</span>
        <br />
        <span className="font-italic">Comment ça marche ?</span>
      </p>

      <div className="row">
        <div className="col-md">
          <h2>Etre Membre</h2>
          <p>Chez Cookoon, tout le monde se connaît, ou presque.</p>
          <p>
            Chaque membre est invité par un parrain qui est responsable de son
            filleul.
            <br />La communauté se construit sur des valeurs d'échange,
            d'implication et de respect.
          </p>
          <Link to="/etre-membre/">En savoir plus ></Link>
        </div>

        <div className="col-md">
          <h2>Organiser un événement</h2>
          <p>
            Louez l’appartement d’un autre membre en 3 minutes pour tous vos
            besoins de courte durée :
            <br />rendez-vous, dîner entre amis, réunions, etc.
          </p>
          <p>
            Choisissez vos options : traiteur, chef à domicile, joueur de harpe
            … pour personnaliser votre expérience.
          </p>
          <Link to="/">En savoir plus ></Link>
        </div>

        <div className="col-md">
          <h2>Devenir hôte</h2>
          <p>
            Participer à la vie de la communauté en proposant votre appartement
            ou votre maison, pour rentabiliser votre lieu de vie pendant vos
            absences quotidiennes. Et pas besoin de dormir ailleurs !
          </p>
          <p>
            Choisissez des services pour vous affranchir de toutes contraintes :
            ménage, concierge...
          </p>
          <Link to="/devenir-hote/">En savoir plus ></Link>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
