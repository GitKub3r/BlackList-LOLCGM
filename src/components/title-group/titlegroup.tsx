import { TitleGroupProps } from "../../types/TitleGroupProps";
import "./titlegroup.css";

export const TitleGroup = ({ title, desc }: TitleGroupProps) => {
  return (
    <div className="title-group">
      <h1 className="title-group-title">{title}</h1>
      <p className="title-group desc">{desc}</p>
    </div>
  );
};
