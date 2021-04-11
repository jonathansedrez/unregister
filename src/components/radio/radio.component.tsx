import { useState, useContext } from 'react';

import { RadioComposition, RadioProps, RadioOptionProps } from './radio.types';
import { useRadioContext } from './radio.hook';
import { RadioContext } from './radio.context';

const Option: React.FC<RadioOptionProps> = (props) => {
  const { value, children, hasDescription = false } = props;
  const { currentValue, handleChange, name } = useContext(RadioContext);
  useRadioContext();

  return (
    <>
      <div onClick={() => handleChange(value)}>
        <input
          type="radio"
          readOnly
          hidden
          id={value}
          name={name}
          checked={value === currentValue}
        />
        {value === currentValue ? <span>O</span> : <span>X</span>}
        {children}
      </div>
      {hasDescription && <input />}
    </>
  );
};

export const Radio: React.FC<RadioProps> & RadioComposition = (props) => {
  const { children, onChange, initialValue, name } = props;
  const [currentValue, setCurrentValue] = useState(initialValue || '');

  const handleChange = (value: string) => {
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <RadioContext.Provider value={{ currentValue, handleChange, name }}>
      {children}
    </RadioContext.Provider>
  );
};

Radio.Option = Option;
