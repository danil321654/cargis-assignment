import "./Orders.scss";

import { FC, useEffect, useState } from "react";

import { OrderListElement } from "types";
import { Loader, Tabs } from "components";
import { OrderCard, SearchPanel } from "./components";

export const Orders: FC = () => {
  const [orders, setOrders] = useState<OrderListElement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/orders/list`)
      .then((res) =>
        res.json().then((json) => {
          setOrders(json);
          setIsLoading(false);
        })
      )
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="orders">
      <SearchPanel />
      <Tabs />
      {isLoading || isError ? (
        <Loader />
      ) : (
        <div className="orders__list-container">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};
