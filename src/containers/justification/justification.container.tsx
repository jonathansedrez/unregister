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
      <p>justifiation</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <Input
          label="Justificativa"
          placeholder="dasda"
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
          <label htmlFor="hasDescription">
            Permitir que o usuário informe uma observação.
          </label>
        </div>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </Card>
  );
};
