import React from 'react';
import { Todo } from './components/Todo';

//Todoを完了と未完了にする関数を作る done:faleseを追加
const todoList = [
  { id: 1, title: '筋トレ', done: falese },
  { id: 2, title: '勉強', done: falese },
  { id: 3, title: '犬の散歩', done: falese },
  { id: 4, title: '洗濯', done: falese },
  { id: 5, title: '料理', done: falese },
];

export const TodoList = () => {
  return (
    <div>
      <h1>TodoList</h1>
      {/* map()メソッドは、与えられた関数の配列の全ての要素に対して呼び出し、その結果からなる新しい配列を生成する。
      todoの中に、idとtitleが入ってくる */}
      {todoList.map((todo) => {
        //todoItemにTodoListをmapで渡しているので、TodoListのオブジェクト１ずつが入ってTodoコンポーネントが5つ出来上がる
        //mapとか配列を展開してReactのHTMLを書いている時は、絶対にkeyを渡す
        return <Todo key={todo.id} todoItem={todo} />;
      })}
    </div>
  );
};
