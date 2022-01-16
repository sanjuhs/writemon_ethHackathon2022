import styles from "./Landing.module.css";
import { useMoralis } from "react-moralis";
import { setUser } from "../actions/auth";
import { Redirect } from "react-router-dom";

function Landing() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const connect = async () => {
    await authenticate();

    console.log("suer", user);

    if (isAuthenticated) {
      console.log(user);
      setUser(user);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles["landing-page"]}>
      <section className={styles.upper}>
        <div className={styles.img}>{/* <img src="" alt="writemon"/> */}</div>
        <div className={styles.text}>
          <div className={styles["heading-wrapper"]}>
            <h2 className={styles.title}>Write Mon</h2>
          </div>

          <button onClick={connect} className={styles.connect}>
            Connect Wallet
          </button>
        </div>
      </section>
      <section className={styles.lower}>
        <h2 className={styles["about-heading"]}>About</h2>
        <p className={styles["about-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          aliquid id. Assumenda quo rerum ipsum?
        </p>
        <p className={styles["about-text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum
          voluptas nobis voluptatum veniam unde dolores cumque, ipsam ullam
          ducimus, delectus, odio suscipit. Sunt, amet.
        </p>
      </section>
    </div>
  );
}

export default Landing;
