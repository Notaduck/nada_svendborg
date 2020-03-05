import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={17}
                initialCenter={{
                    lat: 55.0626383,
                    lng: 10.6108796
                }}
                style={{
                    width: '100%',
                    height: '50%',
                }}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        {/* <h1>{this.state.selectedPlace.name</h1> */}
                        <h1> Tester </h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
})(MapContainer)


