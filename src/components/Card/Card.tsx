import "./Card.scss";

import { FC } from "react";
import { CardProps } from "./types";

export const Card: FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
