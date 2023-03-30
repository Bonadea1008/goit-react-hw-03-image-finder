import { Component } from 'react';
import { fetchImages } from 'services';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import PropTypes from 'prop-types';
import css from './App.module.css';

const imagePerPage = 12;

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    modalImage: '',
    modalAlt: '',
    error: '',
    isLoad: false,
    loadMore: false,
    showModal: false,
  };

  componentDidMount() {
    console.log('didMount');
  }

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery.trim() === '') {
      return;
    }
    if (prevState.searchQuery !== searchQuery) {
      this.setState({ images: [], page: 1, isLoad: true, loadMore: false });
      this.getImages(searchQuery);
    }

    if (prevState.searchQuery === searchQuery && prevState.page < page) {
      this.setState({ isLoad: true });
      this.getImages(searchQuery);
    }
  }

  getImages = query =>
    fetchImages(query, this.state.page)
      .then(images => {
        if (images.hits.length === 0) {
          return alert('No image found');
        }
        this.setState(prevState => {
          return {
            loadMore: this.state.page < Math.ceil(images.total / imagePerPage),
            images: [...prevState.images, ...images.hits],
          };
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoad: false });
      });

  searchHandler = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  loadMoreHandler = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  openModal = (image, tags) => {
    this.setState({
      modalImage: image,
      modalAlt: tags,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalImage: '',
      modalAlt: '',
      showModal: false,
    });
  };

  render() {
    const { images, isLoad, error, loadMore, showModal, modalImage, modalAlt } =
      this.state;

    return (
      <div className={css.app}>
        <Searchbar searchHandler={this.searchHandler} />
        {isLoad && <Loader />}
        {error && <h1>{error.message}</h1>}
        {images && <ImageGallery images={images} openModal={this.openModal} />}
        {showModal && (
          <Modal
            modalImage={modalImage}
            modalAlt={modalAlt}
            closeModal={this.closeModal}
          />
        )}
        {loadMore && <Button onLoadMoreClick={this.loadMoreHandler} />}
      </div>
    );
  }
}

App.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  modalImage: PropTypes.string,
  modalAlt: PropTypes.string,
  error: PropTypes.string,
  isLoad: PropTypes.bool,
  loadMore: PropTypes.bool,
  showModal: PropTypes.bool,
};
