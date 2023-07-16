import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.containerHome}>
   {/* Top Section */}
   <h1 className={styles.h1}>Welcome to Hive!</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <h2 className={styles.selectBoxTitle}>Mint new Bee!</h2>
          <p className={styles.selectBoxDescription}>
            Max 10 per wallet.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <h2 className={styles.selectBoxTitle}>Stake Your Bees!</h2>
          <p className={styles.selectBoxDescription}>
            STAKE your <b>BEES</b>{" "}
            and receive <b>HoneyBees</b> .
          </p>
            <p className={styles.selectBoxDescription2}></p>
            <div id="footer_bar">  
            <div id="bar_container">
 
           </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
