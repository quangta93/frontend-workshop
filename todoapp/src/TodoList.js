import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoItem } from './TodoItem';
import { TodoInputForm } from './TodoInputForm';
import { FilterBlock } from './FilterBlock';


let globalCounter = 0;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  margin-right: 15px;
`;

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addItem = description => setTodos(
    todos => [...todos, {
      description,
      id: globalCounter++,
      completed: false,
    }]
  );

  const toggleCompleteState = id => setTodos(
    (todos) => {
      const itemIndex = todos.findIndex(item => (item.id === id));

      const newItem = {
        ...todos[itemIndex],
        completed: !todos[itemIndex].completed,
      };

      return [
        ...todos.slice(0, itemIndex),
        newItem,
        ...todos.slice(itemIndex + 1),
      ];
    }
  );

  const [filterState, setFilterState] = useState('all');
  let displayingTodos = [];

  switch (filterState) {
    case 'completed': {
      displayingTodos = todos.filter(item => item.completed);
      break;
    }

    case 'incompleted': {
      displayingTodos = todos.filter(item => !item.completed);
      break;
    }

    default: {
      displayingTodos = todos;
    }
  }

  return (
    <>
      <BlockContainer>
        <ListContainer>
          {(displayingTodos.length === 0)
            ? 'Nothing to Complete'
            : displayingTodos.map(item => (
              <TodoItem
                {...item}
                key={item.id}
                onToggle={() => toggleCompleteState(item.id)}
              />
            )
          )}
        </ListContainer>

        <FilterBlock value={filterState} onSelect={setFilterState} />
      </BlockContainer>
      <TodoInputForm onSubmit={addItem} />
    </>
  );
};
