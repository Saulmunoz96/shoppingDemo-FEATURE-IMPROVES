import "./CustomizeButton.css";
import { CustomizePropsButton } from "../../utils/interfaces/CustomizePropsButton.interface";

export function CustomizeButton({
  onclick,
  text,
  children,
  color,
}: CustomizePropsButton) {
  return (
    <button
      className="customize-button"
      onClick={onclick}
      style={{
        background: color,
      }}
    >
      {text}
      {"   "}
      {children}
    </button>
  );
}
