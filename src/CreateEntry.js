import React, { Component } from 'react';
import AlbumEntry from "./AlbumEntry";

class CreateEntry extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.addEntry = props.addEntry;
        this.state = {
            album: "",
            artist: "",
            year: "",
            artwork: "",
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAdd(event){
        this.props.addEntry(this.state);
        this.setState({
            album: "",
            artist: "",
            year: "",
            artwork: "",
        });
    }

    render() {
        return (
            <div class="createAlbum">
                <div>
                    Artist: <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange} />
                    Album: <input type="text" name="album" value={this.state.album} onChange={this.handleChange} />
                    Year: <input type="text" name="year" value={this.state.year} onChange={this.handleChange} />
                    Artwork: <input type="text" name="artwork" value={this.state.artwork} onChange={this.handleChange} />
                </div>
                <AlbumEntry
                    entry={{...this.state}} />
                <button className="add" onClick={this.handleAdd}>
                    add
                    </button>
            </div>
        );
    }
}


export default CreateEntry;

