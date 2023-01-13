import "./OrderInfoHeader.scss";

import { FC } from "react";
import { Button, Status } from "components";
import { AddIcon, BackIcon, DeleteIcon, EditIcon, EyeIcon } from "icons";

import { OrderInfoHeaderProps } from "./types";
import { useNavigate } from "react-router-dom";

export const OrderInfoHeader: FC<OrderInfoHeaderProps> = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="order-info-header">
      <Button
        className="order-info-header__back-button"
        onClick={() => navigate(-1)}
      >
        <BackIcon />
      </Button>
      <div className="order-info-header__main">
        {order ? (
          <div className="order-info-header__main-title">
            Заявка на перевозки №{order.id} <Status title="Активная" />
          </div>
        ) : (
          <div className="order-info-header__main-title--loading" />
        )}

        {order ? (
          <div className="order-info-header__main-info">
            <span className="order-info-header__main-info-part">
              Создано: {order.create_dt}
            </span>
            {!!order.load_dt && !!order.ending_dt && (
              <span className="order-info-header__main-info-part">
                Сроки: {order.load_dt} - {order.ending_dt}
              </span>
            )}
            <span className="order-info-header__main-info-part">
              <EyeIcon />
              {order.views_count}
            </span>
          </div>
        ) : (
          <div className="order-info-header__main-info--loading" />
        )}
      </div>
      <div className="order-info-header__buttons-container">
        <Button disabled={!order}>
          <AddIcon /> Добавить рейсы
        </Button>

        <Button className="order-info-header__control-button" disabled={!order}>
          <EditIcon />
        </Button>

        <Button className="order-info-header__control-button" disabled={!order}>
          <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};
