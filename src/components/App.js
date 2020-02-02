import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import martyImg from '../asset/58.jpeg';
import martyImg1 from '../asset/128.jpeg';
import martyImg2 from '../asset/138.jpeg';
import martyImg3 from '../asset/148.jpeg';
import martyImg4 from '../asset/188.jpeg';
import martyImg5 from '../asset/288.jpeg';
import martyImg6 from '../asset/img1.jpeg';
import martyImg7 from '../asset/img2.jpeg';

export default class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg}          
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg1}          
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg2}
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg3}
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg4}
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg5} 
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg6}          
        >
        </Character>
        <Character
          characterName='Marty'
          status='alive' 
          species='human'
          gender='glomon'
          origin='Mars' 
          location='Earth' 
          img={martyImg7}
        >
        </Character>
        <Footer></Footer>
      </>
    );
  }
}

