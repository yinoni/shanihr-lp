import React from 'react';
import HeadingSec from './components/HeadingSec';
import SolutionSec from './components/SolutionSec';
import AboutSec from './components/AboutSec';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ReviewsSection from './components/ReviewsSection';
import './style/styles.css';
import blob2 from './assets/blob2.svg';
import blob3 from './assets/blob3.svg';

function App() {
  return (
    <div className='container'>
        <img src={blob3} alt="blob" className="blob blob3-img" />
        <HeadingSec />
        <SolutionSec />
        <AboutSec />
        <ReviewsSection />
        <ContactMe />
        <Footer />
        <img src={blob2} alt="blob" className="blob blob1-img" />

    </div>
  );
}

export default App;
