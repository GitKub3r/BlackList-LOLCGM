import "./About.css";
import defaultMessages from "../../json/text/AboutPage.json";
import { MessageBox } from "../../components/message-box/MessageBox";

export const AboutPage = () => {
  const messages = defaultMessages;
  return (
    <div className="main-app-container flex-v about-page-container">
      {messages.map((message: any, index) => (
        <MessageBox key={index} data={message} />
      ))}
    </div>
  );
};
