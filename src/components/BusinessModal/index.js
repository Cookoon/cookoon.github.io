import React from 'react';
import Modal from 'react-responsive-modal';
import BusinessModalLink from '../BusinessModalLink';

export default class App extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <a href='#' onClick={this.onOpenModal}>
          <p>Cookoon for Business <i className="fa fa-sign-in"></i></p>
        </a>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2 className='text-center mb-4'>Cookoon for Business</h2>
          <p>
            Cookoon est un réseau permettant aux entreprises d'organiser déjeuners ou dîners clients,
            journées de formation, petits déjeuners de travail chez des particuliers.
          <br />
            Vous souhaitez vous servir de nos services sur-mesure pour des besoins professionnels ?
          </p>
          <div className='d-flex justify-content-around mt-5'>
            <BusinessModalLink
              text='Etre contacté par le service Business'
              url='https://cookoon.typeform.com/to/xRa4Kl'
              iconName='fa fa-question-circle-o'
            />
            <BusinessModalLink
              text='Je me connecte'
              url='https://app.cookoon.fr/pro'
              iconName='fa fa-sign-in'
            />
          </div>
        </Modal>
      </div>
    );
  }
}
