import { useState, useEffect, useCallback } from 'react';
import { Todo } from '../types/Todo';
import * as api from '../services/api';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const fetchTodos = useCallback(async () => {
    const fetchedTodos = await api.fetchTodos();
    setTodos(fetchedTodos);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.length < 10) {
      alert('Todo must be at least 10 characters long');
      return;
    }
    await api.createTodo(newTodo, newDueDate);
    setNewTodo('');
    setNewDueDate('');
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    await api.deleteTodo(id);
    fetchTodos();
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      try {
        const updatedTodo = {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
        const result = await api.updateTodo(id, updatedTodo);
        console.log('Updated ToDo:', result);

        setTodos(todos.map(t => t.id === id ? result : t));
      } catch (error) {
        console.error('Failed to toggle todo:', error);
      }
    }
  };
  
  return { todos, newTodo, setNewTodo, newDueDate, setNewDueDate, addTodo, deleteTodo, toggleTodo };
};

export const useTodo = (id: string | undefined) => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      if (id) {
        try {
          const fetchedTodo = await api.fetchTodo(id);
          setTodo(fetchedTodo);
        } catch (error) {
          console.error('Failed to fetch todo:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTodo();
  }, [id]);

  return { todo, isLoading };
};