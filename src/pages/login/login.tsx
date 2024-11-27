import { FormInput } from "../../components/form-input/forminput";
import "./login.css";

export const Login = () => {
  return (
    <div className="main-content">
      <div className="input-container">
        <FormInput label="Username" type="text" name="username-login-field" />
        <FormInput label="Email" type="email" name="email-login-field" />
        <FormInput
          label="Password"
          type="password"
          name="password-login-field"
        />
      </div>
    </div>
  );
};
