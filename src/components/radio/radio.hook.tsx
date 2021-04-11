import { useContext } from 'react';
import { RadioContext } from './radio.context';

export const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      'Radio compound components cannot be rendered outside the Toggle component'
    );
  }
  return context;
};
