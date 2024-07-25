import { useState, useMemo } from 'react';
import { useTodos } from './useTodos';
import { FilterType, SortType, Todo } from '../types/Todo';

export const useTodoListLogic = () => {
  const { todos, newTodo, setNewTodo, newDueDate, setNewDueDate, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortBy, setSortBy] = useState<SortType>('dueDate');

  const { filteredAndSortedTodos, counts } = useMemo(() => {
    const activeTodos = todos.filter(todo => !todo.isCompleted);
    const completedTodos = todos.filter(todo => todo.isCompleted);

    const filteredTodos = filter === 'all' ? todos : 
                          filter === 'active' ? activeTodos : 
                          completedTodos;

    const sortedTodos = filteredTodos.sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.description.localeCompare(b.description);
      } else {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
    });

    return {
      filteredAndSortedTodos: sortedTodos,
      counts: {
        all: todos.length,
        active: activeTodos.length,
        completed: completedTodos.length
      }
    };
  }, [todos, filter, sortBy]);

  return {
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
  };
};