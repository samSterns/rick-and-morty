import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataListElement from './DataListElement';

export default class Character extends Component {
    static propTypes = {
      characterName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired, 
      gender: PropTypes.string.isRequired, 
      origin: PropTypes.string.isRequired, 
      location: PropTypes.string.isRequired, 
      img: PropTypes.img.isRequired,

    }
    render() {
      const { characterName,
        status, species, gender, origin, location, img } = this.props;
      return (
        <>
          <dt>
            <DataListElement title="Character Name" 
              description={characterName}/>
            <DataListElement title="Status" 
              description={status}/>
            <DataListElement title="Species" 
              description={species}/>
            <DataListElement title="Gender" 
              description={gender}/>
            <DataListElement title="Origin" 
              description={origin}/>
            <DataListElement title="Character Name" 
              description={location}/>
            <DataListElement title="Character Name" 
              description={img}/>
          </dt>
        </>
      );
    }
}
