import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Card, Input, Button, Checkbox } from '../../components';
import { AdminContext } from '../admin/admin.context';
import './addJustification.styles.scss';

export const AddJustification: React.FC = () => {
  const [justificationInput, setJustification] = useState('');
  const [hasDescription, setHasDescription] = useState(false);

  const { setJustifications } = useContext(AdminContext);

  const handleSubmit = () => {
    setJustifications((previous) => [
      ...previous,
      {
        id: uuid(),
        value: justificationInput,
        hasDescription,
      },
    ]);
    setJustification('');
    setHasDescription(false);
  };

  return (
    <Card hasShadow>
      <div className="justification">
        <h1 className="justification__title">Adicionar nova justificativa</h1>
        <form
          onSubmit={(event) => event.preventDefault()}
          className="justification__form"
        >
          <Input
            data-testid="justification-input"
            label="Justificativa"
            placeholder="Digite um motivo para fazer opt out"
            value={justificationInput}
            onChange={(event) => {
              setJustification(event.target.value);
            }}
          />
          <Checkbox
            value="Permitir que o usuário informe uma observação."
            checked={hasDescription}
            onClick={(value) => setHasDescription(value)}
          />

          <span className="justification__button">
            <Button
              onClick={handleSubmit}
              disabled={!justificationInput.length}
              width={210}
            >
              Salvar alterações
            </Button>
          </span>
        </form>
      </div>
    </Card>
  );
};
