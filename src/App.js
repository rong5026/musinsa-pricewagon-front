import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './containers/MainPage/MainPage';

function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen">     <Header />
       <main className="flex-grow pt-20">
      <Routes>
          <Route exact path="/" element={<MainPage />} />
          {/* <Route path="/header" element={<Header />} /> */}
      </Routes>
      </main>


      <Footer/>
      </div>
 
    </Router>
  );
}

export default App;
