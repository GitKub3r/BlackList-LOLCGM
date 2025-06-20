import { useAuth } from "../../../context/AuthContext";
import "./Account.css";

export const AccountPage = () => {
  const { logout } = useAuth();

  return (
    <div className="main-app-container flex-v account-page-container">
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};
