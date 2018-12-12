import React from 'react';
import './banner-card.scss';

class BannerCard extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='banner-card' style={{ backgroundImage: `url(${this.props.background})` }}>
          <div className='banner-card-text'>
            <h3>
              Faites de toutes vos réceptions un moment d’exception.
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerCard;
