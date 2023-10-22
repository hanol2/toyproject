import React, { useEffect, useState} from 'react';
import mainLogo from '../img/main.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
        
        const nav = useNavigate();
        const [showButton, setShowButton] = useState(false);
    
        const scrollToTop = () => {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
    
        }
        useEffect(() => {
            const handleShowButton = () => {
                if (window.scrollY > 500) {
                    setShowButton(true)
                } else {
                    setShowButton(false)
                }
            }
    
            console.log(window.scrollY)
            window.addEventListener("scroll", handleShowButton)
            return () => {
                window.removeEventListener("scroll", handleShowButton)
            }
        }, [])
    
    return (
        <div>
            <nav className='header'>
                <img className='logo' src={mainLogo} onClick={()=>nav('/')}></img>
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
                    <Link to="/login" className="nav-list">로그인</Link>
                    <Link to="/join" className="nav-list">회원가입</Link>
                </div>
            </nav>
            <div className="scroll-box">
                <button className='top-btn' onClick={scrollToTop}> Top</button>
            </div>
        </div>
    )
}

export default Header

