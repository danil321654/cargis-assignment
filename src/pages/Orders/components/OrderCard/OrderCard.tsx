import "./OrderCard.scss";

import { Card } from "components";
import { OrderCardProps } from "./types";
import { useNavigate } from "react-router-dom";

export const OrderCard = ({ order }: OrderCardProps) => {
  const navigate = useNavigate();
  return (
    <Card className="order-card" onClick={() => navigate(String(order.id))}>
      <div className="order-card__title">Заявка №{order.id}</div>
    </Card>
  );
};
