import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import WorkoutDetails from "../components/WorkoutDetails/WorkoutDetails";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phrancois Fit</title>
        <meta name="description" content="Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Link href="/workouts">Workouts</Link>
        <WorkoutDetails title={"Pushups"} reps={20} load={0} minutes={0} />
        <h1 className="">Workouts</h1>
      </main>

      {/* <footer className="">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
