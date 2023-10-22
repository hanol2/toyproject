import './style/header.css'
import './style/footer.css'
import './style/banner.css'
import './style/partone.css'
import './style/parttwo.css'
import './style/partFour.css'
import './style/slider.css'
import './style/login.css'
import './style/partThree.css'

import './App.css';
import Headers from './components/Header';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/join" element={<Join></Join>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
