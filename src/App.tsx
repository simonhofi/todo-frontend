// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage/TodoListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
      </Routes>
    </Router>
  );
};

export default App;