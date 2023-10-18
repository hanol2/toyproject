import React from 'react'
import mainLogo from '../img/main.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={mainLogo}></img>
            <div>
                <Link to="/intro" className="nav-list">회사소개</Link>
                {/* <ul>
            <li>
                <Link>우아한 문화</Link>
            </li>
            <li>
                <Link>히스토리</Link>
            </li>
            <li>
                <Link>지속가능 경영</Link>
            </li>
        </ul> */}
                <Link to="/intro" className="nav-list">서비스</Link>
                <Link to="/intro" className="nav-list">함께가치</Link>
                <Link to="/intro" className="nav-list">뉴스룸</Link>
                <Link to="/intro" className="nav-list">글꼴</Link>
                <Link to="/intro" className='music'>음악</Link>
                <span>BETA</span>
            </div>
            <div className='rt-nav'>
                <Link to="/intro" className="nav-list">배민다움</Link>
                <Link to="/intro" className="nav-list">인재영입</Link>
            </div>
        </nav>
    )
}

export default Header

