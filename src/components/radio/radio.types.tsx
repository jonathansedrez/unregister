export type RadioProps = {
  onChange(value: string): void;
  initialValue?: string;
  name: string;
};

export type RadioOptionProps = {
  value: string;
  hasDescription?: boolean;
};

export interface RadioComposition {
  Option: React.FC<RadioOptionProps>;
}
