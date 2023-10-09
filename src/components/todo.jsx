import React, { useState } from 'react';

export const Todo = (todoItem) => {
  //todoがデータ、setTodoが変更するための関数
  //useStateの()の中は、デフォルトの値が入るので、todoがinputの中に表示される
  const [todo, setTodo] = useState();
  return (
    <>
      <div>TODO</div>
      <input
        type='text'
        value={todo}
        onChange={(event) => {
          //setTodoを使って変更する値を入れる
          setTodo(event.target.value);
        }}
      />
    </>
  );
};
