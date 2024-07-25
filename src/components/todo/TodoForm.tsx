import React from 'react';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';

interface TodoFormProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  newDueDate: string;
  setNewDueDate: (value: string) => void;
  addTodo: (e: React.FormEvent) => Promise<void>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  newTodo,
  setNewTodo,
  newDueDate,
  setNewDueDate,
  addTodo
}) => (
  <Form onSubmit={addTodo}>
    <Input
      label="Neue Aufgabe"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      minLength={10}
      required
    />
    <Input
      type="date"
      label="Abgabetermin (optional)"
      value={newDueDate}
      onChange={(e) => setNewDueDate(e.target.value)}
    />
    <Button type="submit">Aufgabe hinzufügen</Button>
  </Form>
);

export default TodoForm;