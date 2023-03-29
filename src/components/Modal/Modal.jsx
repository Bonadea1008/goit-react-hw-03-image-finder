import { Component } from 'react';
import css from '../Modal/Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscModal);
  }

  closeEscModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalAlt, modalImage } = this.props;
    return (
      <>
        <div className={css.overlay} onClick={this.handleBackDropClick}>
          <div className={css.modal}>
            <img src={modalImage} alt={modalAlt} />
          </div>
        </div>
      </>
    );
  }
}
