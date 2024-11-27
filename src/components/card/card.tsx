import { CardProps } from "../../types/CardProps";
import "./card.css";

export const Card = ({ title, desc, src, date }: CardProps) => {
  return (
    <div className="card-container">
      <div className="card-title-container">
        <h1 className="card-title">{title}</h1>
        <p className="card-date">{date}</p>
      </div>

      <hr className="card-separator" />

      <div className="card-image-container">
        <img src={src} alt="card-image" />
      </div>

      <div className="card-desc-container">
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
};
