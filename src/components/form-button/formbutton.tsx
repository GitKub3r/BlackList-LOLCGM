import { FormButtonProps } from "../../types/FormButtonProps";
import "./formbutton.css";

export const FormButton = ({ label, type, onClick }: FormButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="main-form-button">
      {label}
    </button>
  );
};
