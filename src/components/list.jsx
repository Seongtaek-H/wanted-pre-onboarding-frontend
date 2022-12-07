import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { deleteTodo, updateTodo } from '../axios/axios';

export default function List({ props, fetchData }) {
  const { id, todo, isCompleted, userId } = props;
  const [updateStatus, setUpdateStatus] = useState(false);
  const [updateText, setUpdateText] = useState(todo);
  const [updateIsCompleted, setUpdateIsCompleted] = useState(isCompleted);

  const onClickDelete = () => {
    deleteTodo(id).then(() => {
      fetchData();
      alert('삭제 완료');
    });
  };

  const update = async () => {
    await updateTodo(id, updateText, updateIsCompleted).then(() => {
      fetchData();
    });
    setUpdateStatus(false);
  };

  const onChangeText = (e) => setUpdateText(e.target.value);
  const onClickCheckbox = (e) => {
    setUpdateIsCompleted(e.target.checked);
  };

  useEffect(() => {
    update();
  }, [updateIsCompleted]);

  return (
    <Container>
      <ContextContainer>
        <Chcekbox
          type='checkbox'
          checked={updateIsCompleted}
          onChange={onClickCheckbox}
        />
        {updateStatus ? (
          <Input value={updateText} onChange={onChangeText} />
        ) : (
          <Todo>{todo}</Todo>
        )}
      </ContextContainer>

      <ButtonContainer>
        {updateStatus ? (
          <>
            <Button onClick={update}>완료</Button>
            <Button onClick={() => setUpdateStatus(false)}>취소</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setUpdateStatus(true)}>수정</Button>
            <Button onClick={onClickDelete}>삭제</Button>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 10px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid grey;
`;

const ContextContainer = styled.div`
  display: flex;
`;
const Chcekbox = styled.input``;
const Input = styled.input`
  margin-left: 25px;
  width: 250px;
  font-size: 16px;
`;
const Todo = styled.div`
  margin-left: 25px;
`;
const ButtonContainer = styled.div`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-left: 5px;
  width: 50px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: medium;
  background-color: #ffbe76;
  cursor: pointer;
  :hover {
    background-color: #f0932b;
  }
`;
