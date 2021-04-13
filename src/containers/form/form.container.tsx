import { useEffect, useState, Fragment } from 'react';

import { Card, Input, Radio, Button } from '../../components';
import { JustificationObj } from '../justification/justification.container';
import { ReactComponent as CompanyLogoIcon } from '../../assets/company-logo.svg';

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
      <div className="form">
        <div className="form__disclaimer">
          <CompanyLogoIcon />
          <h1 className="form__title">Nós sentiremos sua falta</h1>
          <div className="form__text">
            <p>
              Lamentamos ver você indo embora. <br />
              Para que possamos
              <b>melhorar nossa comunicação</b>, gostaríamos de
              <b>saber os motivos</b> que o levaram a tomar essa decisão. O
              questionário é opcional.
            </p>
            <p>
              <b>O questionário é opcional.</b>
            </p>
          </div>
        </div>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="form__inputs"
        >
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
          <Button onClick={handleSubmit}>Descadastrar</Button>
        </form>
      </div>
    </Card>
  );
};
