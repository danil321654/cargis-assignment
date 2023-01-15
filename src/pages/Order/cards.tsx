import { Map } from "components";
import { OrderData } from "types";
import { Card } from "./types";

export const getCards: (order?: OrderData) => Card[] = (order) => {
  const coordinatesFrom = (order?.coords_from.split(",").map((el) => +el) as [
    number,
    number
  ]) ?? [0, 0];
  const coordinatesTo = (order?.coords_to.split(",").map((el) => +el) as [
    number,
    number
  ]) ?? [0, 0];

  const center: [number, number] = [
    (coordinatesFrom[0] + coordinatesTo[0]) / 2,
    (coordinatesFrom[1] + coordinatesTo[1]) / 2,
  ];

  return [
    {
      title: "Детали перевозки",
      className: "order__details",
      children: <div className="order-info-card__content" />,
    },
    {
      title: "Заказчик",
      className: "order__client",
      children: <div className="order-info-card__content" />,
    },
    {
      title: "Маршрут на карте",
      className: "order__route",
      children: order && (
        <Map
          zoom={2}
          center={center}
          route={[coordinatesFrom, coordinatesTo]}
        />
      ),
    },
    {
      title: "Погрузка",
      className: "order__load",
      children: <div className="order-info-card__content" />,
    },
    {
      title: "Выгрузка",
      className: "order__unload",
      children: <div className="order-info-card__content" />,
    },
    {
      title: "Дополнительно",
      className: "order__additional",
      children: <div className="order-info-card__content" />,
    },
  ];
};
