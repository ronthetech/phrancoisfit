export interface WorkoutDetailsProps {
  title: string;
  reps: number | "";
  load: number | "";
  minutes: number | "";
}

const WorkoutDetails = ({
  title,
  reps,
  load,
  minutes,
}: WorkoutDetailsProps) => {
  return (
    <div className="">
      <h3>{title}</h3>
      <p>
        <strong>Reps: {reps}</strong>
      </p>
      <p>
        <strong>Load (lbs): {load}</strong>
      </p>
      {minutes ? (
        <p>
          <strong>Length (mins): {minutes}</strong>
        </p>
      ) : (
        <p></p>
      )}
      {/* <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p> */}
      {/* <button onClick={handleClick}>Delete</button> */}
    </div>
  );
};

export default WorkoutDetails;
// export interface IWorkoutDetails {}

// const WorkoutDetails: React.FC<IWorkoutDetails> = () => {
//   return <div>Hello world!</div>;
// };

// export default WorkoutDetails;
