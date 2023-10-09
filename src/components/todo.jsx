import React, { useState } from 'react';

export const Todo = () => {
  //todoがデータ、setTodoが変更するための関数
  //useStateの()の中は、デフォルトの値が入るので、todoの中に筋トレが入るので、inputの中に筋トレが表示される
  const [todo, setTodo] = useState('筋トレ');
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
