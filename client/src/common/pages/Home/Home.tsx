import { InfoCard } from "../../components/info-card/InfoCard";
import { MessageBox } from "../../components/message-box/MessageBox";
import defaultMessages from "../../json/text/HomePage.json";
import defaultInfoCards from "../../json/data/home_tools.json";
import { InfoCardLayout } from "../../layouts/info-card/InfoCardLayout";
import "./Home.css";
import { useAuth } from "../../context/AuthContext";

export const HomePage = () => {
  const messages = [...defaultMessages];
  const infoCards = defaultInfoCards;
  const { user } = useAuth();

  // Cambia el título y el subtitle si hay usuario
  if (user) {
    messages[0] = {
      ...messages[0],
      title: `Welcome back ${user.username}`,
      subtitle: "We've missed you!",
    };
  }

  return (
    <div className="main-app-container flex-v home-page-container">
      <MessageBox data={messages[0]} />
      <InfoCardLayout>
        {infoCards.map((card, index) => (
          <InfoCard key={index} data={card} reverse={index % 2 === 0} />
        ))}
      </InfoCardLayout>
      <MessageBox data={messages[1]} />
    </div>
  );
};
