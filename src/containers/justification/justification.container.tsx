import { useState } from 'react';
import { Card, Input } from '../../components';

import './justification.styles.scss';

export const Justification: React.FC = () => {
  const [justificationInput, setJustification] = useState('');

  const handleSubmit = () => {
    console.log('justificationInput', justificationInput);
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
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </Card>
  );
};
