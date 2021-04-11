import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  maxLength?: number;
}

export const Input: React.FC<InputProps> = (props) => {
  const { value, label, maxLength = 150 } = props;
  return (
    <div>
      {label && <p>label</p>}
      <input {...props} value={value} maxLength={maxLength} />
      <p>{`${value?.length || 0}/${maxLength}`}</p>
    </div>
  );
};
