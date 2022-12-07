import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from '../components/login';

export default function Main() {
  const [login, setLogin] = useState(true);

  const onClickLoginMenu = () => setLogin(true);
  const onClickJoinMenu = () => setLogin(false);

  return (
    <FormContainer>
      <MenuBtnContainer>
        <LoginPageBtn
          onClick={onClickLoginMenu}
          backgoundColor={login ? '#dff9fb' : '#95afc0'}
          color={login ? 'tomato' : 'black'}
        >
          로그인
        </LoginPageBtn>
        <JoinPageBtn
          onClick={onClickJoinMenu}
          color={!login ? 'tomato' : 'black'}
          backgoundColor={!login ? '#dff9fb' : '#95afc0'}
        >
          회원가입
        </JoinPageBtn>
      </MenuBtnContainer>
      <InputContainer>
        <Login login={login} />
      </InputContainer>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 485px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.6);
`;
const MenuBtnContainer = styled.div`
  width: 100%;
  height: 15%;
`;
const LoginPageBtn = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.backgoundColor};
  color: ${(props) => props.color};
  font-size: large;
  font-weight: 600;
  cursor: pointer;
`;
const JoinPageBtn = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  background-color: white;
  cursor: pointer;
  background-color: ${(props) => props.backgoundColor};
  color: ${(props) => props.color};
  font-size: large;
  font-weight: 600;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
`;
