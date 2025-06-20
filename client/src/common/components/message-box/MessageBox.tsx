import "./MessageBox.css";

interface MessageBoxData {
  title: string;
  subtitle: string;
  description?: string;
  image?: string;
  reverse?: boolean;
}

interface MessageBoxProps {
  data: MessageBoxData;
}

export const MessageBox = ({ data }: MessageBoxProps) => {
  const { title, subtitle, description, image, reverse = false } = data;

  return (
    <div
      className={`${
        reverse
          ? "flex-h-center-reverse blacklist-message-box-reversed"
          : "flex-h-center"
      } flex-h-align blacklist-message-box`}
    >
      <div className="blacklist-message-box-text-container">
        <h1 className="blacklist-message-box-title">{title}</h1>
        <h2 className="blacklist-message-box-subtitle">{subtitle}</h2>
        {description && (
          <p
            className="blacklist-message-box-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
      {image && (
        <div className="blacklist-message-box-icon-container">
          <img
            src={image}
            alt={title}
            className="blacklist-message-box-image"
          />
        </div>
      )}
    </div>
  );
};
