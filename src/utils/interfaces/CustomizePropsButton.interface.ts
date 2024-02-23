import { ReactElement } from "react";

export interface CustomizePropsButton {
  onclick: () => void;
  text: string;
  children?: ReactElement | ReactElement[];
  color: string;
}
