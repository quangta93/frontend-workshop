import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, IconButton, InputBase } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';


const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: space-between;
`;

export const TodoInputForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(value);
    setValue(''); // clear input field
  };

  return (
    <Form noValidate autoComplete="off">
      <InputBase
        label="Description"
        variant="outlined"
        margin="normal"
        value={value}
        onChange={event => setValue(event.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Add&nbsp;<AddIcon />
      </Button>
    </Form>
  );
}
