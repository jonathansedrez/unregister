import { InputHTMLAttributes } from 'react';
import './input.styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = (props) => {
  const { value, label, maxLength = 150 } = props;
  return (
    <div className="input">
      {label && <p className="input__label">Justificativa </p>}
      <input
        className="input__text"
        {...props}
        value={value}
        maxLength={maxLength}
      />
      <p className="input__counter" data-testid="input-counter">{`${
        value?.length || 0
      }/${maxLength}`}</p>
    </div>
  );
};
