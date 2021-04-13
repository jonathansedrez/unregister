import { createContext, Dispatch, SetStateAction } from 'react';
import { JustificationType } from './admin.types';

type AdminContextActions = {
  justifications: JustificationType[];
  setJustifications: Dispatch<SetStateAction<JustificationType[]>>;
};

export const AdminContext = createContext<AdminContextActions>(undefined!);
