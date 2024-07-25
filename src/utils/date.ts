export const formatDate = (date: Date | null): string => {
  if (!date) {
    return 'Ohne Datum';
  }
  return date.toLocaleDateString();
};

  export const isOverdue = (dueDate: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return dueDate < today;
  };