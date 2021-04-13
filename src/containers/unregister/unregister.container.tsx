import { useState, Fragment, useContext } from 'react';

import { Card, Input, Radio, Button } from '../../components';
import { ReactComponent as CompanyLogoIcon } from '../../assets/company-logo.svg';
import { AdminContext } from '../admin/admin.context';
import './unregister.styles.scss';

export const Unregister: React.FC = () => {
  const [selectedJustification, setSelectedJustification] = useState('');

  const { justifications, setJustifications } = useContext(AdminContext);

  const handleSubmit = () => {
    const justification = justifications.find(
      (justification) => justification.id === selectedJustification
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
              Lamentamos ver você indo embora. <br /> Para que possamos
              <b> melhorar nossa comunicação</b>, gostaríamos de
              <b> saber os motivos</b> que o levaram a tomar essa decisão.
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
            {justifications.map(({ id, value, hasDescription }, index) => {
              return (
                <Radio.Option key={id} id={id}>
                  <Fragment>
                    <p>{value}</p>
                    {hasDescription && (
                      <Input
                        placeholder="Informe o motivo"
                        value={justifications[index].description || ''}
                        onChange={(event) => {
                          let just = [...justifications];
                          console.log(just[index]);
                          just[index] = {
                            ...just[index],
                            description: event.target.value,
                          };
                          setJustifications(just);
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
