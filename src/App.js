import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumEntry from './AlbumEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <AlbumEntry artist = "Led Zepplin" album = "IV" year ="1992" artwork="https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg" />
        <AlbumEntry artist = "Miles Davies" album = "Kind of Blue" year ="1991" artwork="https://images-na.ssl-images-amazon.com/images/I/81CP1j-zprL._SY450_.jpg" />
        <AlbumEntry artist = "Jose Gonzales" album = "In Our Nature" year ="1995" artwork="https://upload.wikimedia.org/wikipedia/en/c/c3/JoseGonzalez-InNature.jpg" />
      </div>
      
    );
  }
}

export default App;
