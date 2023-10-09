import React from 'react';
import { Todo } from './components/Todo';

const todoList = [
  { id: 1, title: '筋トレ' },
  { id: 2, title: '勉強' },
  { id: 3, title: '犬の散歩' },
  { id: 4, title: '洗濯' },
  { id: 5, title: '料理' },
];

export const TodoList = () => {
  return (
    <div>
      <h1>TodoList</h1>
      {/* map()メソッドは、与えられた関数の配列の全ての要素に対して呼び出し、その結果からなる新しい配列を生成する。
      todoの中に、idとtitleが入ってくる */}
      {TodoList.map((todo) => {
        // todoItemにTodoListをmapで渡しているので、TodoListのオブジェクト１ずつが入ってTodoコンポーネントが5つ出来上がる
        return <Todo key={todo.id} todoItem={todo} />;
      })}
    </div>
  );
};
