import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Navbar from './components/Navbar';
import BooksList from './components/Booklist';
import ThemeContextProvider from './context/ThemeContext';



function App() {
 
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BooksList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
