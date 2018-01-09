import React, { Component } from 'react';
import CreateEntry from './CreateEntry';
import AlbumEntry from './AlbumEntry';

class MusicCatalogue extends React.Component {
    constructor(props) {
        super(props);
        this.addEntry = this.addEntry.bind(this);
        this.state = {
            entries: [],
        }
    };

    addEntry(entry){
        const newEntries = this.state.entries.slice();
        newEntries.push({...entry});
        this.setState({entries: newEntries});   
        console.log(newEntries);
    }
    
    render() {
        return (
        <div class="MusicCatalogue">
        <CreateEntry addEntry={this.addEntry} />
        {this.state.entries.map(function(element){
            return <AlbumEntry entry = {element} />;
        })}
        </div>
        ); 
    }
}

export default MusicCatalogue;