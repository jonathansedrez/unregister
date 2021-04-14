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
      <div className="unregister">
        <div className="unregister__disclaimer">
          <CompanyLogoIcon />
          <h1 className="unregister__title">Nós sentiremos sua falta</h1>
          <div className="unregister__text-wrapper">
            <p className="unregister__text">
              Lamentamos ver você indo embora. <br /> Para que possamos
              <b> melhorar nossa comunicação</b>, gostaríamos de
              <b> saber os motivos</b> que o levaram a tomar essa decisão.
            </p>
            <p className="unregister__text">
              <b>O questionário é opcional.</b>
            </p>
          </div>
        </div>
        <div className="unregister__inputs">
          <h2 className="unregister__subtitle">
            Por que você quer se descadastrar?
          </h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <Radio onChange={setSelectedJustification} name="justification">
              {justifications.map(({ id, value, hasDescription }, index) => {
                return (
                  <Radio.Option key={id} id={id}>
                    <Fragment>
                      <p className="unregister__radio-text">{value}</p>
                      {hasDescription && (
                        <Input
                          placeholder="Informe o motivo"
                          value={justifications[index].description || ''}
                          onChange={(event) => {
                            let just = [...justifications];
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
            <p className="unregister__text">
              O descadastramento será efetuado para o e-mail: <br />
              <i>nome.sobrenome@pmweb.com.br</i>
            </p>
            <Button onClick={handleSubmit}>Descadastrar</Button>
          </form>
        </div>
      </div>
    </Card>
  );
};
