import React from 'react';

import logo from '../../images/logo.png';
import backgroundImage from './backgroundImage.jpg';
import appScreen from './appScreen.jpg';
import DeviceFrame from '../DeviceFrame';

const Banner = ({ children }) => (
  <div
    className="banner background-hidden-sm"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-7 offset-lg-1 col-lg-6 offset-xl-2 col-xl-5 text-center text-md-left">
          <img alt="Cookoon" src={logo} className="mb-4" />
          {children}
        </div>
        <div className="col-md-5 col-lg-4 offset-xl-1 col-xl-3 d-flex justify-content-center">
          <DeviceFrame>
            <img alt="Application Cookoon" src={appScreen} />
          </DeviceFrame>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
