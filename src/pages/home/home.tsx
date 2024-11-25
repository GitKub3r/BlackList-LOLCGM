import { LinkedButton } from "../../components/linked-button/linkedbutton";
import { TitleGroup } from "../../components/title-group/titlegroup";
import { Link } from "../../types/Link";
import "./home.css";

const INFO_TITLE = "Wellcome to BlackList";
const INFO_DESC =
  "BlackList is a web application for League of Legends Custom GameModes (LOLCGM). Designed to manage a database of players who have exhibited inappropriate behavior in custom games, such as breaking rules, toxic behavior, or cheating (scripts).";
const HOST_INFO_TITLE = "Become a Hoster";
const HOST_INFO_DESC =
  "To access BlackList service you need a Hoster Account. Those accounts are given to people who has proven been an active member in the Custom Games community";

const HOST_LINK: Link = {
  name: "Apply Now",
  src: "/hoster",
};

const COMMUNITY_TITLE = "About LOLCGM";
const COMMUNITY_DESC =
  "League of Legends Custom Gamemodes is a vibrant community within the League of Legends ecosystem, dedicated to creating and enjoying custom games with unique and engaging mechanics, such as All-Blind All-Mid (ABAM), Fight Club, and Hide and Seek.";

export const Home = () => {
  return (
    <div className="main-container">
      <div className="info-container">
        <TitleGroup title={INFO_TITLE} desc={INFO_DESC} />
      </div>

      <div className="host-info-container">
        <TitleGroup title={HOST_INFO_TITLE} desc={HOST_INFO_DESC} />
        <div className="host-info-wrapper">
          <LinkedButton link={HOST_LINK} />
        </div>
      </div>

      <div className="community-info-container">
        <TitleGroup title={COMMUNITY_TITLE} desc={COMMUNITY_DESC} />
      </div>
    </div>
  );
};
