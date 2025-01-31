import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from './components/header';
import { Home } from './components/home';
import { About } from './components/about';
import { Portfolio } from './components/portfolio';
import { Contact } from './components/contact';
import {Footer} from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
