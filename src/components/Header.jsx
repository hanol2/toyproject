import React from 'react'
import mainLogo from '../img/main.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='header'>
            <img className='logo' src={mainLogo}></img>
            <div>
                <Link to="/intro" className="nav-list">회사소개</Link>
                <Link to="/intro" className="nav-list">서비스</Link>
                <Link to="/intro" className="nav-list">함께가치</Link>
                <Link to="/intro" className="nav-list">뉴스룸</Link>
                <Link to="/intro" className="nav-list">글꼴</Link>
                <Link to="/intro" className='music'>음악</Link>
                <span>BETA</span>
            </div>
            <div className='rt-nav'>
                <Link to="/intro" className="nav-list">로그인</Link>
                <Link to="/intro" className="nav-list">회원가입</Link>
            </div>
        </nav>
    )
}

export default Header

