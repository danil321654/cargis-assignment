import "./Details.scss";
import "react-circular-progressbar/dist/styles.css";

import { FC } from "react";
import { DetailsProps } from "./types";
import { CircularProgressbar } from "react-circular-progressbar";
import { CalendarIcon, ClockOutlineIcon, GeoPositionIcon } from "icons";
import { toStringDate } from "../utils";

export const Details: FC<DetailsProps> = ({ order }) => {
  return (
    <div className="details">
      <div className="details__route-info">
        <div className="details__points">
          <div className="details__point">
            <GeoPositionIcon />
            Пункт А
          </div>
          <div className="details__point">
            Пункт Б
            <GeoPositionIcon />
          </div>
        </div>
        <div className="details__route-line">
          <div className="details__point details__distance">
            {Math.round(order.distance_m / 1000)} км
          </div>
          <div className="details__dot" />
          <hr className="details__dashed-line" />
          <div className="details__dot" />
        </div>
        <div className="details__addresses">
          <div className="details__address">{order.loading_address}</div>
          <div className="details__address">{order.unloading_address}</div>
        </div>
      </div>
      <div className="details__cards-container">
        <div className="details__card details__card--dark">
          <div className="details__card-label">Перевезено</div>
          <div className="details__value-container">
            <CircularProgressbar
              value={(order.tonnage_balance_kg / order.tonnage_kg ?? 0) * 100}
              text={`${
                (order.tonnage_balance_kg / order.tonnage_kg || 0) * 100
              }%`}
              classes={{
                root: "CircularProgressbar details__progress",
                trail: "CircularProgressbar-trail details__progress-trail",
                path: "CircularProgressbar-path details__progress-path",
                text: "CircularProgressbar-text details__progress-text",
                background:
                  "CircularProgressbar-background details__progress--background",
              }}
            />
            <div className="details__card-value">
              {Math.round(order.tonnage_balance_kg / 1000)} тонн
              <div className="details__card-subvalue">
                Из {Math.round(order.tonnage_kg / 1000)} тонн
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="details__card">
          <div className="details__card-label">Груз</div>
          <div className="details__card-value">{order.cargo_type}</div>
        </div>
        <div className="details__card">
          <div className="details__card-label">Тариф</div>
          <div className="details__card-value">
            {order.daily_shipping_rate_kg ?? 0} ₽ / тонна
            <div className="details__card-subvalue">
              {Math.round(order.downtime_cost / 100)} ₽ / тонна
            </div>
          </div>
        </div>
      </div>
      {
        <div className="details__date-line">
          <div className="details__point details__date">
            <CalendarIcon className="details__geo-icon" />С{" "}
            {toStringDate(order.load_dt)}
          </div>
          <div className="details__point details__distance details__date-icon">
            <ClockOutlineIcon className="details__geo-icon" />
          </div>
          <div className="details__route-line">
            <div className="details__dot" />
            <hr className="details__dashed-line" />
            <div className="details__dot" />
          </div>
          <div className="details__point details__date">
            По {toStringDate(order.ending_dt)} <CalendarIcon />
          </div>
        </div>
      }
    </div>
  );
};
