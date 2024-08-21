import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MobileNavBar from './components/Navbar/MobileNavBar';
import MainPage from './containers/Main/MainPage';
import Footer from './components/Footer/Footer';
import ProductDeatil from './containers/ProductDetail/ProductDeatil';
import ProductList from './containers/ProductList/ProductList';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="pt-36 pb-12 sm:pt-20 lg:pt-36 xl:pt-40 sm:px-6 max-w-6xl">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/product" element={<ProductDeatil />} />
            <Route path='/products' element={<ProductList/>} />
          </Routes>
        </main>
        {/* <MobileNavBar /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
