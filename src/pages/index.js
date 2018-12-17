import React from 'react';
import Link from 'gatsby-link';

import BannerCard from '../components/BannerCard';
import backgroundFirst from '../images/cookoon-diner.png';
import Highlights from '../components/Highlights';
import SelectiveNetworkBlock from '../components/SelectiveNetworkBlock';

const IndexPage = () => (
  <div>
    <BannerCard background={backgroundFirst} text='Faites de toutes vos réceptions un moment d’exception.' />

    <Highlights />

    <div className="container my-5 anchor" id='experience'>
      <div className="text-card">
        <h3>Grâce à Cookoon, partagez avec vos convives une expérience sur-mesure, élégante.</h3>
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

    <SelectiveNetworkBlock />
  </div>
);

export default IndexPage;
