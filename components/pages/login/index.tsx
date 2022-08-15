import React from "react";
import styles from "./index.module.scss";
import Footer from "../../common/Footer";

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}></div>
      <Footer />
    </div>
  );
};

export default Login;
