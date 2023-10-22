import React, { useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from '../axios';

const Join = () => {

  const nav = useNavigate();

  const idRef = useRef();
  const pw1Ref = useRef();
  const pw2Ref = useRef();

  const handleJoin = (e) => {
    e.preventDefault();
    console.log('function Join')
    axios.post('/user/join', {
      id: idRef.current.value,
      pw1: pw1Ref.current.value,
      pw2: pw2Ref.current.value,
    }).then ((res)=>{
      console.log(res.data)
    })
  }

  return (
    <div>
      <div className='join-box'>
        <form onSubmit={handleJoin} className='login-form'>
          <h1>회원가입</h1>
          <div className='join-text'>아이디</div>
          <input type="id" placeholder='아이디' ref={idRef}></input><br></br>
          <div className='join-text'>비밀번호</div>
          <input type="password" placeholder='비밀번호' ref={pw1Ref}></input><br></br>
          <div className='join-text'>비밀번호 확인</div>
          <input type="password" placeholder='비밀번호' ref={pw2Ref}></input><br></br>
          <div></div>
          <button type="submit" className='login-btn'>등록하기</button>
          <p>
            <span>• 이미 아이디가 있으신가요? </span>
            <Link to='/login' className='login-form-link'> 로그인하기</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Join