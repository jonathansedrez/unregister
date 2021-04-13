import { useState, useContext } from 'react';

import { RadioComposition, RadioProps, RadioOptionProps } from './radio.types';
import { useRadioContext } from './radio.hook';
import { RadioContext } from './radio.context';

import './radio.styles.scss';

const Option: React.FC<RadioOptionProps> = (props) => {
  const { id, children } = props;
  const { currentValue, handleChange, name } = useContext(RadioContext);
  useRadioContext();

  return (
    <div onClick={() => handleChange(id)} className="radio">
      <input
        type="radio"
        readOnly
        hidden
        id={id}
        name={name}
        checked={id === currentValue}
      />
      <div className="radio__box">
        {id === currentValue && <span className="radio__box--checked" />}
      </div>
      <div className="radio__wrapper">{children}</div>
    </div>
  );
};

export const Radio: React.FC<RadioProps> & RadioComposition = (props) => {
  const { children, onChange, name } = props;
  const [currentValue, setCurrentValue] = useState('');

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
