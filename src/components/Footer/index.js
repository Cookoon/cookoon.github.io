import React from 'react';
import Link from 'gatsby-link';
import AxaLogo from '../../images/iconAxa.jpg'
import appStoreBadge from '../../images/appStoreBadge.png'
import googlePlayBadge from '../../images/googlePlayBadge.png'
import './footer.scss'

const Footer = () => (
  <div className='container'>
    <footer className="footer">
      <div className='row mt-2'>
        <div className='col-md mt-2'>
          <div className='d-flex'>
            <p className='text-left'>Avec le soutien <br/> de notre partenaire</p>
            <img className='axa-logo ml-2' alt="Axa Logo" src={AxaLogo} />
          </div>
        </div>
        <div className='col-md mt-2'>
          <p>Devenir Hôte</p>
          <p>Les garanties</p>
          <p>Conditions Générales d’Utilisation</p>
        </div>
        <div className='col-md mt-2'>
          <p>Le livre blanc</p>
          <p>Presse</p>
          <p>Contact</p>
        </div>
        <div className='col-md mt-2'>
          <p> Retrouvez Cookoon sur votre smartphone</p>
          <div className='d-flex'>
            <img className='app-logo' alt="App store" src={appStoreBadge} />
            <img className='app-logo' alt="Play store" src={googlePlayBadge} />
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
