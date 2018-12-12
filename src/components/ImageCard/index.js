import React from 'react';
import './image-card.scss';

class ImageCard extends React.Component {
  render() {
    return (
      <div className='image-card' style={{ backgroundImage: `url(${this.props.background})` }}>
        <div className='image-card-text'>
          <p>
            {this.props.text}
          </p>
        </div>
      </div>
    )
  }
}

export default ImageCard;
