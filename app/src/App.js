import './style/header.css'
import './style/footer.css'
import './style/banner.css'
import './style/partone.css'
import './style/parttwo.css'
import './style/partFour.css'
import './style/slider.css'
import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Headers></Headers>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
