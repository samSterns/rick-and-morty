import React, { Component } from 'react';

export default class DataListElement extends Component {
  render() {
    const { characterName,
      status, species, gender, origin, location, img } = this.props;

    return (
      <>
        <dt>{ characterName }</dt>
        <dd>{ status }</dd>
        <dd>{ species }</dd>
        <dd>{ gender }</dd>
        <dd>{ origin }</dd>
        <dd>{ location }</dd>
        <dd>{ img }</dd>
      </>
    );
  }
}
