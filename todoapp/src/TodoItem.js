import React from 'react';


export const TodoItem = ({
  id,
  description,
  completed,
  onToggle,
  onRemove,
}) => (
  <div>{description}</div>
);
