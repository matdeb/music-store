import React from 'react';
import './AlbumEntry.css';

function AlbumEntry(props){
    return (
        <div class="albumEntry">
            <img src={props.entry.artwork} alt="album artwork" width="300" height="300"/>  
            <div class="artistAlbum">{props.entry.artist} - {props.entry.album}</div>
            <div class="year">{props.entry.year}</div>
        </div>
    );
}

export default AlbumEntry;
