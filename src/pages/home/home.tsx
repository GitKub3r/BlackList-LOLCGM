import { Card } from "../../components/card/card";
import { LinkedButton } from "../../components/linked-button/linkedbutton";
import { TitleGroup } from "../../components/title-group/titlegroup";
import { Link } from "../../types/Link";

import mail from "../../assets/icons/mail.png";
import clock from "../../assets/icons/clock.png";
import check from "../../assets/icons/check.png";

import "./home.css";

const INFO_TITLE = "Welcome to BlackList";
const INFO_DESC =
  "BlackList is a web application for League of Legends Custom Gamemodes (LOLCGM). Designed to manage a database of players who have exhibited inappropriate behavior in custom games. Such as breaking rules, toxic behavior, or cheating.";
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

const CARD1_DESC =
  "To request a Hoster account you need to send an email to the adress provided in the footer section. Be sure to include your summoner's name and tag.";

const CARD2_DESC =
  "Validating the information and creating a Hoster account takes time. Be patient, you will be notified in your email inbox when your account is ready.";

const CARD3_DESC =
  "Once your information is validated. You will recieve an email with your Hoster credentials which can be edited by your preference.";

export const Home = () => {
  return (
    <div className="main-container">
      <div className="info-container bg-image">
        <TitleGroup title={INFO_TITLE} desc={INFO_DESC} />
      </div>

      <div className="host-info-container bg-image bg-default-img">
        <h1 className="host-info-title">Become a Hoster</h1>
        <div className="host-steps-container">
          <Card title="Step 1" desc={CARD1_DESC} src={mail} />
          <Card title="Step 2" desc={CARD2_DESC} src={clock} />
          <Card title="Step 3" desc={CARD3_DESC} src={check} />
        </div>
      </div>

      <div className="community-info-container bg-image">
        <TitleGroup title={COMMUNITY_TITLE} desc={COMMUNITY_DESC} />
      </div>
    </div>
  );
};
