import React from "react";
import Link from "gatsby-link";

import Banner from "../components/Banner";
import appStoreBadge from "../images/appStoreBadge.png";
import googlePlayBadge from "../images/googlePlayBadge.png";
import ctaBackground from "../images/ctaBackground.jpg";
import iconAxa from "../images/iconAxa.jpg";

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
      <p className="mt-4">
        <span className="font-weight-bold">En toute simplicité</span>
        <br />
        <span className="font-italic">Comment ça marche ?</span>
      </p>

      <div className="row">
        <div className="col-md p-4 d-flex flex-column justify-content-between align-items-center">
          <div>
            <i className="co co-user fa-5x text-primary" aria-hidden="true" />
            <h2 className="h3 font-weight-normal my-3">Etre Membre</h2>
          </div>
          <p className="text-justify">
            Chez Cookoon, tout le monde se connaît, ou presque.
          </p>
          <p className="text-justify">
            Chaque membre est invité par un parrain qui est responsable de son
            filleul.
            <br />La communauté se construit sur des valeurs d'échange,
            d'implication et de respect.
          </p>
        </div>

        <div className="col-md p-4 d-flex flex-column justify-content-between align-items-center">
          <div>
            <i
              className="co co-success fa-5x text-primary"
              aria-hidden="true"
            />
            <h2 className="h3 font-weight-normal my-3">
              Organiser un événement
            </h2>
          </div>
          <p className="text-justify">
            Louez l'appartement d'un autre membre en 3 minutes pour tous vos
            besoins de courte durée : rendez-vous, dîner entre amis, réunions,
            etc.
          </p>
          <p className="text-justify">
            Choisissez vos options : traiteur, chef à domicile, joueur de
            harpe... pour personnaliser votre expérience.
          </p>
        </div>

        <div className="col-md p-4 d-flex flex-column justify-content-between align-items-center">
          <div>
            <i
              className="co co-concierge fa-5x text-primary"
              aria-hidden="true"
            />
            <h2 className="h3 font-weight-normal my-3">Devenir hôte</h2>
          </div>
          <p className="text-justify">
            Participer à la vie de la communauté en proposant votre appartement
            ou votre maison, pour rentabiliser votre lieu de vie pendant vos
            absences quotidiennes. Et pas besoin de dormir ailleurs !
          </p>
          <p className="text-justify">
            Choisissez des services pour vous affranchir de toutes contraintes :
            ménage, concierge...
          </p>
        </div>
      </div>
    </div>

    <div className="cta" style={{ backgroundImage: `url(${ctaBackground})` }}>
      <div className="container h-100 py-5 text-center d-flex flex-column justify-content-around align-items-center">
        <h3 className="text-primary font-weight-normal">
          Découvrez comment nos membres utilisent Cookoon
        </h3>
        <Link
          to="/etre-membre/"
          className="btn btn-primary px-5 text-uppercase"
        >
          Être membre
        </Link>
      </div>
    </div>

    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-md p-5 d-flex flex-column justify-content-between align-items-center bg-primary text-white">
          <h2 className="h3 font-weight-normal mb-4">
            Rejoindre la communauté ?
          </h2>
          <p>Seuls les membres parrainés peuvent rejoindre Cookoon.</p>
          <p>
            Vous n'avez pas de parrain ? Vous pouvez postuler en proposant votre
            logement !
          </p>
          <Link
            to="/devenir-hote/"
            className="btn btn-light px-5 text-uppercase"
          >
            Devenir hôte
          </Link>
        </div>

        <div className="col-md p-5 d-flex flex-column justify-content-between align-items-center bg-white">
          <h2 className="h3 font-weight-normal mb-4">En toute sécurité</h2>
          <p>Toutes les locations sont assurées par notre partenaire</p>
          <img src={iconAxa} role="presentation" className="mb-4 w-6r" />
          <Link to="/garanties/">En savoir plus sur les garanties ></Link>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
