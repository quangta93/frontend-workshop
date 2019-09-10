import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import { TodoInputForm } from './TodoInputForm';


let globalCounter = 0;

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addItem = description => setTodos(
    todos => [...todos, {
      description,
      id: globalCounter++,
      completed: false,
    }]
  );

  const removeItem = id => setTodos(
    todos => todos.filter(item => (item.id !== id))
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

  return (
    <div>
      {todos.map(item => (
        <TodoItem
          {...item}
          key={item.id}
          onRemove={() => removeItem(item.id)}
          onToggle={() => toggleCompleteState(item.id)}
        />
      ))}

      <TodoInputForm onSubmit={addItem} />
    </div>
  );
};
