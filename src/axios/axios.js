import axios from 'axios';
import { setInterceptors } from './interceptor';

const axiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  headers: { 'Content-Type': 'application/json' },
});

function instanceWithToken() {
  const instance = axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return setInterceptors(instance);
}

const axiosWithToken = instanceWithToken();

const createTodo = (todo) => {
  return axiosWithToken({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

const getTodos = () => {
  return axiosWithToken({
    method: 'get',
    url: '/todos',
  });
};

const updateTodo = (id, todo, isCompleted) => {
  return axiosWithToken({
    method: 'put',
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};

const deleteTodo = (id) => {
  return axiosWithToken({
    method: 'delete',
    url: `/todos/${id}`,
  });
};

const loginWithAxios = (email, password) => {
  return axiosInstance({
    method: 'post',
    url: '/auth/signin',
    data: {
      email,
      password,
    },
  });
};

const joinWithAxios = (email, password) => {
  return axiosInstance({
    method: 'post',
    url: '/auth/signup',
    data: {
      email,
      password,
    },
  });
};

export {
  loginWithAxios,
  joinWithAxios,
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
