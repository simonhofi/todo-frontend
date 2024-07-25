import React from 'react';
import TodoForm from '../../components/todo/TodoForm';
import TodoFilters from '../../components/todo/TodoFilters';
import TodoList from '../../components/todo/TodoList';
import { useTodoListLogic } from '../../hooks/useTodoListLogic';

const TodoListPage: React.FC = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    newDueDate,
    setNewDueDate,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    filteredAndSortedTodos,
    counts
  } = useTodoListLogic();

  return (
    <div className="todo-list-page">
      <h1>Aufgabenliste</h1>
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        newDueDate={newDueDate}
        setNewDueDate={setNewDueDate}
        addTodo={addTodo}
      />
      <TodoFilters
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        counts={counts}
      />
      <TodoList
        todos={filteredAndSortedTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoListPage;