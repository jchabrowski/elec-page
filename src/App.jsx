import { useEffect, useState } from 'react';
import SmoothScroll from 'smooth-scroll';
import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Features } from './components/features';
import { Header } from './components/header';
import { Navigation } from './components/navigation';
import { Services } from './components/services';
import { Wrapper } from './components/wrapper';
import JsonData from './data/data.json';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Wrapper style={{ border: '1px solid red' }}>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </Wrapper>
  );
};

export default App;
