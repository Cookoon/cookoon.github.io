import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../../images/favicon.png';
import './membershipModal.scss'

class ModalMembership extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  sendAnalyticsEvent() {
    if (typeof ga === 'function') {
      ga('send', 'event', 'HostCTA', 'click', 'index');
    }
  };

  render() {
    return (
      <div>
        <Button className="btn btn-lg btn-light px-5 text-uppercase" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered>
          <ModalHeader toggle={this.toggle} className='membership-header' />
          <ModalBody >
            <div className="text-center membership-intro">
              <img alt="Cookoon" src={logo} className="mb-4" />
              <p>
                <strong>
                  Vous n'avez pas reçu d'invitation à rejoindre Cookoon par un de
                  nos membres ?<br />
                  Tout n'est pas perdu.
                </strong>
              </p>
            </div>
            <div className="membership-actions text-center">
              <div className='membership-action'>
                <a
                  href="https://cookoon.typeform.com/to/iY7Heh"
                  className="btn btn-primary btn-block rounded-0"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={this.sendAnalyticsEvent}
                >
                  JE PROPOSE MON APPARTEMENT
                </a>
                <p className='py-3'>
                  Grand loft ou petit appartement cosy ? <br />
                  Qu'il puisse accueillir un dîner grand siècle ou un entretien
                  professionnel, votre appartement est peut-être la clef pour
                  rejoindre Cookoon.
                </p>
              </div>
              <div className="hr small text-primary text-center pt-2 mb-4">
                <div className="rule"></div>
                <p>ou</p>
                <div className="rule"></div>
              </div>
              <div className='membership-action'>
                <a
                  href="https://cookoon.typeform.com/to/mEeE1Z"
                  className="btn btn-primary btn-block rounded-0"
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={this.sendAnalyticsEvent}
                >
                  JE ME PRÉSENTE
                </a>
                <p className='py-3'>
                  Faites-nous parvenir votre candidature, elle sera inscrite sur
                  la liste d'attente et examinée avec bienveillance par un comité
                  de membres.
                </p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalMembership;