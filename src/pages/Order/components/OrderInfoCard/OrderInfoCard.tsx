import "./OrderInfoCard.scss";

import { FC } from "react";
import { Card } from "components";
import { OrderInfoCardProps } from "./types";

export const OrderInfoCard: FC<OrderInfoCardProps> = ({
  className,
  children,
  ...props
}) => (
  <Card
    className={["order-info-card", ...(className ? [className] : [])].join(" ")}
    {...props}
  >
    {children}
  </Card>
);
