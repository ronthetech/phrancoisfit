import Link from "next/link";
import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";

export interface WorkoutsProps {}

const Workouts = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <WorkoutDetails title={"Pushups"} reps={20} load={0} minutes={0} />
    </div>
  );
};

export default Workouts;
// export interface IWorkouts {}

// const Workouts: React.FC<IWorkouts> = () => {
//   return <div>Hello world!</div>;
// };

// export default Workouts;
