import React from 'react';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import SectionEight from './components/SectionEight';
import SectionNine from './components/SectionNine';
import Footer from './components/Footer';
import './sass/app.styles.scss';

function App() {
  return (
    <>
	<Header/>
	<SectionOne/>
	<SectionTwo/>
	<SectionThree/>
	<SectionFour/>
	<SectionFive/>
	<SectionSix/>
	<SectionSeven/>
	<SectionEight/>
	<SectionNine/>
	<Footer/>
    </>
  );
}

export default App;
