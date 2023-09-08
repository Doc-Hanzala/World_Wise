import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";

const FAKE_USER = {
  name: "Hanzala",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const user = FAKE_USER; 
  const navigate=useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

