import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Hero from './components/Hero/Hero';
import Blog from './components/Blog/Blog';
import FaqCategories from './components/Faq/FaqCategories/FaqCategories';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Hero/>
          <MainPages />
          <Blog/>
          <FaqCategories/>
          <Footer/>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
