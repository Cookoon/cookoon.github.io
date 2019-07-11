import React from 'react';
import Helmet from 'react-helmet';
import Layout from "../components/layout";

const MemberPage = () => (
  <Layout>
    <Helmet title="Etre membre" />

    <div className="container text-center">
      <p className="h4 font-italic pt-5">Vous êtes membre ?</p>
      <h2 className="h3 mb-5">
        Louez un Cookoon
        <br />pour tous vos besoins personnels ou professionnels
      </h2>
      <div className="row text-white">
        <div className="col-md pb-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-notifications fa-5x"
                  aria-hidden="true"
                />
                <h3>Un repas</h3>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-notifications fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Un repas</p>
                <p className="small mb-0">
                  Pour un déjeuner d'affaire, un dîner entre amis, un brunch en
                  famille, avec un chef, un traiteur ou en cuisinant soi-même
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md pb-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="co co-reversed-user fa-5x" aria-hidden="true" />
                <h3>Une réunion ou un rendez-vous</h3>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-user fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">Une réunion ou un rendez-vous</p>
                <p className="small mb-0">
                  Pour un rendez, une réunion de travail, un comité d'entreprise
                  original, une séance de coaching, un cours de langue...
                  <br />Votre concierge peut s'occuper des carnets de note ou
                  des bouteilles d'eau !
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md pb-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="co co-reversed-bank fa-5x" aria-hidden="true" />
                <h3>Une journée de travail</h3>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-bank fa-3x mb-2"
                  aria-hidden="true"
                />

                <p className="h4">Une journée de travail</p>
                <p className="small mb-0">
                  Pour une formation, une journée de team building, une
                  assemblée générale...
                  <br />Votre concierge s'occupe du catering, du vidéo
                  projecteur ou de gérer la venue de vos invités si vous le
                  souhaitez.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md pb-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed--camera fa-5x"
                  aria-hidden="true"
                />
                <h3>Un événement sportif ou culturel sur grand écran</h3>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed--camera fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">
                  Un événement sportif ou culturel sur grand écran
                </p>
                <p className="small mb-0">
                  Pour regarder, sur grand écran, une finale de Champion's
                  League ou des Jeux Olympiques, la remise de la Palme d'Or ou
                  même le dernier blockbuster...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md pb-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-success fa-5x"
                  aria-hidden="true"
                />
                <h3>
                  Un vide-dressing, un salon de lecture, une séance de yoga...
                </h3>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i
                  className="co co-reversed-success fa-3x mb-2"
                  aria-hidden="true"
                />
                <p className="h4">
                  Un vide-dressing, un salon de lecture, une séance de yoga...
                </p>
                <p className="small mb-0">
                  Pour réunir des amis autour d'une activité, d'un hobby ou d'un
                  centre d'intérêt, avec ou sans l'aide de votre concierge.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md pb-4 d-flex justify-content-center">
          <div className="flip-container">
            <div className="flipper">
              <div className="front bg-primary rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="fa fa-instagram fa-5x" aria-hidden="true" />
                <h3>
                  De nouvelles idées ?<br />#cookoonlife
                </h3>
              </div>
              <div className="back bg-dark rounded p-4 d-flex flex-column justify-content-around align-items-center">
                <i className="fa fa-instagram fa-3x mb-2" aria-hidden="true" />
                <p className="h4">
                  De nouvelles idées ?<br />#cookoonlife
                </p>
                <p className="small mb-0">
                  Faites-nous part de toutes vos expériences avec #cookoonlife
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white py-5 text-center text-md-left">
      <div className="container">
        <div className="row">
          <div className="col-md d-flex flex-column justify-content-around">
            <h2 className="h3">
              Des services sur-mesure,<br />pour personnaliser votre expérience
            </h2>
            <p>
              Afin que nos membres puissent créer leurs micro-événements du
              quotidien à l'image de leurs envies, nous proposons une gamme de
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
  </Layout>
);

export default MemberPage;
