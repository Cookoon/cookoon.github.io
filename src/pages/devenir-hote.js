import React from 'react';
import Link from 'gatsby-link';

import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import iconUser from '../images/iconUser.png';
import iconSnap from '../images/iconSnap.png';
import iconJanitor from '../images/iconJanitor.png';

const HostPage = () => (
  <div>
    <Helmet title="Devenir hôte" />

    <Banner>
      <h1 className="h4 font-weight-light mb-5">
        Rentabilisez votre logement pendant vos absences
        quotidiennes, et sans contraintes avec les services.
      </h1>
      <button className="btn btn-lg bg-white px-5 mb-4">
        DEVENIR HÔTE
      </button>
    </Banner>

    <div className="container text-center">
      <p className="mt-4">
        <span className="font-weight-bold">Être Hôte Cookoon</span>
        <br />
        <span className="font-italic">Comment ça marche ?</span>
      </p>

      <div className="row">
        <div className="col-md p-4 d-flex flex-column justify-content-around align-items-center">
          <img src={iconUser} role="presentation" className="mb-4 w-6r" />
          <h2 className="h3 font-weight-normal mb-4">Un appartement</h2>
          <p className="text-justify">
            Les Hôtes inscrivent leur logement sur l’application Cookoon,
            le rendent disponible durant leurs absences quotidiennes et reçoivent le paiement
            quelques jours après chaque location.
          </p>
          <p className="text-justify">
            Le tarif horaire de location est fixé par l’Hôte, que nous conseillons en fonction de sa taille,
            de son emplacement, ou encore de la demande des membres.
          </p>
          <Link to="/etre-membre/">En savoir plus ></Link>
        </div>

        <div className="col-md p-4 d-flex flex-column justify-content-around align-items-center">
          <img src={iconSnap} role="presentation" className="mb-4 w-6r" />
          <h2 className="h3 font-weight-normal mb-4">Le rentabiliser simplement</h2>
          <p className="text-justify">
            Avec seulement 2 locations de quelques heures par semaine, les membres peuvent obtenir jusqu'à 1500 €
            par mois en fonction du tarif horaire qu'ils proposent.
          </p>
          <p className="text-justify">
            Cookoon prélève 7% au titre des frais de services, et vous propose des options supplémentaires :
            Conciergerie et Ménage à partir de 20€
          </p>
          <Link to="/">En savoir plus ></Link>
        </div>

        <div className="col-md p-4 d-flex flex-column justify-content-around align-items-center">
          <img src={iconJanitor} role="presentation" className="mb-4 w-6r" />
          <h2 className="h3 font-weight-normal mb-4">En toute tranquilité</h2>
          <p className="text-justify">
            Seuls les membres peuvent louer l’appartement de l’Hôte.
          </p>
          <p className="text-justify">
            Chaque location fait l’objet d’un check-in et d’un check-out par vos soins ou par un concierge Cookoon.
          </p>
          <p className="text-justify">
            AXA, notre partenaire, garantit toutes les locations via un contrat d’assurance
            spécialement conçu pour les usages Cookoon.
          </p>
          <Link to="/devenir-hote/">En savoir plus ></Link>
        </div>
      </div>
    </div>
    <div className="bg-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h3>Qui sommes-nous ?</h3>
            <p>Cookoon est une communauté exclusive qui repose sur la confiance et l’implication de ses membres.</p>
            <p>Grâce à l’application Cookoon, les membres interagissent et accèdent à un certain nombre de services.</p>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-beetween align-items-center">
              <img src={iconJanitor} role="presentation" />
              <p>
                Organiser des <strong>micro-événements du quotidien</strong> en louant un Cookoon et en choisissant des services
                complémentaires comme un traiteur, un chef à domicile, un musicien, …
               </p>
            </div>
            <div className="d-flex justify-content-beetween align-items-center">
              <img src={iconJanitor} role="presentation" />
              <p>
                Pour des <strong>usages personnels</strong> : un diner entre amis, un match de foot sur grand écran,
                un vide-dressing etc., ou <strong>professionnels</strong> : un comité d’entreprise, un repas d’affaires,
                une journée de formation, etc.
              </p>
            </div>
            <div className="d-flex justify-content-beetween align-items-center">
              <img src={iconJanitor} role="presentation" />
              <p>
                <strong>Pour nous rejoindre ?</strong> Les membres doivent être cooptés par un autre membre disposant d’invitations.
                Les invitations viennent récompenser l’implication des membres et l’usage respectueux des services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-primary text-center text-white py-5">
      <div className="container">
        <h3>Vous souhaitez rejoindre la communauté ?</h3>
        <p className='py-3'>
          Si vous ne connaissez pas de membres Cookoon ayant des invitations, vous pouvez postulez en proposant votre
          logement : appartement, maison, loft ou château. S’il est retenu vous serez invité à nous rejoindre.
        </p>
      </div>
      <button className="btn btn-lg bg-white px-5">DEVENIR HÔTE</button>
    </div>
  </div>
);

export default HostPage;
