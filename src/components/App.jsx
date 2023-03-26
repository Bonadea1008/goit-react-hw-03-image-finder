import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoad: false,
  };

  searchHandler = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  render() {
    return (
      <div>
        <Searchbar searchHandler={this.searchHandler} />
      </div>
    );
  }
}
