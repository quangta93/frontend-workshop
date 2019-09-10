import React from 'react';


const FilterStates = ['all', 'completed', 'incompleted'];

const capitalize = (str = '') => `${str.slice(0, 1).toUpperCase(0)}${str.slice(1)}`;

export const FilterBlock = ({ value, onSelect }) => (
  <div>
    {FilterStates.map(
      state => (
        <div key={state} onClick={() => onSelect(state)}>
          <input
            type="checkbox"
            checked={state === value}
            onChange={() => onSelect(state)}
          />
          &nbsp;{capitalize(state)}
        </div>
      )
    )}
  </div>
);
