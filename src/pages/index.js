import React from 'react';
import Link from 'gatsby-link';

import ModalMembership from '../components/ModalMembership';
import BannerCard from '../components/BannerCard';
import ImageCard from '../components/ImageCard';
import appStoreBadge from '../images/appStoreBadge.png';
import googlePlayBadge from '../images/googlePlayBadge.png';
import ctaBackground from '../images/ctaBackground.jpg';
import iconAxa from '../images/iconAxa.jpg';
import backgroundFirst from '../images/cookoon-diner.png';
import backgroundSecond from '../images/cookoon-spot.png';

const IndexPage = () => (
  <div>
    <BannerCard background={backgroundFirst} text='Faites de toutes vos réceptions un moment d’exception.' />

    <div className="container">
      <div className="row">
        <div className="col-md mt-4">
          <ImageCard background={backgroundFirst} text='Un calme unique' />
        </div>
        <div className="col-md mt-4">
          <ImageCard background={backgroundFirst} text='Un chef privé' />
        </div>
        <div className="col-md mt-4">
          <ImageCard background={backgroundFirst} text='Un service sur mesure' />
        </div>
      </div>
    </div>

    <div className="container my-5" id='experience'>
      <div className="text-card">
        <h3>Grâce à Cookoon, partagez avec vos convives une expérience sur-mesure, élégante.</h3>
        <hr className='bg-light' />
        <div className='row'>
          <div className="col-md">
            <p>for pleasure</p>
            <p>
              dîner d’anniversaire, repas de mariage,
              cours de cuisine, dégustations de vin.
            </p>
          </div>
          <div className="col-md">
            <p>for business</p>
            <p>
              dîner d’affaires, cocktail clients,
              journée de formation, petit déjeuner presse.
            </p>
          </div>
        </div>
      </div>
    </div>

    <BannerCard background={backgroundSecond} text='Un réseau sélectif, qui fonctionne grâce à la cooptation.' />

    <div className="container my-5" id='reseau'>
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

export default IndexPage;
