import React, { useState } from 'react';
import styled from 'styled-components';


const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid lightgrey;
  margin-right: 15px;
`;

const Button = styled.button`
  padding: 10px 12px;
  background-color: white;
  border-radius: 4px;
`;

export const TodoInputForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(value);
    setValue(''); // clear input field
  };

  return (
    <Form>
      <Input
        placeholder="Description"
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <Button onClick={handleSubmit} disabled={!value.trim()}>
        Add
      </Button>
    </Form>
  );
}
