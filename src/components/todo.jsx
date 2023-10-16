import React, { useState } from 'react';
//TodoList.jsxのtodoItemを受け取る
export const Todo = ({ todoItem }) => {
  console.log('todoItem', todoItem);
  //todoがデータ、setTodoが変更するための関数
  //useStateの()の中は、デフォルトの値が入るので、todoがinputの中に表示される
  //todoに入ってくる初期値の中にtodoItemを入れる
  const [todo, setTodo] = useState(todoItem);
  return (
    <>
      <div>TODO</div>
      <p>{todo.id}</p>
      <div>
        <p>{todo.done ? '完了' : '未完了'}</p>
      </div>
      {/* チェックボックスを作成する */}
      <div>
        <input
          type='checkbox'
          checked={todo.done}
          onChange={setTodo({
            ...todo,
            done: !todo.done,
          })}
        />
      </div>
      <input
        type='text'
        value={todo.title}
        onChange={(event) => {
          //setTodoを使って変更する値を入れる
          //スプレッド構文を使うことによりオブジェクトとか配列を展開できる
          //todoに一つのidとtitleが入っているオブジェクトを展開する
          //展開したもののtitleの部分に今回入力した値に上書きをする
          setTodo({ ...todo, title: event.target.value });
        }}
      />
    </>
  );
};
