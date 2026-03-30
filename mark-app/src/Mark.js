import Result from "./Result";

function Mark({ marks }) {
  return (
    <div>
      <p>Marks: {marks}</p>
      <Result marks={marks} />
    </div>
  );
}

export default Mark;