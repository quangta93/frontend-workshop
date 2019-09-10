import React from 'react';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { TodoList } from './TodoList';


const Container = styled(Paper)`
  width: 50%;
  margin: 30px auto;
  padding: 15px 30px;
`;

export default () => (
  <Container>
    <h3>TODO LIST</h3>
    <TodoList />
  </Container>
);
