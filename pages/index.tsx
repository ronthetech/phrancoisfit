import type { NextPage } from "next";
import Head from "next/head";
import WorkoutDetails from "../components/WorkoutDetails/WorkoutDetails";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Phrancois Fit Home</title>
        <meta name="description" content="Home | Phrancois Fit web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <h1 className="">Home</h1>
        <WorkoutDetails title={"Pushups"} reps={20} load={0} minutes={""} />
        <WorkoutDetails
          title={"Bench Press"}
          reps={20}
          load={40}
          minutes={""}
        />
      </>

      {/* <footer className="">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
