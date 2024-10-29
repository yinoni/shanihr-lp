import React, { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);

    const onContactMeBtnClick = () => {
        ref.current && ref.current.scrollIntoView( {behavior: "smooth"}); 
    } 

    return (
    <div className='container'>
        <HeadingSec onBtnClick={onContactMeBtnClick} />
        <SolutionSec />
        <ReviewsSection />
        <div ref={ref} className='contact-me-section'>
          <ContactMe />
        </div>
        <Footer />
        <img src={blob3} alt="blob" className="blob blob3-img" />
        <img src={blob2} alt="blob" className="blob blob1-img" />

    </div>
  );
}

export default App;
