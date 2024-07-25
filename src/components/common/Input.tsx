import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input className="input" {...props} />
    </div>
  );
};

export default Input;