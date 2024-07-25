import { Todo } from '../types/Todo';

const API_BASE_URL = 'http://localhost:5206/api/todo';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
};

export const fetchTodo = async (id: string): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch todo');
  }
  return response.json();
};

export const createTodo = async (description: string, dueDate: string): Promise<Todo> => {
  const dueDateValue = dueDate ? dueDate : null;
  
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description, completed: false, dueDate: dueDateValue }),
  });

  const createdTodo = await response.json();

  console.log(createdTodo);
  
  if (!response.ok) {
    throw new Error('Failed to create todo');
  }
  
  return createdTodo;
};

export const updateTodo = async (id: string, updates: Partial<Todo>): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  console.log(response);

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Failed to update todo:', errorData);
    throw new Error('Failed to update todo');
  }

  const updatedTodo = await response.json();
  console.log(updatedTodo);
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete todo');
  }
};