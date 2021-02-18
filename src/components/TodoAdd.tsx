import * as React from 'react';
import { Button, Input, Grid } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { Store } from '../store/types';
import { addTodo, setNewTodo } from '../store/action';

function TodoAdd() {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
      <Input
        placeholder='Add a todo'
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <Button onClick={() => dispatch(addTodo())}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
