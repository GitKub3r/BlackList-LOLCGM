import { Link } from "react-router-dom";
import { FormButton } from "../form-button/formbutton";
import { FormInput } from "../form-input/forminput";
import "./loginform.css";

export const LoginForm = () => {
  return (
    <div className="main-form-container bg-image bg-default-img">
      <form action="" className="main-login-form">
        <FormInput label="Username" type="text" name="username-login" />
        <FormInput label="Password" type="password" name="password-login" />

        <div className="main-form-link-container">
          <span>
            Don't have an account? Apply for one{" "}
            <Link to="/hoster" className="hover-link">
              here
            </Link>
          </span>
        </div>

        <FormButton label="log in" type="button" />
      </form>
    </div>
  );
};
