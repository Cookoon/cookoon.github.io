import React from 'react';
import classNames from 'classnames';

class BusinessModalLink extends React.Component {
  render() {
    return (
      <div className='text-center'>
        <a
          href={this.props.url}
          rel="noreferrer noopener"
          className='ml-3'
          target='_blank'
        >
          <i className={classNames('fa-3x', this.props.iconName)}></i>
          <p className='m-0'>{this.props.text}</p>
        </a>
      </div>
    )
  }
}

export default BusinessModalLink;
