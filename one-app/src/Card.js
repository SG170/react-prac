import "./Card.css";

function Card({ name, role }) {
  return (
    <div className="Card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default Card;