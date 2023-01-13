import "./Status.scss";

import { FC } from "react";

import { StatusProps } from "./types";

export const Status: FC<StatusProps> = ({ title }) => {
  return <div className="status">{title}</div>;
};
