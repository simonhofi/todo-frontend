import React from 'react';

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, ...props }) => {
  return (
    <div className="date-input-group">
      <label className="date-input-label">{label}</label>
      <input type="date" className="date-input" {...props} />
    </div>
  );
};

export default DateInput;