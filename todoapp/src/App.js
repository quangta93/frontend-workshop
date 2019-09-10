import React from 'react';
import styled from 'styled-components';
import { TodoList } from './TodoList';


const Container = styled.div`
  width: 75%;
  margin: 30px auto;
  padding: 15px 30px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);

  * {
    font-size: 14px;
    font-weight: 500;
  }
`;

const Title = styled.h3`
  font-size: 18.25px;
  font-weight: 700;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

export default () => (
  <Container>
    <Title>TODO LIST</Title>
    <TodoList />
  </Container>
);
