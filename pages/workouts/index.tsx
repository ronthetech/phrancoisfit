import WorkoutDetails from "../../components/WorkoutDetails/WorkoutDetails";

export interface WorkoutsProps {}

const Workouts = () => {
  return (
    <div>
      <h1 className="">Workouts</h1>
      <WorkoutDetails title={"Running"} reps={""} load={""} minutes={20} />
    </div>
  );
};

export default Workouts;
