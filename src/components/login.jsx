import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { joinWithAxios, loginWithAxios } from '../axios/axios';

export default function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePw = (e) => setPassword(e.target.value);

  const emailTest = /\w+@\w+\.\w+/gi;
  const pwTest = /[\w-\W]{8,}/gi;

  useEffect(() => {
    if (emailTest.test(email) && pwTest.test(password)) {
      setValid(true);
    }
  }, [email, password]);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      navigate('/todo');
    }
  }, []);

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginWithAxios(email, password);
      localStorage.setItem('token', response.data.access_token);
      navigate('/todo');
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitJoin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginWithAxios(email, password);
      localStorage.setItem('token', response.data.access_token);
      navigate('/todo');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={login ? onSubmitLogin : onSubmitJoin}>
      <Input
        value={email}
        onChange={onChangeEmail}
        type='email'
        placeholder='이메일을 입력해주세요'
      />
      <Input
        value={password}
        onChange={onChangePw}
        type='password'
        placeholder='비밀번호를 입력해주세요'
        autoComplete='off'
      />
      <LoginBtn disabled={valid ? false : true}>
        {login ? '로그인' : '회원가입'}
      </LoginBtn>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #dff9fb;
`;
const Input = styled.input`
  width: 50%;
  height: 30px;
  margin-bottom: 10px;
  font-size: medium;
`;
const LoginBtn = styled.button`
  width: 20%;
  height: 40px;
  margin-top: 10px;
  font-size: medium;
  border-radius: 10px;
`;
