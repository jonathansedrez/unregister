import './checkbox.styles.scss';
import { ReactComponent as CheckIcon } from '../../assets/check.svg';

type CheckboxProps = {
  value: string;
  checked: boolean;
  onClick(value: boolean): void;
};

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { value, checked, onClick } = props;

  return (
    <div
      className="checkbox"
      onClick={() => {
        onClick(!checked);
      }}
    >
      <input type="checkbox" value={value} checked={checked} hidden readOnly />
      <div className="checkbox__box">
        {checked && (
          <span className="checkbox__box--checked">
            <CheckIcon />
          </span>
        )}
      </div>
      <p className="checkbox__wrapper">{value}</p>
    </div>
  );
};
