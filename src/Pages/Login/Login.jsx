import { useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("hanzala@gmail.com");
  const [password, setPassword] = useState("qwerty");
  return (
    <div className={styles.login}>
      <Header />
      <form className={styles.form}>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="email">
            email address
          </label>
          <input
            className={styles.inputTag}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input}>
          <label className={styles.label} htmlFor="password">
            password
          </label>
          <input
            className={styles.inputTag}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/appLayout">
          <button className="btn">login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
