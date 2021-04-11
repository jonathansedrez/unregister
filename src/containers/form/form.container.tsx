import { Card, Radio } from '../../components';

import './form.styles.scss';

export const Form: React.FC = () => {
  return (
    <Card hasShadow>
      <p className="form__text">form</p>

      <Radio onChange={(value) => console.log(value)} name="justification">
        <Radio.Option value="A frequencia dos emails é muito alta">
          A frequencia dos emails é muito alta
        </Radio.Option>
        <Radio.Option value="O conteúdo nao me enteressa">
          O conteúdo nao me enteressa
        </Radio.Option>
      </Radio>
    </Card>
  );
};
