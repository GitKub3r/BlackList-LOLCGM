export type FormButtonProps = {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
};
