import React, { useState } from 'react';

export const Todo = () => {
  //todoがデータ、setTodoが変更するための関数
  const [todo, setTodo] = useState('筋トレ');
  return (
    <>
      <div>TODO</div>
      <input type='text' value={todo} />
    </>
  );
};
