import type { NextPage } from "next";

import Login from "../../components/pages/login";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  console.log("login....");
  return <Login />;
};

export default Home;
