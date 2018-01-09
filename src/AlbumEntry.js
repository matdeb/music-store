import React from 'react';
import './AlbumEntry.css';

function AlbumEntry(props){
    return (
        <div class="albumEntry">
            <img src={props.artwork} alt="album artwork" width="300" height="300"/>  
            <div class="artistAlbum">{props.artist} - {props.album}</div>
            <div class="year">{props.year}</div>
        </div>
    );
}

export default AlbumEntry;
