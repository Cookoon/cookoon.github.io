import React from 'react';
import Link from 'gatsby-link';
import AxaLogo from '../../images/axa_logo_white.png'
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
          <Link to="/devenir-hote">
            <p>Devenir Hôte</p>
          </Link>
          <Link to="/garanties">
            <p>Les garanties</p>
          </Link>
          <Link to="/conditions-generales">
            <p>Conditions Générales d’Utilisation</p>
          </Link>
        </div>
        <div className='col-md mt-2'>
          <Link to="/livre-blanc">
            <p>Le livre blanc</p>
          </Link>
          <a
            href="mailto:Cookoon<presse@cookoon.fr>"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Presse</p>
          </a>
          <a
            href="mailto:Concierge Cookoon<concierge@cookoon.fr>"
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>Contact</p>
          </a>
        </div>
        <div className='col-md mt-2'>
          <p> Retrouvez Cookoon sur votre smartphone</p>
          <div className='d-flex mt-2'>
            <a
              href="https://itunes.apple.com/fr/app/cookoon-inside/id1291943406"
              target="_blank"
            >
              <img className='app-logo' alt="App store" src={appStoreBadge} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=cookoon.cookoonandroid"
              target="_blank"
            >
              <img className='app-logo ml-2' alt="Play store" src={googlePlayBadge} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
