import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import BannerCard from '../components/BannerCard';
import backgroundSecond from '../images/cookoon-spot.png';

const sendAnalyticsEventTopCTA = () => {
  if (typeof ga === 'function') {
    ga('send', 'event', 'HostCTA', 'click', 'devenir-hote top CTA');
  }
};

const sendAnalyticsEventBottomCTA = () => {
  if (typeof ga === 'function') {
    ga('send', 'event', 'HostCTA', 'click', 'devenir-hote bottom CTA');
  }
};

const HostPage = () => (
  <div>
    <Helmet title="Devenir hôte" />

    <div className="container">
      <div className="text-card text-card--white">
        <h3 className="pt-2 mb-3">Devenir Hôte Cookoon</h3>
        <h4>
          Rentabilisez votre logement durant vos absences quotidiennes sans contraintes grâce aux services proposés.
        </h4>
      </div>

      <iframe
        className="host-video mb-3"
        src="https://player.vimeo.com/video/256423369?color=006f8b"
        frameBorder="0"
        allowFullScreen
      />

      <div className="text-card mb-4">
        <div className='row'>
          <div className="col-md">
            <p><u><b>Un logement</b></u></p>
            <p>
              Les Hôtes inscrivent leur logement sur l'application Cookoon, le rendent disponible durant leurs absences
              quotidiennes et reçoivent le paiement quelques jours après chaque location.
            </p>
            <p>
              Le tarif horaire de location est fixé librement par l'Hôte en fonction de la taille, de l'emplacement et
              des caractéristiques de son logement.
            </p>
          </div>
          <div className="col-md">
            <p><u><b>A rentabiliser simplement</b></u></p>
            <p>
              Avec seulement deux locations de quelques heures par semaine, les membres peuvent obtenir jusqu'à 1500 €
              par mois en fonction du tarif horaire qu'ils proposent.
            </p>
            <p>
              Cookoon prélève 7% au titre des frais de services, et vous propose des options supplémentaires :
              Conciergerie et Ménage à partir de 20€.
            </p>
          </div>
          <div className="col-md">
            <p><u><b>Et en toute tranquilité</b></u></p>
            <p>
              Seuls les membres peuvent louer l'appartement de l'Hôte. Chaque location fait l'objet d'un check-in et
              d'un check-out par vos soins ou par un concierge Cookoon.
            </p>
            <p>
              AXA, notre partenaire, garantit toutes les locations via un contrat d'assurance spécialement conçu pour
              les usages Cookoon.
            </p>
            <a
              href="https://cookoon.typeform.com/to/iY7Heh"
              target="_blank"
              rel="noreferrer noopener"
              onClick={sendAnalyticsEventBottomCTA}
            >
              En savoir plus >
            </a>
          </div>
        </div>
      </div>
    </div>

    <BannerCard background={backgroundSecond} text='Un réseau sélectif, qui fonctionne grâce à la cooptation.' />

    <div className="container mt-4">
      <div className="text-card">
        <h3>Cookoon est bâtit sur la confiance entre membres.</h3>
        <hr className='bg-light' />
        <div className='row'>
          <div className="col-md">
            <p>
              Les hôtes Cookoon ouvrent les portes de
              leurs magnifiques demeures. Le réseau
              permet de leur garantir des usages
              respectueux des biens et des personnes.
            </p>
          </div>
          <div className="col-md">
            <p>
              Sans invitation d’un membre, il est tout de même possible
              de rejoindre Cookoon en proposant sa maison, ou en
              postulant. Un comité d’hôtes étudiera votre candidature, et
              statuera pour vous répondre rapidement.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default HostPage;
