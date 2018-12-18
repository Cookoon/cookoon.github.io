import React from 'react';

import ImageCard from '../ImageCard';
import highlight1 from '../../images/cookoon-highlight-1.png';
import highlight2 from '../../images/cookoon-highlight-2.png';
import highlight3 from '../../images/cookoon-highlight-3.png';

const Highlights = () => (
  <div className="container">
    <div className="row">
      <div className="col-md mt-4">
        <ImageCard background={highlight1} text='Un cadre unique' />
      </div>
      <div className="col-md mt-4">
        <ImageCard background={highlight2} text='Un chef privé' />
      </div>
      <div className="col-md mt-4">
        <ImageCard background={highlight3} text='Un service sur-mesure' />
      </div>
    </div>
  </div>
)

export default Highlights;
