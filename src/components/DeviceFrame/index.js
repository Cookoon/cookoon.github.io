import React from 'react';

import deviceFrame from './deviceFrame.png';

const DeviceFrame = ({ children }) => (
  <div className="device-frame">
    <div className="screen">{children}</div>
    <div className="frame">
      <img src={deviceFrame} />
    </div>
  </div>
);

export default DeviceFrame;
