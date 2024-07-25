import React from 'react';
import Button from '../common/Button';
import { FaSortAlphaDown, FaCalendarAlt } from 'react-icons/fa';
import { FilterType, SortType } from '../../types/Todo';

interface TodoFiltersProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  sortBy: SortType;
  setSortBy: (sortBy: SortType) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  counts
}) => (
  <div className="filter-sort-row">
    <div className="filter-buttons">
      <Button 
        onClick={() => setFilter('all')} 
        variant={filter === 'all' ? 'primary' : 'secondary'}
      >
        Alle ({counts.all})
      </Button>
      <Button 
        onClick={() => setFilter('active')} 
        variant={filter === 'active' ? 'primary' : 'secondary'}
      >
        Offen ({counts.active})
      </Button>
      <Button 
        onClick={() => setFilter('completed')} 
        variant={filter === 'completed' ? 'primary' : 'secondary'}
      >
        Erledigt ({counts.completed})
      </Button>
    </div>
    <div className="sort-buttons">
      <Button 
        onClick={() => setSortBy('alphabetical')} 
        variant={sortBy === 'alphabetical' ? 'primary' : 'secondary'}
      >
        <FaSortAlphaDown />
      </Button>
      <Button 
        onClick={() => setSortBy('dueDate')} 
        variant={sortBy === 'dueDate' ? 'primary' : 'secondary'}
      >
        <FaCalendarAlt />
      </Button>
    </div>
  </div>
);

export default TodoFilters;