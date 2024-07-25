export type FilterType = 'all' | 'active' | 'completed';
export type SortType = 'alphabetical' | 'dueDate';

export interface Todo {
  id: string;
  description: string;
  isCompleted: boolean;
  dueDate: string;
}