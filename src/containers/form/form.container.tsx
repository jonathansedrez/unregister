import { useEffect, useState } from 'react';
import { Card, Radio } from '../../components';
import { JustificationObj } from '../justification/justification.container';

import './form.styles.scss';

export const Form: React.FC = () => {
  const [justifications, setJustifications] = useState<JustificationObj[]>([]);

  useEffect(() => {
    const justificationsStorage = localStorage.getItem('justifications');

    if (justificationsStorage) {
      const parsedJustifications: JustificationObj[] = JSON.parse(
        justificationsStorage
      );
      setJustifications(parsedJustifications);
    }
  }, []);

  return (
    <Card hasShadow>
      <p className="form__text">form</p>

      <Radio onChange={(value) => console.log(value)} name="justification">
        {justifications.map(({ value, hasDescriptions }) => (
          <Radio.Option value={value} hasDescription={hasDescriptions}>
            {value}
          </Radio.Option>
        ))}
      </Radio>
    </Card>
  );
};
