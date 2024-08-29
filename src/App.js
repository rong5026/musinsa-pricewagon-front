import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './containers/Main/MainPage';
import Footer from './components/Footer/Footer';
import ProductDeatil from './containers/ProductDetail/ProductDeatil';
import ProductCategoryPage from './containers/ProductCategoryPage/ProductCategoryPage';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        {/* <main className="pt-36 pb-12 sm:pt-20 lg:pt-36 xl:pt-40 sm:px-6 max-w-6xl"> */}
        <main className="flex-grow pt-36 pb-12 sm:pt-20 lg:pt-36 xl:pt-40 sm:px-6 max-w-6xl mx-auto">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/:shoptype/products/:id" element={<ProductDeatil />} />
            <Route path='/:shoptype/category/:id' element={<ProductCategoryPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
