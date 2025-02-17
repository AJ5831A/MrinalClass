import "./Cards.css";

export default function Cards({title, description}) {
  return (
    <div className="cards-container">
      
        <div className="card">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      
    </div>
  );
}
