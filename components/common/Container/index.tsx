import React from "react";
import styles from "./index.module.scss";
interface Props {}
const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
