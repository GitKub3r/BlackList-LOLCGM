export type InputData = {
  label: string;
  type: string;
  name?: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
};
