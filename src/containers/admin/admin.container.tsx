import { Form, Justification } from '../../containers';
import './admin.styles.scss';

export const Admin: React.FC = () => {
  return (
    <div className="admin">
      <Justification />
      <Form />
    </div>
  );
};
