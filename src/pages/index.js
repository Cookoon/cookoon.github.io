import React from 'react';
import Helmet from 'react-helmet';

import BannerCard from '../components/BannerCard';
import backgroundFirst from '../images/cookoon-diner.png';
import Highlights from '../components/Highlights';
import SelectiveNetworkBlock from '../components/SelectiveNetworkBlock';

const IndexPage = () => (
  <div>
    <Helmet title="cookoon.fr" defer={false} />
    <BannerCard background={backgroundFirst} text="Organisez votre événement d'exception chez un membre Cookoon" />

    <Highlights />

    <div className="container my-5 anchor" id='experience'>
      <div className="text-card">
        <h3 className='mb-4'>Grâce à Cookoon, partagez avec vos convives une expérience sur-mesure, élégante et discrète</h3>
        <div className='row'>
          <div className="col-md">
            <p><b>For pleasure</b></p>
            <ul>
              <li>dîner d’anniversaire</li>
              <li>déjeuner de mariage</li>
              <li>cours de cuisine</li>
              <li>dégustations de vin</li>
            </ul>
          </div>
          <div className="col-md">
            <p><b>For business</b></p>
            <ul>
              <li>dîner d’affaires</li>
              <li>cocktail clients</li>
              <li>journée de formation</li>
              <li>petit déjeuner presse</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SelectiveNetworkBlock />
  </div>
);

export default IndexPage;
