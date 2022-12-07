import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Lists from '../components/lists';

export default function ToDo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      navigate('/');
    }
  }, []);

  const onClick = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <ButtonContainer>
        <Button onClick={onClick}>로그아웃</Button>
      </ButtonContainer>
      <ListsContainer>
        <Lists />
      </ListsContainer>
    </>
  );
}

const ListsContainer = styled.div`
  width: 550px;
  height: 500px;
  background-color: #dff9fb;
  box-shadow: 5px 5px 16px -1px rgba(0, 0, 0, 0.6);
`;
const ButtonContainer = styled.div`
  width: 550px;
  height: 30px;
  margin-top: -50px;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  font-size: medium;
  font-weight: 600;
  margin-right: 5px;
  cursor: pointer;
  background-color: transparent;
  :hover {
    color: #f0932b;
  }
`;
