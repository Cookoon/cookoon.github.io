import React from 'react';
import Link from 'gatsby-link';
import AxaLogo from '../../images/iconAxa.jpg'
import appStoreBadge from '../../images/appStoreBadge.png'
import googlePlayBadge from '../../images/googlePlayBadge.png'
import './footer.scss'

const Footer = () => (
  <div className='container'>
    <footer className="footer">
      <div className='row'>
        <div className='col-md'>
          <div className='d-flex'>
            <p>Avec le soutien <br/> de notre partenaire</p>
            <img className='axa-logo' alt="Axa Logo" src={AxaLogo} />
          </div>
        </div>
        <div className='col-md'>
          <p>Devenir Hôte</p>
          <p>Les garanties</p>
          <p>Conditions Générales d’Utilisation</p>
        </div>
        <div className='col-md'>
          <p>Le livre blanc</p>
          <p>Presse</p>
          <p>Contact</p>
        </div>
        <div className='col-md'>
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
