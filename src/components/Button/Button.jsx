import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

export const Button = ({ page, onLoadMoreClick }) => {
  return (
    <button
      type="button"
      className={css.button}
      onClick={() => onLoadMoreClick(page)}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  page: PropTypes.number,
  onLoadMoreClick: PropTypes.func,
};
