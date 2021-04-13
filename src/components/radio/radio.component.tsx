import { useState, useContext } from 'react';

import { RadioComposition, RadioProps, RadioOptionProps } from './radio.types';
import { useRadioContext } from './radio.hook';
import { RadioContext } from './radio.context';

import './radio.styles.scss';

const Option: React.FC<RadioOptionProps> = (props) => {
  const { value, children } = props;
  const { currentValue, handleChange, name } = useContext(RadioContext);
  useRadioContext();

  return (
    <div onClick={() => handleChange(value)} className="radio">
      <input
        type="radio"
        readOnly
        hidden
        id={value}
        name={name}
        checked={value === currentValue}
      />
      <div className="radio__box">
        {value === currentValue && <span className="radio__box--checked" />}
      </div>
      <div className="radio__wrapper">{children}</div>
    </div>
  );
};

export const Radio: React.FC<RadioProps> & RadioComposition = (props) => {
  const { children, onChange, name } = props;
  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (value: any) => {
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
