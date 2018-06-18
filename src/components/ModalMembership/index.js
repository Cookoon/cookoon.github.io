import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import logo from '../../images/favicon.png';

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
          <ModalBody >
            <div className="text-center">
              <img alt="Cookoon" src={logo} className="mb-4" />
              <p>
                <strong>
                  Vous n'avez pas reçu d'invitation à rejoindre Cookoon par un de
                  nos membres ?<br />
                  Tout n'est pas perdu.
                </strong>
              </p>
            </div>
            <div>
              <a
                href="https://cookoon.typeform.com/to/mEeE1Z"
                className="btn btn-lg btn-light px-5 text-uppercase"
                target="_blank"
                rel="noreferrer noopener"
                onClick={this.sendAnalyticsEvent}
              >
                Je propose mon appartement
              </a>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalMembership;
