import { useEffect, useState } from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { Unregister, AddJustification } from '../../containers';
import { JustificationType } from './admin.types';
import { AdminContext } from './admin.context';
import './admin.styles.scss';

const Navigation: React.FC = () => {
  return (
    <nav className="admin__navigation">
      <p className="admin__navigation-text">Home</p>
      <ArrowIcon />
      <p className="admin__navigation-text">Administração do sistema</p>
      <ArrowIcon />
      <p className="admin__navigation-text admin__navigation-text--focused">
        Adicionar nova justificativa
      </p>
    </nav>
  );
};

export const Admin: React.FC = () => {
  const initialJutifications = () => {
    const justificationsStorage = localStorage.getItem('justifications');
    if (justificationsStorage) {
      const parsedJustifications: JustificationType[] = JSON.parse(
        justificationsStorage
      );
      return parsedJustifications;
    }
    return [];
  };

  const [justifications, setJustifications] = useState<JustificationType[]>(
    initialJutifications
  );

  useEffect(() => {
    window.localStorage.setItem(
      'justifications',
      JSON.stringify(justifications)
    );
  }, [justifications]);

  return (
    <div className="admin">
      <Navigation />
      <main>
        <AdminContext.Provider value={{ justifications, setJustifications }}>
          <AddJustification />
          <Unregister />
        </AdminContext.Provider>
      </main>
    </div>
  );
};
