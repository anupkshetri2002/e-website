import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newletter from './components/Newletter';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newletter />
    </div>
  );
}

export default App;
