import { TitleGroup } from "../../components/title-group/titlegroup";
import "./notfound.css";

const DESC = "This page is not in the BlackList";

export const NotFound = () => {
  return (
    <div className="main-container">
      <div className="error-container  bg-image">
        <TitleGroup title="404" desc={DESC} />
      </div>
    </div>
  );
};
