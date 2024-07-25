import React from 'react';
import List from '../common/List';
import ListItem from '../common/ListItem';
import Button from '../common/Button';
import { FaCheckCircle, FaTrash, FaListUl } from 'react-icons/fa';
import { isOverdue, formatDate } from '../../utils/date';
import { Todo } from '../../types/Todo';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => (
  <List>
    {todos.map((todo) => {
      const isOverdueTask = todo.dueDate && isOverdue(new Date(todo.dueDate));
      return (
        <ListItem key={todo.id}>
            <Button onClick={() => toggleTodo(todo.id)}>
              {todo.isCompleted ? <FaListUl /> : <FaCheckCircle />}
            </Button>
            <div className="todo-content">
              <span className={`${todo.isCompleted ? 'completed' : ''} ${isOverdueTask ? 'overdue' : ''}`}>
                {todo.description}
              </span>
            </div>
            <span className={`date-badge ${isOverdueTask ? 'overdue' : ''}`}>
              {formatDate(todo.dueDate ? new Date(todo.dueDate) : null)}
            </span>
            <Button variant="danger" onClick={() => deleteTodo(todo.id)}>
              <FaTrash />
            </Button>
        </ListItem>
      );
    })}
  </List>
);

export default TodoList;