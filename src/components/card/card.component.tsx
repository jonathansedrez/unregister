import './card.styles.scss';
import classNames from 'classnames';

type CardProps = {
  hasShadow?: boolean;
};
export const Card: React.FC<CardProps> = (props) => {
  const { children, hasShadow = false } = props;

  return (
    <div className={classNames('card', hasShadow && 'card--shadow')}>
      {children}
    </div>
  );
};
