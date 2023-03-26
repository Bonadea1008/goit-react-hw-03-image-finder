import { Component } from 'react';
import { fetchImages } from 'services';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoad: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== this.state.searchQuery) {
      fetchImages(searchQuery)
        .then(res => res.json())
        .then(images =>
          this.setState({
            images: images.hits,
          })
        );
    }
  }

  searchHandler = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar searchHandler={this.searchHandler} />
        {images && <ImageGallery images={images} />}
      </div>
    );
  }
}
