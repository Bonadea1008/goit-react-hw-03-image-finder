import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import css from '../Searchbar/Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  inputHandler = ({ target }) => {
    this.setState({
      searchQuery: target.value,
    });
  };

  searchSubmit = e => {
    e.preventDefault();

    this.props.searchHandler(this.state.searchQuery);

    this.resetSearch();
  };

  resetSearch = () => {
    this.setState({
      searchQuery: '',
    });
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.searchSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <AiOutlineSearch className={css.searchFormButtonLabel} />
          </button>
          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputHandler}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}
