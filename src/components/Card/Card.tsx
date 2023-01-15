import "./Card.scss";

import { FC } from "react";

import { CardProps } from "./types";

export const Card: FC<CardProps> = ({
  children,
  title,
  className,
  ...props
}) => {
  return (
    <div
      className={["card", ...(className ? [className] : [])].join(" ")}
      {...props}
    >
      {title && <div className="card__header">{title}</div>}
      {children}
    </div>
  );
};
