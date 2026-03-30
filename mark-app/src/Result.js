function Result({ marks }) {
  return (
    <p>
      {marks > 40 ? "Pass ✅" : "Fail ❌"}
    </p>
  );
}

export default Result;