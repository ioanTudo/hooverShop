import { auth } from "../../api/firebase";
import "./dashboard.css";

export const Dashboard = () => {
  const userEmail = auth.currentUser?.email;
  return (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <h2>Welcome to you dashboard, {userEmail}</h2>
      </div>
    </div>
  );
};
