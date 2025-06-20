import { useEffect, useState } from "react";
import "./StatusModal.css";

interface StatusModalData {
  message: string;
  type: "success" | "error" | "info" | "warning";
  forceVisible?: boolean;
}

export const StatusModal = (data: StatusModalData) => {
  const { message, type, forceVisible } = data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (forceVisible !== undefined) {
      setVisible(forceVisible);
    }
  }, [forceVisible]);

  const getModalClass = () => {
    switch (type) {
      case "success":
        return "status-modal success";
      case "error":
        return "status-modal error";
      case "info":
        return "status-modal info";
      case "warning":
        return "status-modal warning";
      default:
        return "status-modal";
    }
  };

  return (
    <div
      className={`${getModalClass()} ${
        visible ? "status-modal-animate-in" : "status-modal-animate-out"
      } flex-h-center flex-h-align`}
    >
      <p className="status-modal-message">{message}</p>
    </div>
  );
};
