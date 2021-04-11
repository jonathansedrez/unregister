import { createContext } from 'react';

type RadioContextActions = {
  name: string;
  currentValue: string;
  handleChange(value: string): void;
};

export const RadioContext = createContext<RadioContextActions>(undefined!);
