import { Card } from "./types";

export const cards: Card[] = [
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
    children: <div className="order-info-card__content" />,
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
