import Mark from "./Mark.js";
import "./Student.css";

function Student({name, marks}){
  return(
    <div className = "student.card">
      <h2>{name}</h2>
      <Mark marks = {marks}/>
    </div>
  );

}
export default Student;
