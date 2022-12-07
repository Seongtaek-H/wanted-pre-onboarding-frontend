import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createTodo, getTodos } from '../axios/axios';
import todoListFilter from './filter';
import List from './list';

export default function Lists() {
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const filters = ['All', 'Completed', 'Uncompleted'];
  const [filter, setFilter] = useState(filters[0]);

  const onChangeValue = (e) => setInputValue(e.target.value);

  const onClickAdd = () => {
    setTodo(inputValue);
    setInputValue('');
  };

  const fetchData = async () => {
    if (todo !== '') {
      await createTodo(todo);
      setTodo('');
    }
    const response = await getTodos();
    setTodoList([...response.data]);
  };

  useEffect(() => {
    fetchData();
  }, [todo]);

  const todoListWithFilter = todoListFilter(todoList, filter);

  return (
    <Container>
      <FilterContainer>
        {filters.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setFilter(filters[index])}
              style={{ color: `${filter === item ? '#eb4d4b' : 'black'}` }}
            >
              {item}
            </button>
          );
        })}
      </FilterContainer>
      <ListContainer>
        {todoListWithFilter.map((item) => (
          <List key={item.id} props={item} fetchData={fetchData} />
        ))}
      </ListContainer>
      <InputContainer>
        <Input
          placeholder='할 일을 추가해보세요'
          value={inputValue}
          onChange={onChangeValue}
        />
        <InputBtn onClick={onClickAdd}>추가</InputBtn>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin: 0 10px;
    border: none;
    padding: 12px 10px;
    font-size: medium;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
  }
`;
const ListContainer = styled.div`
  width: 95%;
  height: 80%;
  overflow-y: scroll;
  padding: 0 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 10%;
`;
const Input = styled.input`
  border: none;
  border-radius: 10px;
  width: 60%;
  height: 50%;
  padding-left: 15px;
  font-size: large;
  font-weight: 500;
`;
const InputBtn = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #ffbe76;
  margin-left: 10px;
  width: 15%;
  height: 60%;
  font-size: large;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: #f0932b;
  }
`;
