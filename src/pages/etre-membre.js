import React from 'react';
import Helmet from 'react-helmet';

import Banner from '../components/Banner';

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
        <div className="col-md py-3 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-notifications fa-5x"
                  aria-hidden="true"
                />
                <h2 className="h3">Un dîner entre amis</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-notifications fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un dîner entre amis</p>
                <p className="text-justify small mb-0">
                  Pour un déjeuner ou un repas entre amis, quand on manque de
                  plance ou que l'on souhaite changer d'air, Cookon est idéal.
                  <br />Ça l'est encore plus avec un chef à domicile !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-3 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="co co-reversed-user fa-5x" aria-hidden="true" />
                <h2 className="h3">Une réunion de travail avec votre équipe</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-user fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Une réunion de travail avec votre équipe</p>
                <p className="text-justify small mb-0">
                  Pour sortir de la salle Rome ou la salle XL, profitez d'un
                  Cookoon avec votre équipe pour travailler dans un cadre
                  original et vous concentrer en dehors de vos problématiques.
                  <br />Profitez des services supplémentaires pour tout vous
                  simplifier.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-3 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-addcookoon fa-5x"
                  aria-hidden="true"
                />
                <h2 className="h3">Une journée de formation</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-addcookoon fa-3x mb-2"
                  aria-hidden="true"
                />

                <p className="h4">Une journée de formation</p>
                <p className="text-justify small mb-0">
                  Formez-vous dans un cadre original et spontané. Demandez
                  l'option traiteur et des outils (paperboard, retroprojecteur,
                  cahiers, etc.) pour vous éviter toute contrainte.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-3 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed--camera fa-5x"
                  aria-hidden="true"
                />
                <h2 className="h3">Un match de foot sur grand écran</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed--camera fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un match de foot sur grand écran</p>
                <p className="text-justify small mb-0">
                  Vous n'avez pas la place chez vous pour un grand mur blanc et
                  un retroprojecteur ? Profitez de celui de l'un de nos Hôtes
                  pour regarder une finale de Champion's League ou de Jeux
                  Olympiques !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-3 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="co co-reversed-bank fa-5x" aria-hidden="true" />
                <h2 className="h3">Un vide-dressing</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-bank fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un vide-dressing</p>
                <p className="text-justify small mb-0">
                  Pour recevoir vos ami(e)s, ou vos acheteurs et exposer vos
                  produits, Cookoon est idéal pour accueillir votre événement en
                  toute simplicité.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md py-3 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="fa fa-instagram fa-5x" aria-hidden="true" />
                <h2 className="h3">
                  Des nouvelles idées ?<br />#cookoonlife
                </h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="fa fa-instagram fa-3x mb-2" aria-hidden="true" />
                <p className="h4">
                  Des nouvelles idées ?<br />#cookoonlife
                </p>
                <p className="text-justify small mb-0">
                  Faites-nous part de toutes vos expériences avec #cookoonlife
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md d-flex flex-column justify-content-around">
            <h3>
              Des services sur-mesure,<br />pour personnaliser votre expérience
            </h3>
            <p>
              Afin que nos membres puissent créer leurs micro-événements du
              quotidien à l'image de leurs envies, nous proposons un gamme de
              services accessibles dès la réservation et un service de
              conciergerie dédié.
            </p>
          </div>
          <div className="col-md">
            <div className="d-flex flex-column flex-md-row justify-content-beetween align-items-center">
              <i
                className="co co-concierge text-primary mr-0 mr-md-3 fa-3x"
                aria-hidden="true"
              />
              <p className="mt-2 mb-md-0 ">
                <strong>Traiteur :</strong> profitez des offres exclusives de
                nos traiteurs pour profiter de votre Cookoon. Selon l'heure de
                votre réception, nous vous proposons à chaque fois une offre
                simple et dédiée.
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-beetween align-items-center">
              <i
                className="co co-notifications text-primary mr-0 mr-md-3 fa-3x"
                aria-hidden="true"
              />
              <p className="mt-2 mb-md-0 ">
                <strong>Chefs à domicile :</strong> envie d'une prestation
                originale et insolite ? Commander un chef à domicile, selon le
                budget que vous souhaitez allouer à votre événement.
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-beetween align-items-center">
              <i
                className="co co-success text-primary mr-0 mr-md-3 fa-3x"
                aria-hidden="true"
              />
              <p className="mt-2 mb-md-0 ">
                <strong>Une envie insolite ?</strong> Contactez nos concierges,
                ils trouveront toujours pour vous un service sur-mesure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MemberPage;
