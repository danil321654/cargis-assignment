import "./OrderCard.scss";

import { Card, Status } from "components";
import { OrderCardProps } from "./types";
import { useNavigate } from "react-router-dom";
import { ClockIcon, EyeIcon } from "icons";

export const OrderCard = ({ order }: OrderCardProps) => {
  const navigate = useNavigate();
  return (
    <Card className="order-card" onClick={() => navigate(String(order.id))}>
      <div className="order-card__title">
        Заявка №{order.id} <Status title="Активная" />
      </div>
      <div className="order-card__info">
        <span className="order-card__info-part">От {order.create_dt}</span>
        {!!order.load_dt && !!order.ending_dt && (
          <span className="order-card__info-part">
            <ClockIcon />
            {order.load_dt} - {order.ending_dt}
          </span>
        )}
        <span className="order-card__info-part">
          <EyeIcon />
          {order.views_count}
        </span>
      </div>
    </Card>
  );
};
