import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/main';
import ToDo from './pages/todo';
import styled from 'styled-components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  { path: '/todo', element: <ToDo /> },
]);

export default function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
