import { LoginForm } from "../../components/login-form/loginform";
import "./login.css";

const sayHi = () => console.log("hi");

export const Login = () => {
  return (
    <div className="main-content">
      <LoginForm />
    </div>
  );
};
