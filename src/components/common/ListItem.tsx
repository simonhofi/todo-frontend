import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <li className="list-item">{children}</li>;
};

export default ListItem;