import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick: (value: string) => void;
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick(children as string)}>{children}</button>
  );
};

export default Button;
