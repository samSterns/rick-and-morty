import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Character extends Component {
    static propTypes = {
      characterName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired, 
      gender: PropTypes.string.isRequired, 
      origin: PropTypes.string.isRequired, 
      location: PropTypes.string.isRequired, 
      img: PropTypes.string.isRequired,

    }
    render() {
      const { characterName, status, species, gender, origin, location, img } = this.props;
      return (
        <>
          <div>
            <h1>{ characterName }</h1>
            <h2>STATUS{ status }</h2>
            <h3>SPECIES{ species }</h3>
            <h3>GENDER { gender }</h3>
            <h3>ORIGIN{ origin }</h3>
            <h3>LAST
            LOCATION{ location }</h3>
            <img src= { img } />
          </div>
        </>
      );
    }
}
