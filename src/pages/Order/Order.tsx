import "./Order.scss";

import { FC, useEffect, useState } from "react";
import { OrderData } from "types";
import { useLocation } from "react-router-dom";
import { OrderInfoCard, OrderInfoHeader } from "./components";
import { cards } from "./cards";

export const Order: FC = () => {
  const { pathname } = useLocation();

  const id = pathname.split("/").at(-1);

  const [order, setOrder] = useState<undefined | OrderData>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/orders/${id}`)
      .then((res) =>
        res.json().then((json) => {
          setOrder(json);
          setIsLoading(false);
        })
      )
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      });
  }, [id]);

  return (
    <div className="order">
      <OrderInfoHeader order={order} />
      <div className="order__cards-container">
        {cards.map(({ className, children, ...card }) => (
          <OrderInfoCard
            key={card.title}
            className={[
              className,
              ...(isLoading || isError ? ["order-info-card--loading"] : []),
            ].join(" ")}
            {...card}
          >
            {children}
          </OrderInfoCard>
        ))}
      </div>
    </div>
  );
};
