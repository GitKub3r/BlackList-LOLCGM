import "./InfoCard.css";
import type { InfoCardData } from "../../types/InfoCard";

interface InfoCardProps {
  data: InfoCardData;
  reverse?: boolean;
}

export const InfoCard = ({ data, reverse = false }: InfoCardProps) => {
  return (
    <div
      className={`blacklist-info-card flex-v-end ${reverse ? "right" : "left"}`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div className="blacklist-info-card-text-container">
        <h1 className="blacklist-info-card-title">{data.title}</h1>
        {data.description && (
          <div className="blacklist-info-card-subtitle">
            <hr />
            <p className="blacklist-info-card-description">
              {data.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
