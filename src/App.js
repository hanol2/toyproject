import logo from './logo.svg';
import './style/header.css'
import './style/footer.css'
import './style/main.css'
import './style/carousel.css'
import './style/partone.css'
import './App.css';
import Headers from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PartOne from './components/PartOne';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

function App() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
  return (
    <div>
      <Headers></Headers>
      <Main></Main>
      <PartOne></PartOne>
      <Footer></Footer>
    </div>
  );
}

export default App;
