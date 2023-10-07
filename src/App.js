import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newletter from './components/Newletter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;
