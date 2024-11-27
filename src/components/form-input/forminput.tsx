import { FormInputProps } from "../../types/FormInputProps";
import "./forminput.css";

export const FormInput = ({ label, type, name }: FormInputProps) => {
  return (
    <div className="form-input-container">
      <input type={type} name={name} id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
