import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import Banner from '../components/Banner';
import iconUser from '../images/iconUser.png';
import iconSnap from '../images/iconSnap.png';
import iconJanitor from '../images/iconJanitor.png';

const MemberPage = () => (
  <div>
    <Helmet title="Etre membre" />

    <Banner>
      <h1 className="h4 font-weight-light mb-4">
        Nos membres louent des Cookoon en 3 minutes et tous les jours pour tous
        leurs événements.
      </h1>
      <p className="h4 font-weight-light">
        Et vous, pourquoi allez-vous louer un Cookoon ?
      </p>
    </Banner>

    <div className="container text-center">
      <p className="mt-4 font-weight-bold">
        Louer un Cookoon
        <br />pour tous vos besoins personnels ou professionnels
      </p>

      <div className="row text-white">
        <div className="col-md py-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <img src={iconUser} role="presentation" className="mb-4 w-6r" />
                <h2 className="h3">Un repas hors les murs</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <p className="h4">Un repas hors les murs</p>
                <p className="text-justify">
                  Pour un déjeuner ou un repas entre amis, quand on manque de
                  plance ou que l'on souhaite changer d'air, Cookon est idéal.
                  <br />Ça l'est encore plus avec un chef à domicile !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <img src={iconUser} role="presentation" className="mb-4 w-6r" />
                <h2 className="h3">Une réunion en dehors de vos locaux</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <p className="h4">Une réunion en dehors de vos locaux</p>
                <p className="text-justify" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <img src={iconUser} role="presentation" className="mb-4 w-6r" />
                <h2 className="h3">Une sieste ou un moment de repos</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <p className="h4">Une sieste ou un moment de repos</p>
                <p className="text-justify" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <img src={iconUser} role="presentation" className="mb-4 w-6r" />
                <h2 className="h3">Un shooting ou un casting</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <p className="h4">Un shooting ou un casting</p>
                <p className="text-justify" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <img src={iconUser} role="presentation" className="mb-4 w-6r" />
                <h2 className="h3">Un vide-dressing ?</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <p className="h4">Un vide-dressing ?</p>
                <p className="text-justify" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <img src={iconUser} role="presentation" className="mb-4 w-6r" />
                <h2 className="h3">
                  Des nouvelles idées ?<br />#cookoonlife
                </h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <p className="h4">
                  Des nouvelles idées ?<br />#cookoonlife
                </p>
                <p className="text-justify" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MemberPage;
