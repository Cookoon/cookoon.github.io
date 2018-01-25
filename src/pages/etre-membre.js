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
                <h2 className="h3">Un repas hors les murs</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-notifications fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un repas hors les murs</p>
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
                <i
                  className="co co-reversed-meeting fa-5x"
                  aria-hidden="true"
                />
                <h2 className="h3">Une réunion en dehors de vos locaux</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-meeting fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Une réunion en dehors de vos locaux</p>
                <p className="text-justify small mb-0">
                  Un comité d'entreprise, une réunion, une séance de formation,
                  pour deux heures ou pour la journée, louez un Cookoon et...
                  réservez le service traiteur !
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
                <h2 className="h3">Une sieste ou un moment de repos</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-addcookoon fa-3x mb-2"
                  aria-hidden="true"
                />

                <p className="h4">Une sieste ou un moment de repos</p>
                <p className="text-justify small mb-0">
                  Pour vous retrouver avec vous-même, travailler au calme ou
                  réfléchir... louez un Cookoon !
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
                <h2 className="h3">Un shooting ou un casting</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed--camera fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un shooting ou un casting</p>
                <p className="text-justify small mb-0">
                  Avoir un décor qui colle avec votre produit ou recevoir ceux
                  qui vous serviront de modèles ? Cookoon est parfait organiser
                  une matinée de travail !
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
                <h2 className="h3">Un vide-dressing ou un pop-up store ?</h2>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-bank fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un vide-dressing ou un pop-up store ?</p>
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
                  Faites-nous part de toutes vos expérience avec #cookoonlife
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MemberPage;
