import React from 'react';
import Link from 'gatsby-link';

import Banner from '../components/Banner';
import ModalMembership from '../components/ModalMembership';
import appStoreBadge from '../images/appStoreBadge.png';
import googlePlayBadge from '../images/googlePlayBadge.png';
import ctaBackground from '../images/ctaBackground.jpg';
import iconAxa from '../images/iconAxa.jpg';

const IndexPage = () => (
  <div>
    <Banner>
      <h1 className="h3 mb-4">
        Une communauté sélective
        <br />pour recevoir et partager
      </h1>
      <div className="store-badge">
        <a
          href="https://itunes.apple.com/fr/app/cookoon-inside/id1291943406?mt=8"
          target="_blank"
          className="d-inline-block mx-1 ml-md-0 mr-md-3 my-2"
        >
          <img alt="App Store" src={appStoreBadge} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=cookoon.cookoonandroid"
          target="_blank"
          className="d-inline-block mx-1 ml-md-0 mr-md-3 my-2"
        >
          <img alt="Google Play" src={googlePlayBadge} />
        </a>
      </div>
    </Banner>

    <div className="container text-center">
      <h2 className="h3 pt-5 mb-5">En toute simplicité</h2>

      <div className="row">
        <div className="col-md pb-4 px-4">
          <div>
            <i className="co co-user fa-5x text-primary" aria-hidden="true" />
            <h3 className="font-weight-normal my-3">Etre Membre</h3>
          </div>
          <p>Chez Cookoon, tout le monde se connaît, ou presque.</p>
          <p>
            Chaque membre est invité par un parrain qui est responsable de son
            filleul.
            <br />La communauté se construit sur des valeurs d'échange,
            d'implication et de respect.
          </p>
        </div>

        <div className="col-md pb-4 px-4">
          <div>
            <i
              className="co co-success fa-5x text-primary"
              aria-hidden="true"
            />
            <h3 className="font-weight-normal my-3">Organiser un événement</h3>
          </div>
          <p>
            Louez l'appartement d'un autre membre en trois minutes pour tous vos
            besoins de courte durée : rendez-vous, dîner entre amis, réunions,
            etc.
          </p>
          <p>
            Choisissez vos options : traiteur, chef à domicile, joueur de
            harpe... pour personnaliser votre expérience.
          </p>
        </div>

        <div className="col-md pb-4 px-4">
          <div>
            <i
              className="co co-concierge fa-5x text-primary"
              aria-hidden="true"
            />
            <h3 className="font-weight-normal my-3">Devenir hôte</h3>
          </div>
          <p>
            Participez à la vie de la communauté en proposant votre appartement
            ou votre maison et rentabilisez votre lieu de vie pendant vos
            absences quotidiennes. Le plus Cookoon : pas besoin de dormir
            ailleurs !
          </p>
          <p>
            Choisissez des services pour vous affranchir de toutes contraintes :
            ménage, concierge...
          </p>
        </div>
      </div>
    </div>

    <div className="cta" style={{ backgroundImage: `url(${ctaBackground})` }}>
      <div className="container h-100 py-5 text-center d-flex flex-column justify-content-around align-items-center">
        <h2 className="h3 text-primary">
          Découvrez comment nos membres utilisent Cookoon
        </h2>
        <Link
          to="/etre-membre/"
          className="btn btn-lg btn-primary px-5 text-uppercase"
        >
          Être membre
        </Link>
      </div>
    </div>

    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md p-5 d-flex flex-column justify-content-between align-items-center bg-primary text-white">
          <h2 className="h3 mb-4">Rejoindre la communauté</h2>
          <p>
            Vous n'avez pas d'invitation ?
            <br />
            Proposez votre logement ou inscrivez votre candidature sur liste
            d'attente.
            <br />
            Elle sera examinée avec bienveillance par un comité d'hôtes !
          </p>


          {/* Todo : REmove link when done */}
          {/* <a
            href="https://cookoon.typeform.com/to/mEeE1Z"
            className="btn btn-lg btn-light px-5 text-uppercase"
            target="_blank"
            rel="noreferrer noopener"
            onClick={sendAnalyticsEvent}
          >
            Je sonne le portier
          </a> */}
          <ModalMembership buttonLabel='Je sonne le portier' className='modal-lg' />
        </div>

        <div className="col-md p-5 d-flex flex-column justify-content-between align-items-center bg-white">
          <h2 className="h3 mb-4">En toute sécurité</h2>
          <p>Toutes les locations sont assurées par notre partenaire</p>
          <img src={iconAxa} role="presentation" className="mb-4 w-6r" />
          <Link to="/garanties/">En savoir plus sur les garanties ></Link>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
