import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';

const Login = () => {

  const idRef = useRef();
  const pwRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('function Login')
    axios.post('/user/login', {
      id: idRef.current.value,
      pw: pwRef.current.value,
    })
  }

  return (
    <div>
      <div className='login-box'>
        <form onSubmit={handleLogin} className='login-form'>
          <h1>로그인</h1>
          <input type="id" placeholder='아이디' ref={idRef}></input><br></br>
          <input type="password" placeholder='비밀번호' ref={pwRef}></input><br></br>
          <button type="submit" className='login-btn'>로그인</button>
          <p>
            <span>• 잠깐! 혹시 처음이신가요? </span>
            <Link to='/join' className='login-form-link'> 회원가입하기</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login