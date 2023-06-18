import './App.css';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import ProductPage from './components/ProductPage/ProductPage'

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <ProductPage /> */}
      <Footer />
    </div>
  );
}

export default App;
