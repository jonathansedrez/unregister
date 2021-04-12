import { ButtonHTMLAttributes } from 'react';
import './button.styles.scss';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { children } = props;

  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};
