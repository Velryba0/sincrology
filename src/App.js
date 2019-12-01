import React from 'react';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

import './sass/app.styles.scss';

function App() {
  return (
   
    <>
		<Header/>
		<SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    </>
  );
}

export default App;
