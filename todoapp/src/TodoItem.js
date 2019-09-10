import React from 'react';
import styled from 'styled-components';


const StyledTodoItem = styled.div`
  padding: 6px;
`;

const Description = styled.span`
  text-decoration: ${
    props => (props.completed ? 'line-through' : 'normal')
  };
`;

export const TodoItem = ({ description, completed, onToggle }) => (
  <StyledTodoItem onClick={onToggle}>
    <input
      type="checkbox"
      checked={completed}
      onChange={onToggle}
    />

    <Description completed={completed}>
      {description}
    </Description>
  </StyledTodoItem>
);
