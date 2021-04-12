import { useState } from 'react';
import { Card, Input } from '../../components';

import './justification.styles.scss';

export type JustificationObj = {
  value: string;
  hasDescription: boolean;
  description?: string;
};

export const Justification: React.FC = () => {
  const [justificationInput, setJustification] = useState('');
  const [hasDescription, setHasDescription] = useState(false);

  const handleSubmit = () => {
    const justifications = localStorage.getItem('justifications');
    let parsedJustifications: JustificationObj[] = [];

    if (justifications) {
      parsedJustifications = JSON.parse(justifications);
    }

    localStorage.setItem(
      'justifications',
      JSON.stringify([
        ...parsedJustifications,
        {
          value: justificationInput,
          hasDescription,
        },
      ])
    );
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
            label="Justificativa"
            placeholder="Digite um motivo para fazer opt out"
            value={justificationInput}
            onChange={(event) => {
              setJustification(event.target.value);
            }}
          />
          <div>
            <input
              id="hasDescription"
              name="hasDescription"
              type="checkbox"
              onChange={(e) => setHasDescription(e.target.checked)}
              checked={hasDescription}
            />
            <label htmlFor="hasDescription" className="justification__checkbox">
              Permitir que o usuário informe uma observação.
            </label>
          </div>
          <button onClick={handleSubmit}>Enviar</button>
        </form>
      </div>
    </Card>
  );
};
