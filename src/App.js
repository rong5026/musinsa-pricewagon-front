import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import FooterMenu from './components/Footer/Footer';
import MainPage from './containers/MainPage/MainPage';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="sub_wrapper">
          <Header />
          <main className="pt-16 sm:pt-20 lg:pt-36 xl:pt-40 relative flex-grow border-b-2 h-auto ">
            
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              {/* <Route path="/header" element={<Header />} /> */}
            </Routes>
          </main>
          {/* <FooterMenu /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
