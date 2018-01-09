import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEntry from './CreateEntry';
import AlbumEntry from './AlbumEntry';
import MusicCatalogue from './MusicCatalogue';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <MusicCatalogue />
      </div>
      
    );
  }
}

export default App;
