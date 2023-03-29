import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, openModal }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li
        className={css.galleryItem}
        key={id}
        onClick={() => openModal(largeImageURL, tags)}
      >
        <img className={css.galleryItemImage} src={webformatURL} alt={tags} />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
