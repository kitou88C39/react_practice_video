import React, { useState } from 'react';
import { Todo } from './components/Todo';

export const TodoList = () => {
  //Todoを完了と未完了にする関数を作る done:falseを追加
  //useStateで初期値を下記の配列にする
  const [todoList, setTodoList] = useState([
    { id: 1, title: '筋トレ', done: false },
    { id: 2, title: '勉強', done: false },
    { id: 3, title: '犬の散歩', done: false },
    { id: 4, title: '洗濯', done: false },
    { id: 5, title: '料理', done: false },
  ]);

  const setToggleDoneById = (todoId) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const setTitleById = (todoId) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            title: todo.title,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <p>
        TODO達成個数 {}/ TODO数{todoList.length}
      </p>
      <h1>TodoList</h1>
      {/* map()メソッドは、与えられた関数の配列の全ての要素に対して呼び出し、その結果からなる新しい配列を生成する。
      todoの中に、idとtitleが入ってくる */}
      {todoList.map((todo) => {
        //todoItemにTodoListをmapで渡しているので、TodoListのオブジェクト１ずつが入ってTodoコンポーネントが5つ出来上がる
        //mapとか配列を展開してReactのHTMLを書いている時は、絶対にkeyを渡す
        //setTodoListを渡す
        return (
          <Todo
            key={todo.id}
            todoItem={todo}
            setToggleDoneById={setToggleDoneById}
            setTitleById={setTitleById}
          />
        );
      })}
    </div>
  );
};
