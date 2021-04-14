import { ButtonHTMLAttributes } from 'react';
import './button.styles.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { children, width = 120 } = props;

  return (
    <button {...props} className="button" style={{ width: `${width}px` }}>
      {children}
    </button>
  );
};
