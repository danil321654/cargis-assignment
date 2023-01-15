export interface SearchByFieldProps {
  options: {
    value: string;
    label: string;
  }[];
  handleChange: (value: string) => void;
  handleChangeField: (value: string) => void;
}
