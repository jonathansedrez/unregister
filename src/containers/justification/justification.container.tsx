import { useState } from 'react';
import { Card, Input } from '../../components';

import './justification.styles.scss';

export const Justification: React.FC = () => {
  const [justificationInput, setJustification] = useState('');
  const [hasDescription, setHasDescription] = useState(false);

  const handleSubmit = () => {
    console.log('justificationInput', justificationInput);
    console.log('hasDescription', hasDescription);
  };

  return (
    <Card>
      <p>justifiation</p>
      <form onSubmit={(e) => e.preventDefault()}>
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
