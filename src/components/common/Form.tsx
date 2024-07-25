import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="form" {...props}>
      {children}
    </form>
  );
};

export default Form;