import { useEffect, useState, Fragment } from 'react';
import { Card, Input, Radio } from '../../components';
import { JustificationObj } from '../justification/justification.container';

import './form.styles.scss';

export const Form: React.FC = () => {
  const [justifications, setJustifications] = useState<JustificationObj[]>([]);
  const [selectedJustification, setSelectedJustification] = useState('');

  const checkStorage = () => {
    const justificationsStorage = localStorage.getItem('justifications');

    if (justificationsStorage) {
      const parsedJustifications: JustificationObj[] = JSON.parse(
        justificationsStorage
      );
      setJustifications(parsedJustifications);
    }
  };

  useEffect(() => {
    checkStorage();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', () => checkStorage());
    return () => {
      window.removeEventListener('storage', () => checkStorage());
    };
  });

  const handleSubmit = () => {
    const justification = justifications.find(
      (justification) => justification.value === selectedJustification
    );
    console.log('selecionado:', justification);
  };

  return (
    <Card>
      <p>form</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <Radio onChange={setSelectedJustification} name="justification">
          {justifications.map(({ value, hasDescription }, index) => {
            return (
              <Radio.Option key={value} value={value}>
                <Fragment>
                  <p>{value}</p>
                  {hasDescription && (
                    <Input
                      placeholder="Informe o motivo"
                      value={justifications[index].description || ''}
                      onChange={(event) => {
                        let justifiations = [...justifications];
                        justifiations[index] = {
                          ...justifiations[index],
                          description: event.target.value,
                        };
                        setJustifications(justifiations);
                      }}
                    />
                  )}
                </Fragment>
              </Radio.Option>
            );
          })}
        </Radio>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </Card>
  );
};
