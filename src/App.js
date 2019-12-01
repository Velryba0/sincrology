import React from 'react';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

import './sass/app.styles.scss';

function App() {
  return (
   
    <>
		<Header/>
		<SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    </>
  );
}

export default App;
