import css from '../ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, children }) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem images={images} />
    </ul>
  );
};
