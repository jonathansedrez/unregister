export type RadioProps = {
  onChange(value: string): void;
  name: string;
};

export type RadioOptionProps = {
  value: string;
};

export interface RadioComposition {
  Option: React.FC<RadioOptionProps>;
}
