import React from "react";
import Link from "gatsby-link";

import Helmet from "react-helmet";
import Banner from "../components/Banner";

const HostPage = () => (
  <div>
    <Helmet title="Devenir hôte" />

    <Banner>
      <h1 className="h4 font-weight-light mb-5">
        Rentabilisez votre logement
        <br />durant vos absences quotidiennes
        <br />sans contraintes avec les services.
      </h1>
      <a
        href="https://quentin21.typeform.com/to/ljnp8X"
        className="btn btn-lg btn-light px-5 text-uppercase"
        target="_blank"
        rel="noreferrer noopener"
      >
        Postuler
      </a>
    </Banner>

    <div className="container text-center">
      <h2 className="h3 text-center pt-5 mb-5">
        Être Hôte Cookoon
        <br />
        <span className="font-italic">Comment ça marche ?</span>
      </h2>

      <div className="row">
        <div className="col-md px-4">
          <div>
            <i className="co co-home text-primary fa-5x" aria-hidden="true" />
            <h3 className="font-weight-normal my-4">Un appartement</h3>
          </div>
          <p>
            Les Hôtes inscrivent leur logement sur l'application Cookoon, le
            rendent disponible durant leurs absences quotidiennes et reçoivent
            le paiement quelques jours après chaque location.
          </p>
          <p>
            Le tarif horaire de location est fixé par l'Hôte, que nous
            conseillons en fonction de la taille, de l'emplacement et des
            caractéristiques de son logement.
          </p>
          <div className="mb-3" />
        </div>

        <div className="col-md px-4">
          <div>
            <i
              className="co co-success text-primary fa-5x"
              aria-hidden="true"
            />
            <h3 className="font-weight-normal my-4">
              Le rentabiliser simplement
            </h3>
          </div>
          <p>
            Avec seulement 2 locations de quelques heures par semaine, les
            membres peuvent obtenir jusqu'à 1500 € par mois en fonction du tarif
            horaire qu'ils proposent.
          </p>
          <p>
            Cookoon prélève 7% au titre des frais de services, et vous propose
            des options supplémentaires : Conciergerie et Ménage à partir de
            20€.
          </p>
          <div className="mb-3" />
        </div>

        <div className="col-md px-4 pb-4">
          <div>
            <i
              className="co co-concierge text-primary fa-5x"
              aria-hidden="true"
            />
            <h3 className="font-weight-normal my-4">En toute tranquilité</h3>
          </div>
          <p>
            Seuls les membres peuvent louer l'appartement de l'Hôte. Chaque
            location fait l'objet d'un check-in et d'un check-out par vos soins
            ou par un concierge Cookoon.
          </p>
          <p>
            AXA, notre partenaire, garantit toutes les locations via un contrat
            d'assurance spécialement conçu pour les usages Cookoon.
          </p>
          <Link to="/garanties/">En savoir plus ></Link>
        </div>
      </div>
    </div>
    <div className="bg-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md d-flex flex-column justify-content-around">
            <h2 className="h3">Qui sommes-nous ?</h2>
            <p>
              Cookoon est une communauté exclusive qui repose sur la confiance
              et l'implication de ses membres.
            </p>
            <p>
              Grâce à l'application Cookoon, les membres interagissent et
              accèdent à un certain nombre de services.
            </p>
          </div>
          <div className="col-md">
            <div className="d-flex flex-column flex-md-row justify-content-beetween align-items-center">
              <i
                className="co co-success text-primary mr-0 mr-md-3 fa-3x"
                aria-hidden="true"
              />
              <p className="mt-2 mb-md-0 ">
                Organiser des <strong>micro-événements du quotidien</strong> en
                louant un Cookoon et en choisissant des services complémentaires
                comme un traiteur, un chef à domicile, un musicien, ...
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-beetween align-items-center">
              <i
                className="co co-user text-primary mr-0 mr-md-3 fa-3x"
                aria-hidden="true"
              />
              <p className="mt-2 mb-md-0 ">
                Pour des <strong>usages personnels</strong> : un diner entre
                amis, un match de foot sur grand écran, un vide-dressing, etc.,
                ou <strong>professionnels</strong> : un comité d'entreprise, un
                repas d'affaires, une journée de formation, etc.
              </p>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-beetween align-items-center">
              <i
                className="co co-concierge text-primary mr-0 mr-md-3 fa-3x"
                aria-hidden="true"
              />
              <p className="mt-2 mb-md-0 ">
                <strong>Pour nous rejoindre ?</strong> Les membres doivent être
                cooptés par un autre membre disposant d'invitations. Les
                invitations viennent récompenser l'implication des membres et
                l'usage respectueux des services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-primary text-center text-white py-5">
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
            <h2 className="h3">Vous souhaitez rejoindre la communauté ?</h2>
            <p className="py-3">
              Si vous ne connaissez pas de membres Cookoon ayant des
              invitations, vous pouvez postuler en proposant votre logement :
              appartement, maison, loft ou ... château!
              <br />S'il est retenu vous serez invité à nous rejoindre.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://quentin21.typeform.com/to/ljnp8X"
        className="btn btn-lg btn-light px-5 text-uppercase"
        target="_blank"
        rel="noreferrer noopener"
      >
        Postuler
      </a>
    </div>
  </div>
);

export default HostPage;
