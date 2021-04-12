import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { Form, Justification } from '../../containers';
import './admin.styles.scss';

export const Admin: React.FC = () => {
  return (
    <div className="admin">
      <nav className="admin__navigation">
        <p className="admin__navigation-text">Home</p>
        <ArrowIcon />
        <p className="admin__navigation-text">Administração do sistema</p>
        <ArrowIcon />
        <p className="admin__navigation-text admin__navigation-text--focused">
          Adicionar nova justificativa
        </p>
      </nav>
      <Justification />
      <Form />
    </div>
  );
};
