import React, { useState } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  // About, Portfolio, Contact, Resume

  const [categories] = useState([
    { name: 'About', description: 'Who am I? What is my story?' },
    { name: 'Projects', description: 'The projects I deem worthy of showing.' },
    { name: 'Contact', description: 'Contact me about your next project!' },
    { name: 'Resume', description: 'A more traditional resume.' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <div>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}  
      />
      <main>
        <Content currentCategory={currentCategory} />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
