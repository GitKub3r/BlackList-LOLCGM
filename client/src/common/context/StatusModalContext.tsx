import React, { useRef } from "react";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { StatusModal } from "../components/status-modal/StatusModal";

type StatusType = "success" | "error" | "info" | "warning";

interface StatusModalContextProps {
  showStatus: (message: string, type: StatusType) => void;
}

const StatusModalContext = createContext<StatusModalContextProps | undefined>(
  undefined
);

export const useStatusModal = () => {
  const ctx = useContext(StatusModalContext);
  if (!ctx)
    throw new Error("useStatusModal must be used within a StatusModalProvider");
  return ctx;
};

export const StatusModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<{
    message: string;
    type: StatusType;
  } | null>(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showStatus = (message: string, type: StatusType) => {
    setModal({ message, type });
    setVisible(true);

    // Limpiar timeout anterior si existe
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      timeoutRef.current = null;
    }, 3000);
  };

  return (
    <StatusModalContext.Provider value={{ showStatus }}>
      {children}
      {modal && (
        <StatusModal
          message={modal.message}
          type={modal.type}
          forceVisible={visible}
        />
      )}
    </StatusModalContext.Provider>
  );
};
