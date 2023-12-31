import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import Home from './Pages/Home/home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from './Pages/Course/notes';

function App() {
  return (
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/notes" element={<Notes />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
