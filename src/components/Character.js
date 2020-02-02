import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';


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
      const { status, species, gender, origin, location, img } = this.props;
      return (
        <>
          <article className={styles.characterCard}>
            <div className={styles.cardHeader}>
              <img src={img} className={styles.charImg}></img>
              <h2 className={styles.characterName}>{name}</h2>
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.stats}>
                <span className={styles.span}>Status</span>
                <p className={styles.pStat}>{status}</p>
              </div>
              <div className={styles.stats}>
                <span className={styles.span}>Species</span>
                <p className={styles.pStat}>{species}</p>
              </div>
              <div className={styles.stats}>
                <span className={styles.span}>Gender</span>
                <p className={styles.pStat}>{gender}</p>
              </div>
              <div className={styles.stats}>
                <span className={styles.span}>Origin</span>
                <p className={styles.pStat}>{origin}</p>
              </div>
              <div className={styles.stats}>
                <span className={styles.span}>Last Location</span>
                <p className={styles.pStat}>{location}</p>
              </div>
            </div>
          </article>
        </>
      );
    }
}
